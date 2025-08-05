
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="dental-section">
        <h2 className="section-title text-center">Contact Us</h2>
        <p className="section-subtitle text-center">
          Have questions or ready to schedule an appointment? Get in touch with us today.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold text-dental-800 mb-6">Get In Touch</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <Input id="name" placeholder="John Doe" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="border-gray-300" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                <Input id="phone" placeholder="(123) 456-7890" className="border-gray-300" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" placeholder="How can we help you?" className="border-gray-300" rows={5} />
              </div>
              <Button className="w-full bg-dental-600 hover:bg-dental-700 text-white">Send Message</Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-dental-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-dental-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dental-800 mb-1">Location</h4>
                    <p className="text-gray-600">123 Dental Street<br />Cityville, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-dental-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dental-800 mb-1">Phone Number</h4>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-dental-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dental-800 mb-1">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 h-64 rounded-lg overflow-hidden border border-gray-300">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215279163762!2d-73.986854!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0x7955420634fd7eba!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1656554322297!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
