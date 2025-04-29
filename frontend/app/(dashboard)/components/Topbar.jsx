'use client';
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {jwtDecode} from "jwt-decode"; // Correct import for jwt-decode
export default function Topbar() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
    const [name, setName] = useState("Admin"); // Default name

  // Check for token on page load
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirect to login if no token is found
      router.push("/login");
      return;
    }

    // Decode the token and extract user info (e.g., user ID)
    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id; // Assuming _id is the user ID in the token

      // Fetch the user's name from the API using the user ID
      fetch(`http://localhost:3001/api/user/user/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.name) {
            setData(data); // Set the data from the API response
            setName(data.name); // Set the name from the API response
          } else {
            setName("Admin"); // Fallback to Admin if no name is found
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false); // Stop loading in case of an error
          setName("Admin"); // Fallback in case of an error
        });
    } catch (error) {
      console.error("Error decoding token:", error);
      // Redirect to login if the token is invalid or expired
      router.push("/login");
    }
  }, [router]);

  
  return (
    <div className="w-full flex justify-between items-center rounded shadow-md bg-white p-4">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <div className="flex gap-4 items-center">
        <h1>Hi, {loading ? "Loading..." : name}</h1>{" "}
        <div className="h-10 flex justify-center items-center text-xl font-bold uppercase text-[#fff] w-10 rounded-full bg-amber-500">
          {name.slice(0, 1)}
        </div>
        
      </div>
    </div>
  );
}
