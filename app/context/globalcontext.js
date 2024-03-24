"use client"
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({children})=>{
    const [forecast, setForecast] = useState({});

    const fetchForecast=async()=>{
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
    },[]);
    return (
      
        <GlobalContext.Provider value={{forecast}}>
            <GlobalContextUpdate.Provider >
            {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    )
}

export const useGlobalContext=()=>useContext(GlobalContext);
export const useGlobalContextupdate=()=>useContext(GlobalContextUpdate);
