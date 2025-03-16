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
    { icon: <Instagram className="h-6 w-6" />, label: "Instagram", href: "#" },
    { icon: <Twitter className="h-6 w-6" />, label: "Twitter", href: "#" },
    { icon: <Youtube className="h-6 w-6" />, label: "YouTube", href: "#" },
  ];

  const footerLinks = [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <a 
              href="#" 
              className="text-2xl font-bold tracking-tighter"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              QUICKSHIFT<span className="font-bold">PRO</span>
            </a>
            <p className="text-gray-500 mt-2">Premium motorcycle quickshifter technology.</p>
          </div>
          
          <div className="flex space-x-6">
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
        
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
              {footerLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <p className="text-sm text-gray-500">
              &copy; {year} QUICKSHIFT PRO. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
