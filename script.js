const apiKey = 'YOUR_OPENWEATHER_API_KEY';

// Event listener for getting weather
document.getElementById('get-weather-btn').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('city-input').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Update weather widget
            document.getElementById('city-name').textContent = data.name;
            document.getElementById('temp').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
            document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            updateBackground(data.weather[0].description);

            // Fetch 5-day forecast
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
                .then(res => res.json())
                .then(forecastData => {
                    const temperatures = forecastData.list.map(entry => entry.main.temp);
                    const conditions = forecastData.list.map(entry => entry.weather[0].description);
                    createCharts(temperatures, conditions);
                    populateTable(forecastData);
                });
        })
        .catch(error => alert("City not found!"));
}

function updateBackground(weatherCondition) {
    const widget = document.getElementById('weather-widget');
    if (weatherCondition.includes('rain')) {
        widget.style.backgroundImage = "url('assets/rainy.png')";
    } else if (weatherCondition.includes('cloud')) {
        widget.style.backgroundImage = "url('assets/cloudy.png')";
    } else {
        widget.style.backgroundImage = "url('assets/sunny.png')";
    }
}

// Create the charts
function createCharts(temps, conditions) {
    const ctxBar = document.getElementById('barChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
            datasets: [{
                label: 'Temperature (°C)',
                data: temps.slice(0, 5),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            animation: {
                delay: 1000
            }
        }
    });

    const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
    new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
            labels: ['Sunny', 'Cloudy', 'Rainy'],
            datasets: [{
                data: conditions.slice(0, 5).map(cond => cond.includes('rain') ? 30 : cond.includes('cloud') ? 50 : 20),
                backgroundColor: ['yellow', 'gray', 'blue']
            }]
        },
        options: {
            animation: {
                delay: 1000
            }
        }
    });

    const ctxLine = document.getElementById('lineChart').getContext('2d');
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
            datasets: [{
                label: 'Temperature (°C)',
                data: temps.slice(0, 5),
                fill: false,
                borderColor: 'blue',
                tension: 0.1
            }]
        },
        options: {
            animation: {
                easing: 'easeOutBounce'
            }
        }
    });
}

// Populate table with forecast
function populateTable(forecastData) {
    const table = document.getElementById('forecast-table');
    table.innerHTML = '';
    forecastData.list.slice(0, 5).forEach(entry => {
        const row = `
            <tr>
                <td>${entry.dt_txt.split(' ')[0]}</td>
                <td>${entry.main.temp}°C</td>
                <td>${entry.weather[0].description}</td>
            </tr>
        `;
        table.insertAdjacentHTML('beforeend', row);
    });
}
