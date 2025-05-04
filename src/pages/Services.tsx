import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    title: "General Dentistry",
    description: "Comprehensive dental care for your entire family with preventive and restorative treatments.",
    icon: "/images/general-dentistry.pn",
    features: [
      "Routine dental check-ups and cleanings",
      "Cavity fillings and root canal treatments",
      "Tooth extractions and oral cancer screenings",
      "Dental sealants and fluoride treatments"
    ],
    image: "/images/general-dentistry.png"
  },
  {
    id: 2,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our range of advanced cosmetic dental procedures.",
    icon: "/images/cosmetic-dentistry.png",
    features: [
      "Professional teeth whitening treatments",
      "Porcelain veneers and dental bonding",
      "Smile makeovers and design consultation",
      "Gum contouring and enamel shaping"
    ],
    image: "/images/service-cosmetic.jpg"
  },
  {
    id: 3,
    title: "Dental Implants",
    description: "Replace missing teeth with permanent, natural-looking dental implants.",
    icon: "/images/dental-implants.png",
    features: [
      "Single tooth implants and full-arch replacements",
      "Implant-supported dentures and bridges",
      "Computer-guided implant placement",
      "Bone grafting and sinus lift procedures"
    ],
    image: "/images/service-implants.jpg"
  },
  {
    id: 4,
    title: "Orthodontics",
    description: "Straighten your teeth and achieve a perfect smile with our orthodontic solutions.",
    icon: "/images/orthodontics.png",
    features: [
      "Traditional metal and ceramic braces",
      "Clear aligners and Invisalign treatments",
      "Accelerated orthodontics options",
      "Retainers and post-treatment care"
    ],
    image: "/images/service-orthodontics.jpg"
  },
  {
    id: 5,
    title: "Pediatric Dentistry",
    description: "Specialized dental care for children in a comfortable and friendly environment.",
    icon: "/images/pediatric-dentistry.png",
    features: [
      "Child-friendly dental exams and cleanings",
      "Dental sealants and fluoride treatments",
      "Space maintainers and habit-breaking appliances",
      "Education on proper oral hygiene for kids"
    ],
    image: "/images/service-pediatric.jpeg"
  },
  {
    id: 6,
    title: "Emergency Care",
    description: "Immediate dental care for emergencies with same-day appointments available.",
    icon: "/images/emergency-care.png",
    features: [
      "Treatment for severe toothaches and pain",
      "Fractured jaw from dental work",
      "Repair of broken or chipped teeth",
      "Replacement of lost fillings or crowns",
      "Treatment of dental infections and abscesses"
    ],
    image: "/images/service-emergency.jpg"
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

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-dental-dark-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Dental Services</h1>
              <p className="text-xl text-white/80">
                Comprehensive dental care using advanced technology for your best smile.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-24"
            >
              {services.map((service, index) => (
                <motion.div 
                  key={service.id}
                  variants={item}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/600x400.png?text=${service.title.replace(' ', '+')}`;
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-dental-blue/10 rounded-full">
                        <img 
                          src={service.icon} 
                          alt={service.title} 
                          className="w-6 h-6 object-contain" 
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://via.placeholder.com/24x24.png?text=${service.title.charAt(0)}`;
                          }}
                        />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-600">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-dental-teal shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="bg-dental-blue hover:bg-dental-blue/90">
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-dental-teal text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Smile?</h2>
              <p className="text-xl mb-8">
                Book an appointment today and experience our exceptional dental care.
              </p>
              <RouterLink to="/contact">
                <Button 
                  size="lg" 
                  className="bg-dental-blue hover:bg-dental-blue/90 text-white border-2 border-white px-8 py-6 text-lg"
                >
                  Schedule a Consultation
                </Button>
              </RouterLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
