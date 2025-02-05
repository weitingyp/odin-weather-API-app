let userLocation = prompt("enter a location").replace(/[^a-zA-Z0-9]/g, "%20");

// API units options include 'us', 'metric', uk, 'base
let units = "us";

// API key (free API)
const API_KEY = "VSGF7NCUVGWS7PTKPWJPVEKDB";

// Fetch weather data using Weather API
// Promises syntax
const weatherPromise = fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=${API_KEY}`,{
                            mode: 'cors'
                            })
                            .then( (response) => response.json())
                            .then( (data) => console.log(data))
                            .catch( (error) => {console.error(error)});