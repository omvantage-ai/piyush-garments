// 🔥 पीयूष गारमेंट्स - फायरबेस कॉन्फ़िगरेशन (Compat SDK फिक्स्ड)
const firebaseConfig = {
  apiKey: "AIzaSyDWUF7xHZ7-S-RKxxfYqwg8JqZ10ryDLM",
  authDomain: "piyush-garments-v2.firebaseapp.com",
  projectId: "piyush-garments-v2",
  storageBucket: "piyush-garments-v2.firebasestorage.app",
  messagingSenderId: "831822579079",
  appId: "1:831822579079:web:23cc902c56ee7eadb8bf22",
  measurementId: "G-P8CVTRGN61"
};

// फायरबेस और फायरस्टोर को सही तरीके से शुरू करना
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 🛒 डेटाबेस से लाइव कपड़े (Products) लोड करने का फंक्शन
function loadProductsFromFirebase() {
  const container = document.getElementById('products-container');
  if (!container) return;

  db.collection("products").get().then((querySnapshot) => {
    container.innerHTML = ""; // लोड हो रहा है टेक्स्ट हटाएँ

    if (querySnapshot.empty) {
      container.innerHTML = `<div style="text-align: center; width: 100%; color: var(--text-muted);">फिलहाल कोई प्रोडक्ट उपलब्ध नहीं है।</div>`;
      return;
    }

    querySnapshot.forEach((doc) => {
      const product = doc.data();
      
      const productCard = `
        <div class="product-card">
          <img src="${product.image || 'images/jeans.jpg.jpg'}" alt="${product.name || 'Premium Clothing'}" class="product-img">
          <div class="discount-tag">${product.discountTag || 'Special Offer'}</div>
          <h3>${product.name || 'Premium Item'}</h3>
          <div class="price-section">
            <span class="discount-price">₹${product.discountPrice}</span>
            <span class="original-price">₹${product.originalPrice}</span>
          </div>
          <button class="buy-btn" onclick="sendDirectOrder('${product.name || 'Premium Item'}')">💬 Order on WhatsApp</button>
        </div>
      `;
      container.innerHTML += productCard;
    });
  }).catch((error) => {
    console.error("डेटा लोड करने में गड़बड़ हुई: ", error);
    container.innerHTML = `<div style="text-align: center; width: 100%; color: var(--primary-red);">डेटा लोड करने में समस्या आई। कृपया बाद में प्रयास करें।</div>`;
  });
}

// व्हाट्सएप पर सीधे सुरक्षित संदेश भेजना (encodeURIComponent के साथ)
function sendDirectOrder(productName) {
  const message = `जय राम जी की! 🙏\n*पीयूष गारमेंट्स (Piyush Garments)*\n\nमुझे आपकी वेबसाइट पर यह प्रोडक्ट पसंद आया है और मैं इसका ऑर्डर देना चाहता हूँ:\n📦 *प्रोडक्ट:* ${productName}`;
  const whatsappUrl = `https://wa.me/918878906237?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappUrl;
}

// 📅 ऑटोमैटिक मार्केट लाइव ट्रैकर लॉजिक
function loadLiveMarketTracker() {
  const statusText = document.getElementById('live-status-text');
  if (!statusText) return;

  const currentDay = new Date().getDay();  
  let todayLocation = "";  

  switch (currentDay) {  
    case 1: todayLocation = "आज हमारी दुकान 📍 शाहगंज बाज़ार में लाइव है!"; break;  
    case 2: todayLocation = "आज हमारी दुकान 📍 Babai (माखन नगर) मुख्य बाज़ार में लाइव है!"; break;  
    case 3: todayLocation = "आज हमारी दुकान 📍 सांगाखेड़ा खुर्द में लाइव है!"; break;  
    case 4: todayLocation = "आज हमारी दुकान 📍 सांगाखेड़ा कलां में लाइव है!"; break;  
    case 5: todayLocation = "आज हमारी दुकान 📍 बकतरा / आरी में लाइव है!"; break;  
    case 6: todayLocation = "आज हमारी दुकान 📍 गनेरा (Ganera) में लाइव है!"; break;  
    case 0: todayLocation = "आज हमारी दुकान 📍 मोहासा इंडस्ट्रियलエリア में लाइव है!"; break;  
    default: todayLocation = "आज हमारी दुकान 📍 माखन नगर मुख्य दुकान पर उपलब्ध है!";  
  }  
  statusText.innerText = todayLocation;
}

// ऑर्डर फॉर्म सबमिशन सिस्टम (सुरक्षित एन्कोडिंग के साथ)
function initOrderForm() {
  const orderForm = document.getElementById('storeOrderForm');
  if (!orderForm) return;

  orderForm.addEventListener('submit', function(event) {  
    event.preventDefault();  
    const name = document.getElementById('custName').value.trim();  
    const product = document.getElementById('prodCat').value;  
    const size = document.getElementById('prodSize').value;  
    const market = document.getElementById('marketLoc').value;  
      
    if (!name) {  
        alert("कृपया अपना नाम लिखें!");  
        return;  
    }  
      
    const message = `जय राम जी की! 🙏\n*पीयूष गारमेंट्स (Piyush Garments) नया ऑर्डर*\n\n*ग्राहक का नाम:* ${name}\n*कपड़ा प्रकार:* ${product}\n*चुना गया साइज़:* ${size}\n*डिलीवरी बाज़ार:* ${market}`;  
    const whatsappUrl = `https://wa.me/918878906237?text=${encodeURIComponent(message)}`;  
    window.location.href = whatsappUrl;  
  });
}

// 📱 मोबाइल हैमबर्गर मेनू लॉजिक
function initHamburgerMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links-container');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('open');
    });

    // लिंक पर क्लिक करते ही मेनू बंद करें
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('open');
      });
    });
  }
}

// 🏁 सभी फंक्शन्स को DOMContentLoaded के साथ स्थिर रूप से लोड करना
document.addEventListener("DOMContentLoaded", function() {
  loadLiveMarketTracker();
  loadProductsFromFirebase();
  initOrderForm();
  initHamburgerMenu();
});
