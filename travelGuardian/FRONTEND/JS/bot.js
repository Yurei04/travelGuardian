
/*

//CHAT BOT CODE

*/
document.addEventListener('DOMContentLoaded', () => {
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');

//ALL RESPOSNSES
    const responses = {
        "hello": "Hello! Welcome to your Travel Safety Assistant. I'm here to provide you with essential information and tips to ensure your journey is safe and enjoyable. How can I assist you today?",
    
        "weather": "Understanding the weather conditions of your destination is crucial for a comfortable trip. I recommend checking reliable weather websites or apps like Weather.com or AccuWeather before and during your travels. This will help you pack appropriate clothing and plan activities accordingly. Always be prepared for unexpected changes in weather by carrying essentials like an umbrella or a light jacket.",
    
        "safety": "Safety should always be a top priority while traveling. Research the safety situation of your destination by checking government travel advisories and reading recent news articles. Avoid displaying valuables openly, stay in well-reviewed accommodations, and be cautious in crowded places to prevent pickpocketing. It's also wise to inform someone about your travel itinerary and keep emergency contacts handy.",
    
        "inflation": "Inflation can affect the cost of goods and services at your destination. To manage your budget effectively, research the current economic situation and exchange rates. Utilize budgeting apps to track your expenses in real-time and always have some local currency as a backup. Consider using credit cards that offer favorable exchange rates and minimal foreign transaction fees.",
    
        "air quality": "Poor air quality can have adverse effects on your health, especially if you have pre-existing respiratory conditions. Before traveling, check the Air Quality Index (AQI) of your destination using apps like AirVisual. If the AQI is high, consider carrying N95 masks and necessary medications. Try to limit outdoor activities on days when the air quality is particularly poor.",
    
        "restrictions": "Travel restrictions can vary due to health crises, political situations, or natural disasters. Always check the latest information from official sources like your government's foreign affairs department and the World Health Organization. Ensure you have all necessary documents such as visas, vaccination certificates, and negative test results. Also, be prepared for possible quarantine requirements and plan your itinerary accordingly.",
    
        "tourist spots": "While visiting popular tourist spots, remain vigilant as these areas can attract petty criminals. Avoid carrying large amounts of cash and keep your personal belongings secure. It's also beneficial to visit during daylight hours and stay within well-populated areas. Don't forget to explore less-known attractions which can offer unique experiences with potentially fewer safety concerns.",
    
        "cost of living": "Understanding the cost of living at your destination helps in effective budgeting. Research average prices for accommodation, food, transportation, and entertainment. Websites like Numbeo provide up-to-date information on living costs in various cities. Always allocate extra funds for emergencies and unexpected expenses.",
    
        "stay safe": "To ensure your safety while traveling, follow these tips: stay aware of your surroundings, avoid isolated areas especially at night, keep copies of important documents, and learn basic phrases in the local language for emergencies. Consider purchasing travel insurance that covers medical emergencies, trip cancellations, and lost belongings.",
    
        "emergency contacts": "It's essential to have a list of emergency contacts when traveling. Note down the local emergency numbers for police, ambulance, and fire services. Also, have the contact information of your country's embassy or consulate in the destination country. Share your accommodation details and itinerary with friends or family back home.",
    
        "local laws": "Familiarize yourself with the local laws and customs of your destination to avoid legal issues. Certain behaviors that are acceptable in your country may be illegal elsewhere. Research topics such as dress codes, public conduct, and regulations regarding photography, especially in sensitive areas. Respecting local laws and customs not only keeps you safe but also enriches your travel experience.",
    
        "transportation safety": "When using local transportation, opt for reputable services. Use licensed taxis or ride-sharing apps, and be cautious when using public transport late at night. If renting a vehicle, ensure it’s from a trusted company and familiarize yourself with local traffic laws and driving conditions. Always wear seatbelts and avoid traveling alone in unfamiliar areas.",
    
        "health precautions": "Before traveling, consult with a healthcare provider about necessary vaccinations and health advisories for your destination. Pack a basic first-aid kit including medications for common ailments like headaches, stomach issues, and allergies. Drink bottled or purified water and be cautious with street food to prevent foodborne illnesses.",
    
        "scam awareness": "Be aware of common scams targeting tourists such as overcharging, fake petitions, or unsolicited help with your luggage. Stay informed by reading travel blogs and forums where travelers share their experiences. If something feels suspicious or too good to be true, it's best to politely decline and walk away.",
    
        "document safety": "Keep your important documents like passport, ID, and travel tickets secure. Use a hotel safe when available and carry photocopies or digital scans of these documents. Consider using RFID-blocking wallets to protect against electronic pickpocketing.",
    
        "money management": "Diversify your money sources by carrying a mix of cash, credit cards, and debit cards. Inform your bank about your travel plans to avoid unexpected card blocks. Use ATMs located inside banks or reputable areas and monitor your account regularly for any unauthorized transactions.",
    
        "communication": "Ensure you have a reliable means of communication during your travels. Purchase a local SIM card or an international roaming plan to stay connected. Download useful apps like Google Maps, language translators, and local emergency services. Having constant communication access can be crucial in emergencies.",
    
        "cultural awareness": "Respecting local culture enhances your travel experience and ensures better interactions with locals. Learn about local customs, traditions, and etiquette. Dress appropriately, especially when visiting religious or conservative areas, and be mindful of local sensitivities.",
    
        "packing tips": "Pack light and only bring essentials to make your travel more convenient. Use luggage locks and identifiable tags. Keep important items like documents, electronics, and medications in your carry-on bag. Prepare a small emergency kit with items like a flashlight, multi-tool, and portable charger.",
    
        "goodbye": "Thank you for using the Travel Safety Assistant. Wishing you a safe and memorable journey! If you need any more assistance or tips, don't hesitate to reach out. Safe travels!"
    };
    
    chatbotSend.addEventListener('click', () => {
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            displayMessage('You', userMessage);
            chatbotInput.value = '';
            
            const response = getChatbotResponse(userMessage);
            displayMessage('Bot', response);
        }
    });

    function displayMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = `${sender}: ${message}`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getChatbotResponse(query) {
        const lowerCaseQuery = query.toLowerCase();
        for (const key in responses) {
            if (lowerCaseQuery.includes(key)) {
                return responses[key];
            }
        }
        return "Sorry, I did not understand that.";
    }
});
