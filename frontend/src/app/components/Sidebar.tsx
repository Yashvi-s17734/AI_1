"use client";
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="h-screen w-60 bg-gray-900 text-white p-5">
      <ul className="space-y-3">
        <li>
          <Link href="/pages/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/pages/tasks">Tasks</Link>
        </li>
        <li>
          <Link href="/pages/habits">Habits</Link>
        </li>
        <li>
          <Link href="/pages/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
