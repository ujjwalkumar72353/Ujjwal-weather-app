import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {

   
        const lat = 40.4165;
        const lon = -3.7026;
    
    // Construct the API URL with the latitude and longitude values
    const url ="https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&hourly=temperature_2m,uv_index,uv_index_clear_sky,is_day";
    
    const res = await fetch(url);

    const uvData = await res.json();

    return NextResponse.json(uvData);
  } catch (error) {
    console.log("Error Getting Uv Data");

    return new Response("Error getting Uv Data", { status: 500 });
  }
}

