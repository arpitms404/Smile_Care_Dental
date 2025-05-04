
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const { toast } = useToast();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Smile<span className="text-dental-teal">Care</span>
            </h3>
            <p className="text-gray-300 mb-6">
              At Smile Care Dental Clinic, we're dedicated to providing exceptional dental care in a comfortable environment using the latest technology.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <RouterLink to="/" onClick={handleScrollToTop} className="text-gray-300 hover:text-dental-teal transition-colors focus:outline-none focus:text-dental-teal">Home</RouterLink>
              </li>
              <li>
                <RouterLink to="/services" onClick={handleScrollToTop} className="text-gray-300 hover:text-dental-teal transition-colors focus:outline-none focus:text-dental-teal">Services</RouterLink>
              </li>
              <li>
                <RouterLink to="/about" onClick={handleScrollToTop} className="text-gray-300 hover:text-dental-teal transition-colors focus:outline-none focus:text-dental-teal">About Us</RouterLink>
              </li>
              <li>
                <RouterLink to="/contact" onClick={handleScrollToTop} className="text-gray-300 hover:text-dental-teal transition-colors focus:outline-none focus:text-dental-teal">Contact</RouterLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-dental-teal shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-300">Civil Lines Rd, Chedibeer, Bhadohi, Uttar Prades 221401</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-dental-teal shrink-0" aria-hidden="true" />
                <span className="text-gray-300">+91 979-256-3097</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-dental-teal shrink-0" aria-hidden="true" />
                <span className="text-gray-300">info@smilecaredental.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Smile Care Dental Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <RouterLink to="/privacy" className="text-gray-400 hover:text-dental-teal text-sm focus:outline-none focus:text-dental-teal">
                Privacy Policy
              </RouterLink>
              <RouterLink to="/terms" className="text-gray-400 hover:text-dental-teal text-sm focus:outline-none focus:text-dental-teal">
                Terms of Service
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
