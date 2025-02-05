// API key (free API)
const API_KEY = "VSGF7NCUVGWS7PTKPWJPVEKDB";

const displayController = (function(){
    let userLocation;
    let units;

    const userLocInput = document.querySelector("input#user-location");
    const userUnitsInput = document.querySelector("select#units");
    const submitUserLocBtn = document.querySelector("#submit-user-location-btn");

    submitUserLocBtn.addEventListener('click', (e) => {
        e.preventDefault();
        userLocation = userLocInput.value.replace(/[^a-zA-Z0-9]/g, "%20");
        
        // API units options include 'us', 'metric', uk, 'base
        units = userUnitsInput.value;

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
            return dataJson;
        }

        fetchWeatherData()
            .then((dataJson) => renderData(dataJson))    
            .catch((error) => console.error(error));
    });

    const renderData = (dataJson)=>{
        
        const dataContainer = document.querySelector("#data-container");
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

        const dataProp = ['datetime'
            , 'conditions'
            , 'temp'
            , 'feelslike'
            , 'sunrise'
            , 'sunset'
        ]

        dataContainer.appendChild(table);
        table.appendChild(row);
        for (const heading of headings){
            const th = document.createElement("th");
            th.innerText = heading;
            row.appendChild(th);
        }

        for (const day of dataJson.days){
            const newRow = row.cloneNode(false);
            for (const prop of dataProp){
                const newCell = cell.cloneNode(false);
                newCell.innerText = day[prop];
                newRow.appendChild(newCell);
            }
            table.appendChild(newRow);
        }

    };
})();