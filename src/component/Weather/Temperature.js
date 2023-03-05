import React, { useState, useEffect } from 'react'
import "./style.css"

// https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=d39836f6f00036004deada394e804bd5





const Temperature = () => {

const [searchText , setSearchText] = useState("kolkata");
const [WeatherDetails , setWeatherDetails] = useState({});



const getWeatherDetails = async ()=>{
try {
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=d39836f6f00036004deada394e804bd5`
    let result = await fetch(url);
    let data = await result.json();

    const {name : city} = data;
    const {sunrise,sunset,country} = data.sys;
    const {speed} = data.wind;
    const {humidity, pressure,temp} = data.main;

    //renaming main as weathermood
    const {main : weathermood} = data.weather[0]
    // console.log(weathermood);

    const newWeatherInfo={
        city,
        sunrise,
        sunset,
        country,
        speed,
        humidity,
        pressure,
        temp,
        weathermood,
    };

setWeatherDetails(newWeatherInfo);

    console.log(data);
} catch (error) {
    console.log(error);
    
}
};


//using useEffect to automatically fetch the details 1st time when you visit the page
useEffect(() => {
getWeatherDetails();
}, )




    return (
    <>
    <div className='wrap'>
        <div className='search'>
            <input type="search"
            autoFocus
            className='searchTerm'
            id="search"
            placeholder='city name.. '
            onChange={(event)=>{setSearchText(event.target.value)}}
            value={searchText}

            />
            <button className='searchButton' 
            type='button'
            onClick={getWeatherDetails}
            >Search</button>
        </div>
    </div>

        {/* our weather card */}
        <article className='widget'>
            
            <div className='weatherIcon'>
                <i className='wi wi-day-sunny' 
                ></i>
            </div>


            <div className='weatherInfo'>
                <div className='temperature'>
                    <span>{WeatherDetails.temp}&deg;</span>
                </div>

                <div className='description'>
                    <div className='weatherCondition'>{WeatherDetails.weathermood}</div>
                    <div className='place'>{WeatherDetails.city} , {WeatherDetails.country}</div>
                </div>
            
            </div>

            <div className='date'>{new Date().toLocaleString()}</div>

            {/* our 4 column section containing extra info */}
            <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p >
                            <i className='wi wi-sunset'></i>
                        </p>

                        <p className='extra-info-left-side'>
                            {(WeatherDetails.sunset)}
                            <br />
                            sunset
                        </p>
                    </div>

                    <div className='two-sided-section'>
                        <p >
                            <i className='wi wi-humidity'></i>
                        </p>

                        <p className='extra-info-left-side'>
                            {WeatherDetails.humidity}
                            <br />
                            humidity
                        </p>
                    </div>

                    
                </div>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p >
                            <i className='wi wi-rain'></i>
                        </p>

                        <p className='extra-info-left-side'>
                            {WeatherDetails.pressure}
                            <br />
                            pressure
                        </p>
                    </div>

                    <div className='two-sided-section'>
                        <p >
                            <i className='wi wi-strong-wind'></i>
                        </p>

                        <p className='extra-info-left-side'>
                            {WeatherDetails.speed}
                            <br />
                            wind
                        </p>
                    </div>

                    
                </div>
                
            </div>
        </article>
    </>
    )
}

export default Temperature