import React, { useEffect, useState } from "react";

export default function OngoingEvent() {
  const [ongoingEventCount, setOngoingEventCount] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOngoingEvents = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/event/allevents");
        if (response.ok) {
          const data = await response.json();

          // Filter events with a future date
          const currentDate = new Date();
          const ongoingEvents = data.filter((event) => {
            const eventDate = new Date(event.startDate); // Assuming `event.startDate` is a valid date format
            
            // Compare only the date part (ignoring the time part)
            const eventDateOnly = eventDate.setHours(0, 0, 0, 0); 
            const currentDateOnly = currentDate.setHours(0, 0, 0, 0);
            
            return eventDateOnly === currentDateOnly; // Compare only the date (ignoring time)
          });

          setOngoingEventCount(ongoingEvents.length); // Set the count of ongoing events
        } else {
          setError("Failed to fetch events.");
        }
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("An error occurred while fetching events.");
      }
    };

    fetchOngoingEvents();
  }, []);

  return (
    <div>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p>{ongoingEventCount}</p>
      )}
    </div>
  );
}
