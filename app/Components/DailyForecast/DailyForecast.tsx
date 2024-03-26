"use client"
import { useGlobalContext } from '@/app/context/globalContext';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

const DailyForecast = () => {
const { forecast, fiveDayForecast } = useGlobalContext();

  const { weather } = forecast;
  const { city, list } = fiveDayForecast;

  if (!fiveDayForecast || !city || !list) {
    return <Skeleton className="h-[12rem] w-full" />
  }

  if (!forecast || !weather) {
    return <Skeleton className="h-[12rem] w-full" />
  }
  return (
    <div
    className="pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-8
     dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2"
  >
    DailyForecast
      
    </div>
  )
}

export default DailyForecast
