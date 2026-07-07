// पीयूष गारमेंट्स - डायरेक्ट ऑर्डर सिस्टम
function sendStoreOrder(event) {
    if (event) event.preventDefault(); // फॉर्म को रीफ्रेश होने से रोकना
    
    try {
        // इनपुट बॉक्स से वैल्यू निकालना
        const name = document.getElementById('custName').value;
        const product = document.getElementById('prodCat').value;
        const size = document.getElementById('prodSize').value;
        const market = document.getElementById('marketLoc').value;
        
        // अगर कोई फील्ड खाली है तो रोकना
        if(!name) {
            alert("कृपया अपना नाम लिखें!");
            return false;
        }
        
        // व्हाट्सएप के लिए साफ और सुंदर मैसेज
        const message = `जय राम जी की! 🙏%0A*पीयूष गारमेंट्स (Piyush Garments) नया ऑर्डर*%0A%0A*ग्राहक का नाम:* ${name}%0A*कपड़ा प्रकार:* ${product}%0A*चुना गया साइज़:* ${size}%0A*डिलीवरी बाज़ार:* ${market}`;
        
        // डायरेक्ट व्हाट्सएप यूआरएल
        const whatsappUrl = `https://wa.me/918878906237?text=${message}`;
        
        // मोबाइल और ब्राउज़र दोनों पर काम करने के लिए डायरेक्ट लोकेशन चेंज
        window.location.href = whatsappUrl;
        
    } catch (error) {
        console.error("ऑर्डर भेजने में समस्या आई:", error);
    }
    
    return false;
}

// यह सुनिश्चित करने के लिए कि फॉर्म सबमिट होने पर हमारा ही फंक्शन चले
document.addEventListener("DOMContentLoaded", function() {
    const orderForm = document.getElementById('tgOrderForm');
    if (orderForm) {
        orderForm.onsubmit = sendStoreOrder;
    }
});
