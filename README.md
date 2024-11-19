Communication Contract

**Clear instructions for how to programmatically REQUEST data from the microservice you implemented. Include an example call. Do not advise your teammate to use your test program or require them to, your teammate must write all of their own code.**

The main program sends a POST request to the microservice endpoint using fetch(). It passes in a zip code that the user entered on the index.hbs page. 

**Clear instructions for how to programmatically RECEIVE data from the microservice you implemented. Include an example call.**

The microservice has a route that that listens to and responds to post requests at a particular endpoint.

More details on how it works: 
The microservice listens for post requests from the main program and accepts a zip code, The microservice has a route to handle this post request. Once the microservice is called, it sends an HTTP request to the open weather API to get back weather data based on the zip code that was given to it. 


**Example Call:**

From the main program:

Const response = await fetch(http://localhost:3001/weatherInfo') {
	method : POST,
	Headers.
	Body: zipCode 
}
Send a POST request to the microservice and sends the zip code that the user typed. 

It will wait until the microservice sends a response back and once it does it stores the response in the constant called response.


On the Microservice side, Weather Service.js 

Get the zip code that was sent from the POST request in the main program
const { zipCode } = req.body;


This then makes an HTTP request to the open weather API.
const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid={KEY}&units=imperial`)

 
It then takes this takes the body of the response and converts it to a javascript object. 
This JavaScript object is then sent back to the main program using res.json() which takes a JavaScript object as a parameter and converts it to a JSON string before sending it over. 

The main program can then use the data returned to fill out tables.

<img width="951" alt="Screenshot 2024-11-18 at 10 38 31 PM" src="https://github.com/user-attachments/assets/e89de2fb-44a2-4884-9a6a-2aa117810216">


