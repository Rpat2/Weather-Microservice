var express = require('express');
var app = express();
const PORT = 3001;
app.use(express.json()); 


//I needed cors since the browser needed permissions to call the API. 
var cors = require('cors');  
app.use(cors());


//Async makes a function wait for a promise.
//Await makes an async function wait for a promise before moving onto the next code. 
//THese are used to make asynchronous javascript more synchronous. 


// Endpoint to handle the weather API request
app.post('/weatherInfo', async (req, res) => {
    
    //convert the JSON string in the request body to a Javascript object 
    const { zipCode } = req.body; 

    try {
        // Call the OpenWeather API with the provided zip code

        //Fetch will return a response object. The body has the data that we want. We have to covert the resposne object into a readable format so .json() is used. .json() is a method of the response object that converts the body to a json format. 
        const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid={KEY}&units=imperial`);

        if (!weatherData.ok) {
            throw new Error('Failed to fetch weather data');
        }

        // Fetch will return a response object. The body of this response object has the data that we want. 
        // We have to covert the resposne object into a readable format so .json() is used. 
        // .json() converts the body of the reponse object which is a JSON string to a javascript object. 
        const currentWeather = await weatherData.json();
        

        //currentWeather is now a javascript object after we used .json. 
        //We can now send this over using res.json()

        //res.json() takes a javascript object as a a parameter and converts it to a JSON string so it can be sent over via HTTP. 
        //This gets sent in the body of the response object that will be returned from response = await fetch() on client.js
        res.json(currentWeather);


    } catch (error) {
        console.log(error);
        
    }
});

app.listen(PORT, () => {
    console.log('Weather service started on http://localhost:' + PORT);
});



