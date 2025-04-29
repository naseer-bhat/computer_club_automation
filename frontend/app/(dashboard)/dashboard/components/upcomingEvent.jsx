import React, { useEffect, useState } from "react";

export default function UpcomingEvent() {
  const [upcomingEventCount, setUpcomingEventCount] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/event/allevents"
        );
        if (response.ok) {
          const data = await response.json();

          // Filter events with a future date
          const currentDate = new Date();
          const upcomingEvents = data.filter((event) => {
            const eventDate = new Date(event.startDate); // Assuming `event.date` is in a valid date format
            return eventDate > currentDate;
          });

          setUpcomingEventCount(upcomingEvents.length); // Set the count of upcoming events
        } else {
          setError("Failed to fetch events.");
        }
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("An error occurred while fetching events.");
      }
    };

    fetchUpcomingEvents();
  }, []);

  return (
    <div>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p>{upcomingEventCount}</p>
      )}
    </div>
  );
}
