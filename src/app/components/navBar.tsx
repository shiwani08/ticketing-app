"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Trains", path: "/trains" },
  { name: "Flights", path: "/flights" },
  { name: "Buses", path: "/buses" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex space-x-12"> {/* valid spacing between links */}
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`hover:text-blue-400 transition-colors ${
              pathname === item.path ? "underline text-blue-400" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
