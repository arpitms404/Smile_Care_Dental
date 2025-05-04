
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';

const About = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Dental Clinic</h1>
              <p className="text-xl text-white/80">
                At Smile Care Dental Clinic, we combine advanced technology with personalized care to give you the best dental experience.
              </p>
            </div>
          </div>
        </section>
        
        {/* Doctor Profile Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-full h-full absolute -top-8 -left-8 border- border-dental-teal rounded-lg"></div>
                <img 
                  src="/images/admin.jpg" 
                  alt="Dr. Raj Kumar Yadav" 
                  className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Dr. Raj Kumar Yadav</h2>
                <p className="text-xl text-dental-blue mb-6">Lead Dental Surgeon & Clinic Director</p>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Dr. Raj Kumar Yadav is a highly skilled dental surgeon with over 15 years of clinical experience. 
                    After graduating with honors from a prestigious dental school, he pursued advanced training in 
                    cosmetic dentistry, implantology, and minimally invasive dental procedures.
                  </p>
                  <p>
                    His expertise spans across various dental specialties, with a particular focus on cosmetic 
                    dentistry, painless procedures, and advanced implantology. Dr. Yadav is known for his 
                    patient-friendly approach and commitment to providing quality care.
                  </p>
                  <p>
                    Throughout his career, Dr. Yadav has continuously upgraded his skills and knowledge by 
                    attending international dental conferences and workshops. He is a member of several 
                    prestigious dental associations and has published papers in reputed dental journals.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
                    <h4 className="text-3xl font-bold text-dental-blue">15+</h4>
                    <p className="text-sm text-gray-500">Years Experience</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
                    <h4 className="text-3xl font-bold text-dental-blue">5000+</h4>
                    <p className="text-sm text-gray-500">Happy Patients</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
                    <h4 className="text-3xl font-bold text-dental-blue">25+</h4>
                    <p className="text-sm text-gray-500">Awards</p>
                  </div>
                </div>
                
                <RouterLink to="/#contact">
                  <Button className="bg-dental-teal hover:bg-dental-teal/90">
                    Book an Appointment
                  </Button>
                </RouterLink>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Clinic Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Clinic's Story</h2>
              <p className="text-lg text-gray-600">
                The journey of Smile Care Dental Clinic from a small practice to the leading dental care provider in the region.
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="md:w-1/2"
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">2008 - The Beginning</h3>
                    <p className="text-gray-600">
                      Dr. Raj Kumar Yadav started Smile Care as a small single-chair clinic with a vision to provide accessible, 
                      quality dental care to the local community. His patient-first approach quickly gained popularity.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="md:w-1/2"
                >
                  <img 
                    src="/images/clinic-history-1.jpg" 
                    alt="Smile Care clinic in 2008" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/600x400.png?text=Clinic+in+2008";
                    }}
                  />
                </motion.div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="md:w-1/2"
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">2013 - Expansion</h3>
                    <p className="text-gray-600">
                      With growing demand, Smile Care expanded to a larger facility with multiple treatment rooms and added specialized 
                      services like cosmetic dentistry and advanced implantology. The team grew to include specialists in various fields.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="md:w-1/2"
                >
                  <img 
                    src="/images/clinic-history-2.jpg" 
                    alt="Expanded Smile Care clinic in 2013" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/600x400.png?text=Clinic+in+2013";
                    }}
                  />
                </motion.div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="md:w-1/2"
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">2020 - Modern Tech Integration</h3>
                    <p className="text-gray-600">
                      Smile Care integrated cutting-edge dental technology, including 3D scanning, digital smile design, and minimally invasive 
                      treatment options. This technology-driven approach has set new standards for dental care in the region.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="md:w-1/2"
                >
                  <img 
                    src="/images/clinic-history-3.jpg" 
                    alt="Modern Smile Care clinic in 2020" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/600x400.png?text=Clinic+in+2020";
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
