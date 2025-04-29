"use client";
import React, { useEffect, useState } from "react";

export default function Events() {
  const [heldEventCount, setHeldEventCount] = useState(0);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const fetchHeldEvents = async () => {
        try {
          const response = await fetch(
            "http://localhost:3001/api/event/allevents"
          );
          if (response.ok) {
            const data = await response.json();
  
            // Filter events with a future date
            const currentDate = new Date();
            const heldEvents = data.filter((event) => {
              const eventDate = new Date(event.startDate); // Assuming `event.date` is in a valid date format
              return eventDate < currentDate;
            });
  
            setHeldEventCount(heldEvents.length); // Set the count of upcoming events
          } else {
            setError("Failed to fetch events.");
          }
        } catch (err) {
          console.error("Error fetching events:", err);
          setError("An error occurred while fetching events.");
        }
      };
  
      fetchHeldEvents();
    }, []);
  
    return (
      <div>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p>{heldEventCount}</p>
        )}
      </div>
    );
}
