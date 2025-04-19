"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  // Check for token on page load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect to login if no token is found
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    // Redirect to login page
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Welcome to the Computer Club Automation System!
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Logout
      </button>
    </div>
  );
}
