import React from "react";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className="flex justify-between items-center py-4 px-12 bg-gray-100">
      <div className="">
        <Link href="/" className="text-2xl font-bold text-center text-gray-800">
          Computer Club Automation
        </Link>
      </div>
      <div className="flex gap-4">
        <Link
          href="/register"
          className="border-2 border-gray-950 px-6 py-3 uppercase"
        >
          Register
        </Link>
        <Link
          href="/login"
          className="border-2 border-gray-950 px-6 py-3 uppercase"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
