// यह चेक करने के लिए कि जावास्क्रिप्ट सही से लिंक हुई या नहीं
document.addEventListener("DOMContentLoaded", function() {
    const testParagraph = document.getElementById("test-para");
    if(testParagraph) {
        testParagraph.innerHTML = "🎉 बधाई हो! HTML, CSS और JavaScript आपस में सफ़लतापूर्वक जुड़ चुके हैं।";
        testParagraph.style.color = "#00e5ff"; // नियॉन ब्लू कलर
    }
});
/* 📦 6. DAY 5: ORDER FORM DESIGN */
.order-section {
    margin-top: 60px;
    padding: 20px 0;
}

.order-form-container {
    max-width: 500px;
    margin: 0 auto;
    background: var(--card-bg);
    padding: 35px;
    border-radius: 20px;
    border: 1px solid rgba(255, 0, 53, 0.15);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.form-group {
    margin-bottom: 20px;
    text-align: left;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    color: var(--text-muted);
    font-size: 0.9rem;
    font-weight: 500;
}

.form-group input, .form-group select {
    width: 100%;
    padding: 12px 15px;
    background: var(--bg-dark);
    border: 1px solid #1e293b;
    border-radius: 10px;
    color: var(--text-main);
    font-size: 0.95rem;
    outline: none;
    transition: var(--transition-smooth);
}

.form-group input:focus, .form-group select:focus {
    border-color: var(--primary-red);
    box-shadow: 0 0 10px rgba(255, 0, 85, 0.2);
}

.order-btn {
    width: 100%;
    padding: 14px;
    background: #25D366; /* व्हाट्सएप ग्रीन कलर */
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
    transition: var(--transition-smooth);
}

.order-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
}
