// Import React and necessary components
"use client"
import React from "react";

import { wind } from "@/app/utilis/Icons";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image"; // Import Image component from 'next/image'
import { useGlobalContext } from "@/app/context/globalContext";

// Define the Wind component
function Wind() {
  // Fetch forecast data using useGlobalContext hook
  const { forecast } = useGlobalContext();

  // Extract wind speed and direction from forecast data
  const windSpeed = forecast?.wind?.speed;
  const windDir = forecast?.wind?.deg;

  // If wind speed or direction is not available, display a loading skeleton
  if (!windSpeed || !windDir) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  // If wind speed and direction are available, render wind component
  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-3 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <h2 className="flex items-center gap-2 font-medium">{wind} Wind</h2>

      <div className="compass relative flex items-center justify-center">
        {/* Render the compass body */}
        <div className="image relative">
          <Image
            src="/compass_body.svg" // Corrected image path
            alt="compass"
            width={110}
            height={110}
          />
          {/* Render the compass arrow */}
          <Image
            src="/compass_arrow.svg" // Corrected image path
            alt="compass"
            className="absolute top-0 left-[50%] transition-all duration-500 ease-in-out dark:invert"
            style={{
              transform: `rotate(${windDir}deg) translateX(-50%)`,
              height: "100%",
            }}
            width={11}
            height={11}
          />
        </div>
        {/* Display wind speed */}
        <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xs dark:text-white font-medium">
          {Math.round(windSpeed)} m/s
        </p>
      </div>
    </div>
  );
}

// Export the Wind component as default
export default Wind;
