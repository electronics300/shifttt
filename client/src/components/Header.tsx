import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, Globe, HelpCircle } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navLinks = [
    //Removed items
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8 py-3 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-medium tracking-widest text-white"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          QUICKSHIFT PRO
        </a>

        <nav className="hidden md:flex space-x-6">
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
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button className="focus:outline-none" aria-label="Menu">
                <MenuIcon className="h-6 w-6 text-white" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-gray-100">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="text-lg font-medium text-black hover:text-black/70 transition-colors py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}