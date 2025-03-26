import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const showNav = !["/", "/data-upload"].includes(location.pathname);

  if (!showNav) return null;

  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-blue-600">
            RecomMind AI
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/data-upload" className={cn("text-sm font-medium transition-colors hover:text-blue-600", location.pathname === "/data-upload" ? "text-blue-600" : "text-gray-600")}>
              Data Upload
            </Link>
            <Link to="/customer-dashboard" className={cn("text-sm font-medium transition-colors hover:text-blue-600", location.pathname === "/customer-dashboard" ? "text-blue-600" : "text-gray-600")}>
              Customer Dashboard
            </Link>
            <Link to="/analytics-dashboard" className={cn("text-sm font-medium transition-colors hover:text-blue-600", location.pathname === "/analytics-dashboard" ? "text-blue-600" : "text-gray-600")}>
              Analytics Dashboard
            </Link>
            <Link to="/rm-dashboard" className={cn("text-sm font-medium transition-colors hover:text-blue-600", location.pathname === "/rm-dashboard" ? "text-blue-600" : "text-gray-600")}>
              RM Dashboard
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
