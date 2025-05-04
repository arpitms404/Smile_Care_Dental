
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Your Smile, Our <span className="text-dental-teal">Passion</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
            Experience modern dentistry with a gentle touch.
            At Smile Care, we combine cutting-edge technology with compassionate care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="contact" 
              smooth={true} 
              duration={800} 
              offset={-100}
              className="inline-flex"
            >
              <Button size="lg" className="bg-dental-teal hover:bg-dental-teal/90 text-white font-medium px-8">
                Book Appointment
              </Button>
            </Link>
            <Link 
              to="services" 
              smooth={true} 
              duration={800} 
              offset={-100}
              className="inline-flex"
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/20 hover:bg-white/30 text-white border-white w-full focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Our Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center">
          <motion.div 
            className="w-2 h-2 bg-white/80 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
