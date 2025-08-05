
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Jennifer L.",
    text: "I've been a patient at Smile Bright Dental for over 5 years now, and I couldn't be happier with the care I receive. Dr. Johnson and her team are professional, thorough, and always make me feel comfortable during my visits.",
    rating: 5
  },
  {
    name: "Robert T.",
    text: "After years of being afraid of dentists, I finally found Smile Bright Dental. They took the time to explain everything and made sure I was comfortable throughout my treatment. I no longer dread dental appointments!",
    rating: 5
  },
  {
    name: "Michelle K.",
    text: "My children love coming to Smile Bright Dental! Dr. Rodriguez is amazing with kids, and the entire staff goes above and beyond to make them feel at ease. I highly recommend them for family dental care.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-dental-50">
      <div className="dental-section">
        <h2 className="section-title text-center">Patient Testimonials</h2>
        <p className="section-subtitle text-center">
          Don't just take our word for it—see what our satisfied patients have to say
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg bg-white">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-dental-800">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
