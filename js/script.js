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
