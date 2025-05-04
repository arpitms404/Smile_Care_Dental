
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Anjali Gupta',
    role: 'Marketing Professional',
    quote: 'Dr. Yadav completely transformed my smile with his expertise in cosmetic dentistry. His attention to detail and commitment to perfection made all the difference.',
    image: '/images/testimonial-1.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    role: 'IT Manager',
    quote: 'As someone who was always afraid of dental visits, the team at Smile Care Dental Clinic made me feel comfortable and at ease. The painless procedures are truly amazing.',
    image: '/images/testimonial-2.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'Priya Singh',
    role: 'School Teacher',
    quote: 'I brought my children here and was impressed with how patient and caring the staff was. They made the kids actually look forward to their dental checkups!',
    image: '/images/testimonial-3.jpg',
    rating: 5
  },
  {
    id: 4,
    name: 'Vikram Patel',
    role: 'Business Owner',
    quote: 'The dental implants I got at Smile Care Dental Clinic are fantastic. Dr. Yadav explained everything thoroughly and the results exceeded my expectations.',
    image: '/images/testimonial-4.jpg',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    // Auto rotate testimonials
    intervalRef.current = window.setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const resetAutoRotation = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = window.setInterval(() => {
      nextTestimonial();
    }, 8000);
  };

  const handleNextClick = () => {
    nextTestimonial();
    resetAutoRotation();
  };

  const handlePrevClick = () => {
    prevTestimonial();
    resetAutoRotation();
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-dental-dark-blue to-dental-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-dental-teal">Patients Say</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Hear from our satisfied patients about their experience with our dental services.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-dental-teal shadow-xl">
                    <img
                      src={current.image || `https://ui-avatars.com/api/?name=${current.name}&background=26A69A&color=fff`}
                      alt={current.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${current.name}&background=26A69A&color=fff`;
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex">
                    {[...Array(current.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <svg className="w-12 h-12 opacity-30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                
                <blockquote className="text-xl md:text-2xl italic mb-6">
                  "{current.quote}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-lg">{current.name}</p>
                  <p className="text-white/80">{current.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-10 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-white/30 text-white hover:bg-white/20"
              onClick={handlePrevClick}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2.5 rounded-full transition-all ${currentIndex === idx ? 'w-8 bg-dental-teal' : 'w-2.5 bg-white/30'}`}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                    resetAutoRotation();
                  }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-white/30 text-white hover:bg-white/20"
              onClick={handleNextClick}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
