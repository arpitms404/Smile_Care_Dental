import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <RouterLink to="/" className="flex items-center space-x-2" onClick={handleScrollToTop}>
          <img src="/images/logo.png" alt="Smile Care Dental Clinic Logo" className="h-12 w-13 object-contain" />
          <span className={`text-2xl font-bold ${scrolled ? 'text-dental-dark-blue' : 'text-white'}`}>
            Smile Care <span className="text-dental-teal">Dental Clinic</span>
          </span>
        </RouterLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <RouterLink 
            to="/" 
            className={`font-medium hover:text-dental-teal transition-colors focus:outline-none focus:underline ${scrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={handleScrollToTop}
          >
            Home
          </RouterLink>
          <RouterLink 
            to="/services" 
            className={`font-medium hover:text-dental-teal transition-colors focus:outline-none focus:underline ${scrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={handleScrollToTop}
          >
            Services
          </RouterLink>
          <RouterLink 
            to="/about" 
            className={`font-medium hover:text-dental-teal transition-colors focus:outline-none focus:underline ${scrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={handleScrollToTop}
          >
            About Us
          </RouterLink>
          <RouterLink 
            to="/contact" 
            className={`font-medium hover:text-dental-teal transition-colors focus:outline-none focus:underline ${scrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={handleScrollToTop}
          >
            Contact
          </RouterLink>

          {isHomePage ? (
            <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              offset={-100}
              className="cursor-pointer"
            >
              <Button className="bg-dental-teal hover:bg-dental-teal/90 focus:ring-2 focus:ring-dental-teal focus:ring-offset-2">Book Appointment</Button>
            </ScrollLink>
          ) : (
            <RouterLink to="/#contact">
              <Button className="bg-dental-teal hover:bg-dental-teal/90 focus:ring-2 focus:ring-dental-teal focus:ring-offset-2">Book Appointment</Button>
            </RouterLink>
          )}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-dental-teal focus:ring-offset-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className={scrolled ? 'text-gray-800' : 'text-white'} /> : <Menu className={scrolled ? 'text-gray-800' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-3">
            <RouterLink 
              to="/" 
              className="font-medium text-gray-800 hover:text-dental-teal py-2 focus:outline-none focus:text-dental-teal" 
              onClick={() => {
                setIsOpen(false);
                handleScrollToTop();
              }}
            >
              Home
            </RouterLink>
            <RouterLink 
              to="/services" 
              className="font-medium text-gray-800 hover:text-dental-teal py-2 focus:outline-none focus:text-dental-teal" 
              onClick={() => {
                setIsOpen(false);
                handleScrollToTop();
              }}
            >
              Services
            </RouterLink>
            <RouterLink 
              to="/about" 
              className="font-medium text-gray-800 hover:text-dental-teal py-2 focus:outline-none focus:text-dental-teal" 
              onClick={() => {
                setIsOpen(false);
                handleScrollToTop();
              }}
            >
              About Us
            </RouterLink>
            <RouterLink 
              to="/contact" 
              className="font-medium text-gray-800 hover:text-dental-teal py-2 focus:outline-none focus:text-dental-teal" 
              onClick={() => {
                setIsOpen(false);
                handleScrollToTop();
              }}
            >
              Contact
            </RouterLink>

            {isHomePage ? (
              <ScrollLink
                to="contact"
                smooth={true}
                duration={800}
                offset={-100}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <Button className="bg-dental-teal hover:bg-dental-teal/90 w-full focus:ring-2 focus:ring-dental-teal focus:ring-offset-2">Book Appointment</Button>
              </ScrollLink>
            ) : (
              <RouterLink 
                to="/#contact" 
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <Button className="bg-dental-teal hover:bg-dental-teal/90 w-full focus:ring-2 focus:ring-dental-teal focus:ring-offset-2">Book Appointment</Button>
              </RouterLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
