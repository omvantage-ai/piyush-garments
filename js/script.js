// पीयूष गारमेंट्स - डायरेक्ट ऑर्डर सिस्टम (v2.1 फिक्स्ड)
document.addEventListener("DOMContentLoaded", function() {
    const orderForm = document.getElementById('storeOrderForm');
    
    if (orderForm) {
        orderForm.addEventListener('submit', function(event) {
            event.preventDefault(); // फॉर्म को डिफ़ॉल्ट रीफ्रेश होने से रोकना
            
            // डेटा निकालना
            const name = document.getElementById('custName').value.trim();
            const product = document.getElementById('prodCat').value;
            const size = document.getElementById('prodSize').value;
            const market = document.getElementById('marketLoc').value;
            
            if (!name) {
                alert("कृपया अपना नाम लिखें!");
                return;
            }
            
            // व्हाट्सएप टेक्स्ट मैसेज फॉर्मेटिंग
            const message = `जय राम जी की! 🙏%0A*पीयूष गारमेंट्स (Piyush Garments) नया ऑर्डर*%0A%0A*ग्राहक का नाम:* ${name}%0A*कपड़ा प्रकार:* ${product}%0A*चुना गया साइज़:* ${size}%0A*डिलीवरी बाज़ार:* ${market}`;
            
            // व्हाट्सएप लिंक जनरेशन
            const whatsappUrl = `https://wa.me/918878906237?text=${message}`;
            
            // सीधे ब्राउज़र विंडो को रीडायरेक्ट करना (मोबाइल और डेस्कटॉप दोनों के लिए बेस्ट)
            window.location.href = whatsappUrl;
        });
    }
});
// 📅 DAY 9: ऑटोमैटिक मार्केट लाइव ट्रैकर लॉजिक
document.addEventListener("DOMContentLoaded", function() {
    const statusText = document.getElementById('live-status-text');
    if (!statusText) return;

    // वर्तमान दिन का नंबर निकालना (0 = रविवार, 1 = सोमवार, ..., 6 = शनिवार)
    const currentDay = new Date().getDay();
    let todayLocation = "";

    switch (currentDay) {
        case 1:
            todayLocation = "आज हमारी दुकान 📍 शाहगंज बाज़ार में लाइव है!";
            break;
        case 2:
            todayLocation = "आज हमारी दुकान 📍 Babai (माखन नगर) मुख्य बाज़ार में लाइव है!";
            break;
        case 3:
            todayLocation = "आज हमारी दुकान 📍 सांगाखेड़ा खुर्द में लाइव है!";
            break;
        case 4:
            todayLocation = "आज हमारी दुकान 📍 सांगाखेड़ा कलां में लाइव है!";
            break;
        case 5:
            todayLocation = "आज हमारी दुकान 📍 बकतरा / आरी में लाइव है!";
            break;
        case 6:
            todayLocation = "आज हमारी दुकान 📍 गनेरा (Ganera) में लाइव है!";
            break;
        case 0:
            todayLocation = "आज हमारी दुकान 📍 मोहासा इंडस्ट्रियल एरिया में लाइव है!";
            break;
        default:
            todayLocation = "आज हमारी दुकान 📍 माखन नगर मुख्य दुकान पर उपलब्ध है!";
    }

    // वेबसाइट पर टेक्स्ट अपडेट करना
    statusText.innerText = todayLocation;
});
