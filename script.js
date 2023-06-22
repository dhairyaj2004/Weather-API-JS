const apiKey = "c347d8cde0bb1ba40c3b434c4e4302d0";
            const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
            const searchbox=document.querySelector(".search input");
            const searchbtn=document.querySelector(".search button");
            const weathericon=document.querySelector(".weathericon");


            async function checkweather(city) {
                const response = await fetch(apiUrl +city+'&'+`appid=${apiKey}`);
                // if(response.status=404){
                //     document.querySelector(".error").style.display="block";
                // }else{}
                var data = await response.json();
                console.log(data);
           
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main=="Clouds"){
            weathericon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weathericon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weathericon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weathericon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Snow"){
            weathericon.src="images/snow.png";
        }
        else if(data.weather[0].main=="Humidity"){
            weathericon.src="images/humidity.png";
        }
        else if(data.weather[0].main=="Mist"){
            weathericon.src="images/mist.png";
        }
        else{
            weathericon.src="images/wind.png";
        }
        // document.querySelector(".weather").style.display="block";
        // document.querySelector(".details").style.display="block";
            }
        //work of query selector Get the first element with class="":
        searchbtn.addEventListener("click",()=>{
            checkweather(searchbox.value);  
        })//when you click on search btn it will check weather of searchbox value.
        