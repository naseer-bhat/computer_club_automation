import React from "react";

export default function page() {
  return (
    <div className="w-[70%] mx-auto ">
      <h1 className="text-2xl font-bold">Add Event</h1>
      <form className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          placeholder="Event Name"
          className="border p-2 rounded"
        />
        <input
          type="date"
          placeholder="Event Date"
          className="border p-2 rounded"
        />
        <input
          type="time"
          placeholder="Event Time"
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Event Description"
          className="border p-2 rounded"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 px-6 w-fit rounded">
          Add Event
        </button>
      </form>
    </div>
  );
}
