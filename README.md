# odin-weather-API-app

Used Visual Crossing's free weather API to practice asynchronous Javascript and API handling. When a location is entered, an API call is made and the data is rendered on the website. If the user selects different units, another API call is made and the data is re-rendered. Last entered location is stored on local storage (similar to cookies), so on visiting the page again the last entered location's weather forecast will be rendered.

As I was focusing on API handling and async JS, I did not invest as much time into the UI.

## Technologies Used
** Tech Used:** HTML, CSS, JavaScript, JSON, Git
* HTML forms
* CSS Flexbox
* JavaScript modules, functions, promises, async/await
* JavaScript DOM API, Fetch API

## Lessons Learnt
On asynchronous JavaScript: 
* JavaScript is an asynchronous language, allowing for async functions to run in parallel, increasing performance
* Functions with dependencies on async functions can be managed with callbacks, however, multiple nested callback functions can impede code readability and error handling (aka callbeck hell)
* Promises are Javascript objects returned by async functions which resolve to what the function returns. Prior to resolving, the promise can have states: `pending`, `fulfilled`, `rejected` depending on the API definition. Any functions with dependency on the async function can be passed as an argument to a promise's `then` method. For example: `Promise.then((Promise.result) => {Function with dependency})`
* `async`/`await` is syntactical sugar for promises to enable reading like synchronous code. By defining an `async` function, we can then place `await` in front of an asynchronous function invocation within its body, effectively pausing top-down execution until the `await` Promise has been resolved
* Use `Promise.catch` method to handle errors thrown by Promises. Ideally, this is placed at the end of the Promise chain. 
* `Promise.any()` and `Promise.all()` methods are helpful in scenarios when at least one Promise is resolved, or all Promises are resolved. These are more performant when the async functions returning these promises can be run in parallel. 

On HTTP APIs:
* Application Programming Interfaces abstract underlying code and allow for clients to send requests to servers, which serve data in response
* Common HTTP methods include: `GET`, `POST`, `DELETE`
* JavaScript's `Fetch` API can be used to send requests. The default method is `GET` unless defined in options.
* Due to security, browsers limit clients from sending requests. To overcome this, include `mode: cors` in `Fetch`'s argument options object

## Future Opportunities
* Further optimize design of the UI/UX app
* Error handling for when the API fails to send a response (when address cannot be resolved, etc.)