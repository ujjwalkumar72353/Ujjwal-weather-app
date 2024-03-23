"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import React from 'react'
import { github } from "../utilis/Icons";

const Navbar = () => {
    const router = useRouter();
  return (
   <div className="w-full py-4 flex items-center justify-between">
    <div className='left'>  </div>
  
          <div className='search-container flex shrink-0 w-full gap-2 sm:w-fit'>
            <Button  className='source-code flex items-center gap-2'
                 onClick={()=>{
                    router.push("https://github.com/ujjwalkumar72353/Ujjwal-weather-app")
                 }}
          >
            {github}
            Source code
            </Button>
    </div> 
   </div>
  )
}

export default Navbar