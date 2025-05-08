
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for cannot be found.</p>
          
          <Link to="/">
            <Button className="btn rounded-full px-8 py-2">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
