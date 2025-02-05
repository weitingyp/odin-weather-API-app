let userLocation = prompt("enter a location").replace(/[^a-zA-Z0-9]/g, "%20");

// API units options include 'us', 'metric', uk, 'base
let units = "us";

// API key (free API)
const API_KEY = "VSGF7NCUVGWS7PTKPWJPVEKDB";

// Fetch weather data using Weather API
// Promises syntax

/* Commented out to practice async/await syntax
const weatherPromise = fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=${API_KEY}`,{
                            mode: 'cors'
                            })
                            .then( (response) => response.json())
                            .then( (data) => console.log(data))
                            .catch( (error) => {console.error(error)}); 
*/

async function fetchWeatherData(){
    const weatherResponse = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=${API_KEY}`,{
        mode: 'cors'
        });
    const dataJson = await weatherResponse.json();
    console.log(dataJson);
}

fetchWeatherData().catch(
    (error) => console.error(error)
);

const displayController = (function(){
    const userLocInput = document.querySelector("input#user-location");
    const submitUserLocBtn = document.querySelector("#submit-user-location-btn");
    submitUserLocBtn.addEventListener('click', (e) => {
        e.preventDefault();
        userLocation = userLocInput.value;
        renderData();
    });

    const renderData = ()=>{
        
        const dataContainer = document.querySelector("#data-container");
        console.log(dataContainer);
        const table = document.createElement("table");
        const row = document.createElement("tr");
        const cell = document.createElement("td");

        const headings = ['Date'
                            ,'Conditions'
                            , 'Temp'
                            , 'Feels Like'
                            , 'Sunrise'
                            , 'Sunset'
        ]

        dataContainer.appendChild(table);
        table.appendChild(row);
        for (const heading of headings){
            const th = document.createElement("th");
            th.innerText = heading;
            row.appendChild(th);
        }

    };
})();