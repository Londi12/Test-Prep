import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Link to="/" className="flex items-center space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M16 2L3 9L16 16L29 9L16 2Z"
                  fill="currentColor"
                  fillOpacity="0.3"
                />
                <path
                  d="M3 16L16 23L29 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 23L16 30L29 23"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="logo">Matrickonnekt</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting students to success through comprehensive test preparation.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/subjects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Subjects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-3">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@matrickonnekt.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  support@matrickonnekt.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Monday - Friday<br />
                8:00 AM - 5:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Matrickonnekt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
