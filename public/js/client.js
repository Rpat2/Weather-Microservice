


//Event listener on the submit button. 
document.getElementById("getData").addEventListener('click', async ()=> {

    try {

        //This is the zip code that the user entered on the index.hbs page. 
        let zipCode = document.getElementById("EnteredZip").value


        //Make a post request to the the microservice using fetch(). Fetch is used to make HTTP requests. 
        //headers content-type: application/json tells the server that the data in the body will be as a json string.
        //body: The body of the request will contain the zip code as a JSON string. 
        const response = await fetch('http://localhost:3001/weatherInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({zipCode}), 
        });

        //Takes the JSON string in the body of the response to a Javascript object. We need to do this so we can use the data from the response object 
        const formatedData = await response.json();
        
        //This just checks to see if the response returned ok and did not have any errors 
        if (!response.ok) {
            throw new Error("Invalid Zip code was entered")
        }

        //We can now use data from the Javascript object to manipulate the Table in the index.hbs template 
        document.getElementById('temperature').innerHTML = `${formatedData.main.temp} \u00B0F`
        document.getElementById('description').innerHTML = `${formatedData.weather[0].description}`
        document.getElementById('windSpeed').innerHTML = `${formatedData.wind.speed} mph`
        document.getElementById('Humidity').innerHTML =   `${formatedData.main.humidity} %`
        if (!formatedData.rain) {
            document.getElementById('Rain').innerHTML =  "No Rain in the past hour"
        }
        else {
            document.getElementById('Rain').innerHTML = `${formatedData.rain["1h"]}`
            
        }

        //It is using data returned by the microservice to generate the weather icon. 
        let icon = formatedData.weather[0].icon 
        let weatherIcon = document.getElementById("weatherIcon")

        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
        weatherIcon.style = "block";

        document.getElementById("displayImage").style="block"

        

    }
    //This is just to catch any errors from the promises like fetch() or json()
    catch(error) {
        console.log(error)
    
}})
