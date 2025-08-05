
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, Smile } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 shadow-md backdrop-blur-sm py-2" 
        : "bg-white py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex items-center mr-2">
              <Smile className="h-8 w-8 text-dental-600" />
            </div>
            <span className="text-dental-800 text-2xl font-bold">
              <span className="text-dental-600">Glow </span>Smile Dental
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'About', 'Doctors', 'Testimonials', 'Contact'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-gray-700 hover:text-dental-600 relative group transition-colors"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dental-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center">
            <Button className="bg-dental-600 hover:bg-dental-700 shadow-lg shadow-dental-200/50 transition-all hover:-translate-y-0.5">
              <Phone className="mr-2 h-4 w-4" />
              Book Appointment
            </Button>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-gray-700 hover:text-dental-600 p-2 rounded-full hover:bg-dental-50 transition-colors"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
        isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 py-5 space-y-4">
          {['Home', 'Services', 'About Us', 'Our Doctors', 'Testimonials', 'Contact'].map((item, index) => (
            <a 
              key={index}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="block py-2 px-4 text-gray-700 hover:text-dental-600 hover:bg-dental-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-2">
            <Button className="w-full bg-dental-600 hover:bg-dental-700 shadow-md">
              <Phone className="mr-2 h-4 w-4" />
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
