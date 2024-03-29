"use client"
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({children})=>{
    const [forecast, setForecast] = useState({});
    const [airQuality, setAirQuality] = useState({});
    const [fiveDayForecast, setFiveDayForecast] = useState({});
    const [uvIndex, seUvIndex] = useState({});

    const fetchForecast=async()=>{
        try{
            const res=await axios.get("api/pollution");
            
            setAirQuality(res.data);
        }
        catch(error){
            console.log("error fetching forecast data:",error.message)
        }
    };

    const fetchAirQuality=async()=>{
        try{
            const res=await axios.get("api/weather");
            setForecast(res.data);
        }
        catch(error){
            console.log("error fetching forecast data:",error.message)
        }
    };

    const fetchFiveDayForecast = async () => {
        try {
          const res = await axios.get(`api/fiveday`);
    
          setFiveDayForecast(res.data);
        } catch (error) {
          console.log("Error fetching five day forecast data: ", error.message);
        }
      };

      //fetch uv data
  const fetchUvIndex = async () => {
    try {
      const res = await axios.get("api/uv");
      console.log(res.data);
      seUvIndex(res.data);
    } catch (error) {
      console.error("Error fetching the forecast:", error);
    }
  };


    useEffect(()=>{
        fetchForecast();
        fetchAirQuality();
        fetchFiveDayForecast();
        fetchUvIndex();
    },[]);
    return (
      
        <GlobalContext.Provider value={{forecast,airQuality,fiveDayForecast,uvIndex}}>
            <GlobalContextUpdate.Provider >
            {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    )
}

export const useGlobalContext=()=>useContext(GlobalContext);
export const useGlobalContextupdate=()=>useContext(GlobalContextUpdate);
