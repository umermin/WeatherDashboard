const geminiApiKey = 'YOUR_GEMINI_API_KEY';

document.getElementById('send-chat-btn').addEventListener('click', sendChat);

function sendChat() {
    const userQuery = document.getElementById('chat-input').value;
    
    if (userQuery.toLowerCase().includes('weather')) {
        getWeather(); // Call the weather function if the user is asking for weather
    } else {
        // Handle non-weather queries via Gemini API
        fetch(`https://gemini-api-url?apiKey=${geminiApiKey}`, {
            method: 'POST',
            body: JSON.stringify({ query: userQuery }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('chat-response').textContent = data.response;
        })
        .catch(error => console.error('Error:', error));
    }
}
