"use client";
import React, { useEffect, useState } from "react";
import Events from "./components/Events";
import UpcomingEvent from "./components/upcomingEvent";
import OngoingEvent from "./components/OngoingEvent";

export default function Dashboard() {



  return (
    
      <div className="bg-gray-100 flex flex-col items-center justify-center gap-6">
        
        <div className="flex-1 w-full">
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="py-8 px-6 flex justify-center flex-col text-gray-50 rounded-md bg-gradient-to-tr from-[#5729d5] to-[#119ade]">
              <h1 className="text-2xl font-bold">Held Events</h1>
              <span className="text-5xl font-bold">
                <Events />
              </span>
            </div>
            <div className="py-8 px-6 rounded-md text-gray-50 bg-gradient-to-tr from-[#5729d5] to-[#119ade]">
              <h1 className="text-2xl font-bold">Upcoming Events</h1>
              <span className="text-5xl font-bold">
                <UpcomingEvent />
              </span>
            </div>
            <div className="py-8 px-6 rounded-md text-gray-50 bg-gradient-to-tr from-[#5729d5] to-[#119ade]">
              <h1 className="text-2xl font-bold">Ongoing Events</h1>
              <span className="text-5xl font-bold">
                <OngoingEvent />
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}
