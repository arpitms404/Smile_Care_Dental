
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Lead Dentist</h2>
            <h3 className="text-2xl font-semibold text-dental-blue mb-4">Dr. Raj Kumar Yadav</h3>
            <p className="text-gray-600 mb-6">
              Dr. Raj Kumar Yadav is a highly skilled dental surgeon with 15+ years of clinical experience. 
              He specializes in cosmetic dentistry, painless procedures, and advanced implantology. 
              Known for his patient-friendly approach and commitment to quality care.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h4 className="text-3xl font-bold text-dental-blue">15+</h4>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h4 className="text-3xl font-bold text-dental-blue">5000+</h4>
                <p className="text-sm text-gray-500">Happy Patients</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h4 className="text-3xl font-bold text-dental-blue">100%</h4>
                <p className="text-sm text-gray-500">Satisfaction</p>
              </div>
            </div>
            <Button className="bg-dental-teal hover:bg-dental-teal/90">
              Read Full Profile
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-full absolute -top-6 -left-6 border-2 border-dental-teal rounded-lg"></div>
            <img 
              src="/images/admin.jpg" 
              alt="Dr. Raj Kumar Yadav" 
              className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg z-20">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-sm mt-2">"Dr. Yadav is amazing. He made my dental experience completely painless!"</p>
              <p className="text-xs font-medium text-gray-500 mt-2">- Priya S.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
