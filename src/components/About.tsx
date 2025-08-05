
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="bg-dental-50">
      <div className="dental-section flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
            alt="Modern dental clinic" 
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-dental-800 mb-4">About Smile Bright Dental</h2>
          <p className="text-gray-600 mb-6 text-justify">
            Since 2005, Smile Bright Dental has been providing exceptional dental care to patients of all ages. 
            Our modern facility is equipped with state-of-the-art technology, ensuring that you receive the 
            highest quality treatment in a comfortable environment.
          </p>
          <p className="text-gray-600 mb-6 text-justify">
            Our team of experienced dentists and dental hygienists are committed to continuing education, 
            staying current with the latest advancements in dental techniques and technologies. We believe 
            in personalized care, tailoring our approach to meet your unique needs and preferences.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-dental-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Experienced Team</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-dental-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Modern Technology</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-dental-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Comfortable Environment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-dental-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Personalized Care</span>
            </div>
          </div>
          <Button className="bg-dental-600 hover:bg-dental-700">Learn More About Us</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
