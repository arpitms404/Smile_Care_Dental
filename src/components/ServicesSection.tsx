
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Define service data with proper names and descriptions
const services = [
  {
    id: 1,
    title: "General Dentistry",
    description: "Comprehensive dental checkups, cleanings, and preventive care to maintain your oral health and prevent issues before they start.",
    icon: "/general-dentistry.svg" // Using SVG for better resolution
  },
  {
    id: 2,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our cosmetic procedures including teeth whitening, veneers, and smile makeovers.",
    icon: "/cosmetic-dentistry.svg"
  },
  {
    id: 3,
    title: "Dental Implants",
    description: "Replace missing teeth with state-of-the-art dental implants that look, feel and function just like your natural teeth.",
    icon: "/dental-implants.svg"
  },
  {
    id: 4,
    title: "Orthodontics",
    description: "Straighten your teeth and correct bite issues with modern orthodontic treatments including clear aligners and braces.",
    icon: "/orthodontics.svg"
  },
  {
    id: 5,
    title: "Pediatric Dentistry",
    description: "Child-friendly dental care in a comfortable environment, ensuring your little ones develop healthy oral habits for life.",
    icon: "/pediatric-dentistry.svg"
  },
  {
    id: 6,
    title: "Emergency Care",
    description: "Prompt dental care for emergencies like toothaches, broken teeth, or dental injuries when you need it most.",
    icon: "/emergency-care.svg"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Generic dental icons as SVGs
const iconMap = {
  "General Dentistry": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-dental-blue">
      <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"/>
      <path d="M10 10h4v4h-4z"/>
    </svg>
  ),
  "Cosmetic Dentistry": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-dental-blue">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
      <line x1="9" y1="9" x2="9.01" y2="9"/>
      <line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  ),
  "Dental Implants": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-dental-blue">
      <path d="M8 2l4 10 1-10 3 6 3-6"/>
      <path d="M12 12v10"/>
    </svg>
  ),
  "Orthodontics": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-dental-blue">
      <path d="M5 5h14"/>
      <path d="M5 12h14"/>
      <path d="M5 19h14"/>
      <path d="M5 5v14"/>
      <path d="M12 5v14"/>
      <path d="M19 5v14"/>
    </svg>
  ),
  "Pediatric Dentistry": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-dental-blue">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  "Emergency Care": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-dental-blue">
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  )
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Dental Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of dental services using the latest technology and techniques to ensure your optimal oral health.
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <Card className="h-full card-hover">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-dental-blue/10 rounded-lg">
                    {/* Use our iconMap instead of trying to load external images */}
                    {iconMap[service.title]}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to="/services">
                    <Button variant="link" className="text-dental-blue p-0 focus:ring-2 focus:ring-dental-blue focus:ring-offset-2">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="bg-dental-blue hover:bg-dental-blue/90 focus:ring-2 focus:ring-dental-blue focus:ring-offset-2">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
