import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200">
              Quiz Haven
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors duration-200 hover-lift">
              Home
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button variant="outline" className="hover-lift transition-all duration-200">Dashboard</Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline" className="hover-lift transition-all duration-200">Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button className="hover-lift transition-all duration-200">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 transform transition-transform duration-200 rotate-0 hover:rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transform transition-transform duration-200 hover:scale-110" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={cn(
          "md:hidden py-4 space-y-3 transition-all duration-300 ease-in-out",
          isMenuOpen 
            ? "opacity-100 transform translate-y-0" 
            : "opacity-0 transform -translate-y-4 pointer-events-none"
        )}>
          <Link 
            to="/" 
            className="block text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors duration-200 hover-lift"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          
          {user ? (
            <Link 
              to="/dashboard"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="outline" className="w-full hover-lift transition-all duration-200">Dashboard</Button>
            </Link>
          ) : (
            <div className="space-y-2">
              <Link 
                to="/login"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="outline" className="w-full hover-lift transition-all duration-200">Sign In</Button>
              </Link>
              <Link 
                to="/register"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full hover-lift transition-all duration-200">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
