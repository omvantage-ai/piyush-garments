// 🔥 पीयूष गारमेंट्स - फायरबेस कॉन्फ़िगरेशन (v2.2 फिक्स्ड)
const firebaseConfig = {
  apiKey: "AIzaSyDWUF7xHZ7-S-RKxxfYqwg8JqZ10ryDLM", // आपकी असली चाबी यहाँ सेट कर दी है
  authDomain: "piyush-garments-v2.firebaseapp.com",
  projectId: "piyush-garments-v2",
  storageBucket: "piyush-garments-v2.firebasestorage.app",
  messagingSenderId: "831822579079",
  appId: "1:831822579079:web:23cc902c56ee7eadb8bf22",
  measurementId: "G-P8CVTRGN61"
};

// फायरबेस और डेटाबेस को सही फॉर्मेट में शुरू करना
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 🛒 डेटाबेस से लाइव कपड़े (Products) लोड करने का फंक्शन
function loadProductsFromFirebase() {
  const container = document.getElementById('products-container');
  if (!container) return;

  db.collection("products").get().then((querySnapshot) => {
    // अगर डेटा आ जाता है, तो स्टेटिक "Shop By Categories" वाला पुराना ढांचा साफ करें
    container.innerHTML = ""; 

    querySnapshot.forEach((doc) => {
      const product = doc.data();
      
      // डेटाबेस के डेटा से सुंदर कार्ड बनाना
      const productCard = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}" class="product-img">
          <div class="discount-tag" style="background: var(--primary-red); color: white; padding: 4px 8px; border-radius: 6px; display: inline-block; margin-bottom: 10px; font-size: 0.8rem; font-weight: bold;">${product.discountTag}</div>
          <h3>${product.name}</h3>
          <div class="price-section" style="margin: 10px 0;">
            <span class="discount-price" style="color: var(--neon-blue); font-weight: bold; font-size: 1.2rem; margin-right: 10px;">₹${product.discountPrice}</span>
            <span class="original-price" style="color: var(--text-muted); text-decoration: line-through; font-size: 0.95rem;">₹${product.originalPrice}</span>
          </div>
          <button class="order-btn" style="width: 100%; padding: 10px; background: var(--primary-red); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;" onclick="sendDirectOrder('${product.name}')">💬 WhatsApp ऑर्डर</button>
        </div>
      `;
      container.innerHTML += productCard;
    });
  }).catch((error) => {
    console.log("डेटा लोड करने में गड़बड़ हुई: ", error);
  });
}

// सीधे किसी प्रोडक्ट का व्हाट्सएप ऑर्डर भेजने के लिए
function sendDirectOrder(productName) {
  const message = `जय राम जी की! 🙏%0A*पीयूष गारमेंट्स (Piyush Garments)*%0A%0Aमुझे आपकी वेबसाइट पर यह प्रोडक्ट पसंद आया है और मैं इसे खरीदना चाहता हूँ:%0A📦 *प्रोडक्ट:* ${productName}`;
  window.location.href = `https://wa.me/918878906237?text=${message}`;
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
    case 0: todayLocation = "आज हमारी दुकान 📍 मोहासा इंडस्ट्रियल एरिया में लाइव है!"; break;  
    default: todayLocation = "आज हमारी दुकान 📍 माखन नगर मुख्य दुकान पर उपलब्ध है!";  
  }  
  statusText.innerText = todayLocation;
}

// फॉर्म सबमिशन सिस्टम
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
      
    const message = `जय राम जी की! 🙏%0A*पीयूष गारमेंट्स (Piyush Garments) नया ऑर्डर*%0A%0A*ग्राहक का नाम:* ${name}%0A*कपड़ा प्रकार:* ${product}%0A*चुना गया साइज़:* ${size}%0A*डिलीवरी बाज़ार:* ${market}`;  
    window.location.href = `https://wa.me/918878906237?text=${message}`;  
  });
}

// सभी चीजों को पेज लोड होते ही एक साथ शुरू करना
window.addEventListener('DOMContentLoaded', () => {
  loadLiveMarketTracker();
  loadProductsFromFirebase();
  initOrderForm();
});
