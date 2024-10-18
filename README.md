
Weather Dashboard

A fully responsive weather dashboard that fetches weather data from the OpenWeather API, integrates with Gemini Chatbot API, and visualizes weather forecasts using Chart.js. The app allows users to view weather details for a specific city, displays a 5-day weather forecast, and offers an interactive chatbot for both weather and general queries.


---

Features

- Weather Data: Displays current weather conditions (temperature, humidity, wind speed, etc.) for any city using OpenWeather API.
- Dynamic Background: The weather widget's background changes dynamically based on the weather condition (e.g., cloudy, sunny, rainy).
- Charts with Animations:
  - Bar Chart: Displays temperature for the next 5 days.
  - Doughnut Chart: Shows the percentage of weather conditions (e.g., sunny, rainy) over 5 days.
  - Line Chart: Illustrates temperature trends over the 5-day forecast.
- Weather Table: Displays detailed weather forecast data with pagination.
- Chatbot: Integrates the Gemini API for natural language queries, allowing users to ask general or weather-specific questions.

---

Tech Stack

- HTML5: For structure and content.
- CSS3: For responsive and dynamic styling.
- JavaScript (ES6): For functionality, API integration, and Chart.js configuration.
- Chart.js: For displaying weather data visualizations.
- OpenWeather API: For fetching real-time weather data.
- Gemini Chatbot API: For handling general and weather-related queries via chatbot.

---

 Setup Instructions

1. Clone the Repository


git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard


 2. Install Dependencies

No external dependencies are required. Just ensure you have an internet connection to load external libraries like Chart.js and the APIs.

 3. API Configuration

1. OpenWeather API:
   - Sign up at [OpenWeather](https://openweathermap.org/) to get your free API key.
   - Replace `YOUR_OPENWEATHER_API_KEY` in `script.js` with your API key.

2. Gemini API:
   - Sign up for the Gemini API from [Google AI Studio](https://ai.google.dev/aistudio) and obtain your API key.
   - Replace `YOUR_GEMINI_API_KEY` in `chatbot.js` with your Gemini API key.
   
 4. Run the Project

Simply open the `index.html` file in your browser:

You can also serve it through a local server like `Live Server` in VSCode.

---


---

