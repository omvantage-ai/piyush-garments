// यह चेक करने के लिए कि जावास्क्रिप्ट सही से लिंक हुई या नहीं
document.addEventListener("DOMContentLoaded", function() {
    const testParagraph = document.getElementById("test-para");
    if(testParagraph) {
        testParagraph.innerHTML = "🎉 बधाई हो! HTML, CSS और JavaScript आपस में सफ़लतापूर्वक जुड़ चुके हैं।";
        testParagraph.style.color = "#00e5ff"; // नियॉन ब्लू कलर
    }
});
