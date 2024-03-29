
import AirPollution from "./Components/AirPollution/AirPollution";
import DailyForecast from "./Components/DailyForecast/DailyForecast";
import Feelslike from "./Components/Feelslike/Feelslike";
import Humidity from "./Components/Humidity/Humidity";
import Navbar from "./Components/Navbar";
import Population from "./Components/Population/Population";
import Sunset from "./Components/Sunset/Sunset";

import Tempearture from "./Components/Temperature/Tempearture";
import UvIndex from "./Components/Uvindex/Uvindex";

import Wind from "./Components/Wind/Wind";


export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar/>
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
            <Tempearture/>
          </div>

             <div className="flex flex-col w-full">
              <div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4"> 
              
                 <AirPollution/>
                 <Sunset/>
                <Wind/>
                <DailyForecast/>
               <UvIndex/>
               <Population/>
               <Feelslike/>
               <Humidity/>
              </div>
             </div>
          </div>
     
    </main>
  );
}
