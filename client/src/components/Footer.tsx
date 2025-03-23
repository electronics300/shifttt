import { Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "#" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "#" },
    { icon: <Youtube className="h-5 w-5" />, label: "YouTube", href: "#" },
  ];

  return (
    <footer className="bg-black border-t border-zinc-800">
      {/* Main Footer Area */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Side - Brand */}
          <div className="space-y-4">
            <a 
              href="#" 
              className="text-2xl font-bold tracking-tighter text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              TERRAMOG
            </a>
            <p className="text-gray-400 max-w-md">
              Experience the future of motorcycle shifting
            </p>
          </div>

          {/* Right Side - Social */}
          <div className="space-y-8 md:text-right">
            {/* Social Links */}
            <div className="flex space-x-6 md:justify-end">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Area */}
      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            </div>
            <p className="text-sm text-gray-500">
              &copy; {year} Terramog. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
