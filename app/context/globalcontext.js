"use client"
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({children})=>{
    const [forecast, setForecast] = useState({});
    const [airQuality, setAirQuality] = useState({});

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

    useEffect(()=>{
        fetchForecast();
        fetchAirQuality();
    },[]);
    return (
      
        <GlobalContext.Provider value={{forecast,airQuality}}>
            <GlobalContextUpdate.Provider >
            {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    )
}

export const useGlobalContext=()=>useContext(GlobalContext);
export const useGlobalContextupdate=()=>useContext(GlobalContextUpdate);
