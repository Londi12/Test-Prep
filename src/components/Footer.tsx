
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="gradient-bg text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">© 2025 Exam Quiz Hub. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <Link
            to="/contact"
            className="text-white hover:text-gray-200 transition text-sm md:text-base"
          >
            Contact Us
          </Link>
          <Link
            to="/terms"
            className="text-white hover:text-gray-200 transition text-sm md:text-base"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
