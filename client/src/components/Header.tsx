import { useState, useEffect } from "react";
import { Globe, HelpCircle } from "lucide-react";
import logoImage from "../assets/images/logo.png";

interface NavLink {
  id: string;
  name: string;
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll effect for header background and visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update background opacity
      setIsScrolled(currentScrollY > 50);
      
      // Update visibility based on scroll direction
      if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Scrolling up
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false); // Scrolling down and not at top
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for the header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks: NavLink[] = [];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent"
      } ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-3 py-4 flex justify-between items-center">
        <a
          href="#"
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img 
            src={logoImage}
            alt="Company Logo" 
            className="h-8 w-auto"
          />
        </a>

        <nav className="flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-medium text-white hover:text-white/80 transition-colors px-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <a href="#" className="text-white">
            <HelpCircle className="h-5 w-5" />
          </a>
          <a href="#" className="text-white">
            <Globe className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}