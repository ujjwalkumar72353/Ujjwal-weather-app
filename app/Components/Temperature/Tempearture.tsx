"use client";

import { useGlobalContext } from '@/app/context/globalContext';
import { drizzleIcon ,clearSky,
  cloudy,navigation,
  rain,
  snow
}  from '@/app/utilis/Icons';
import { kelvinToCelsius } from '@/app/utilis/misc';
import moment from "moment";

import React, { useEffect, useState } from 'react'



function Tempearture () {

  const {forecast}=useGlobalContext();

const { weather, main, timezone, name } = forecast;
  // Check if forecast is undefined
  if (!forecast || !weather) {
      return <div>Loading........</div>;
  }
  
  const temp = kelvinToCelsius(main?.temp);
  const minTemp = kelvinToCelsius(main?.temp_min);
  const maxTemp = kelvinToCelsius(main?.temp_max);
  
  const [localTime, setLocalTime] = useState<string>("");
  const [currentDay, setCurrentDay] = useState<string>("");


  const { main: weatherMain, description } = weather[0];

  const getIcon = () => {
    switch (weatherMain) {
      case "Drizzle":
        return drizzleIcon;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Clear":
        return clearSky;
      case "Clouds":
        return cloudy;
      default:
        return clearSky;
    }
  };

  // Live time update
  useEffect(() => {
    // upadte time every second
    const interval = setInterval(() => {
      // We create a localMoment variable using the Moment.js library. moment() creates a moment object representing the current time. .utcOffset() adjusts this time to a specific timezone. The timezone variable is divided by 60 to convert it from minutes to hours before being passed to utcOffset.
      const localMoment = moment().utcOffset(timezone / 60);
      // custom format: 24 hour format
      const formatedTime = localMoment.format("HH:mm:ss");
      // day of the week
      const day = localMoment.format("dddd");

      setLocalTime(formatedTime);
      setCurrentDay(day);
    }, 1000);

    // clear interval
    // Finally, we return a cleanup function. This function clears the interval when the component unmounts or when the timezone value changes. This is important for preventing memory leaks and unnecessary computations when the component is no longer in use.
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div
      className="pt-6 pb-5 px-4 border rounded-lg flex flex-col 
        justify-between dark:bg-dark-grey shadow-sm dark:shadow-none"
    >
      <p className='flex justify-between items-center'>
         <span className="font-medium">{currentDay}</span>
         <span className="font-medium">{localTime}</span>
      </p> 
       <p className='pt-2 font-bold flex gap-1'>
       <span>{name}</span>
       <span>{navigation}</span>
       </p>
       <p className="py-10 text-9xl font-bold self-center">{temp}°</p>

       <div>
        <div>
          <span>{getIcon()}</span>
          <p className='pt-2 capitalize text-lg font-medium'>{description}</p>
        </div>
        <p className="flex items-center gap-2">
          <span>Low: {minTemp}°</span>
          <span>High: {maxTemp}°</span>
        </p>
       </div>
    </div>
  )
}

export default Tempearture
