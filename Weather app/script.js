// Configure and Constants
const WEATHER_API_KEY = 'API Key'; //Replace with your API key
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const PLACEHOLDER_API_UrL = 'https://jsonplaceholder.typicode.com/posts';

// Global state to store savd locations
let savedLocations = [];

//DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    //TAb navigation
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute(data-tab);

            //Update active tab
            tabs.forEach(t => t.classList.remove('active');
            tab.classList.add('active');

            // Update active content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.gerElemtbyId('${tabId}-tab').classList.add('active');
        });
    });

    //GET Request - Weather data
    document.getElementById('get-weather').addEventListener('click', getWeather);
    
    //POST Request - Save location
    document.getElementById('save-location').addEventListener('click', savelocation);

    //Edit Modal Event Listeners
    document.getElementById('update-location').addEventListener('click', updateLocation);
    document.getElementById('cancel-edit').addEventListener('click', () => {
        document.getElementById('edit-modal').style.display ='none';
    });

    //Load initial saved locations
    fetchSavedLocations();
});

//Utility Functions
function displayResponseInfo(method, url, status., data) {
    const responseInfo = document.getElementById('response-info');
    responseInfo.textContent = 'method: ${method}'
    