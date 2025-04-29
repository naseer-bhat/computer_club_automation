"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
export default function Sidebar({ name, email }) {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    // Redirect to login page
    router.push("/login");
  };
  return (
    <div className="bg-white rounded-lg shadow-md flex-1 flex flex-col">
      <div className="flex items-center justify-start gap-4 p-6 shadow-md">
        <h1 className="text-xl font-bold">Computer Club</h1>
      </div>

      <div className="p-6 flex-1 flex flex-col gap-4">
        <div className="flex-1">
          <ul className="flex flex-col gap-10 py-4">
            <li>
              {" "}
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              {" "}
              <Link href={"/addEvent"}>Add Event</Link>
            </li>
            <li>Manage Events</li>
            <li>View Participants</li>
            <li>Generate Report</li>
            <li>Manage Gallery</li>
          </ul>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="bg-[#de1111] duration-300 w-full active:scale-90 rounded text-lg text-gray-50 px-6 py-1.5 font-semibold tracking-wider"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
