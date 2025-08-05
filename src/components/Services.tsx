
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Calendar, Pencil, Smile, HeartPulse, AlarmClock } from 'lucide-react';

const serviceItems = [
  {
    title: "Preventive Dentistry",
    description: "Regular check-ups, cleanings, and early intervention to maintain your oral health.",
    icon: <Smile className="h-10 w-10 text-dental-600" />
  },
  {
    title: "Restorative Dentistry",
    description: "Fillings, crowns, bridges, and implants to restore functionality and appearance.",
    icon: <HeartPulse className="h-10 w-10 text-dental-600" />
  },
  {
    title: "Cosmetic Dentistry",
    description: "Whitening, veneers, and other treatments to enhance the appearance of your smile.",
    icon: <Pencil className="h-10 w-10 text-dental-600" />
  },
  {
    title: "Orthodontics",
    description: "Traditional braces and clear aligners to straighten teeth and improve bite.",
    icon: <Activity className="h-10 w-10 text-dental-600" />
  },
  {
    title: "Pediatric Dentistry",
    description: "Specialized care for children in a comfortable, child-friendly environment.",
    icon: <Smile className="h-10 w-10 text-dental-600" />
  },
  {
    title: "Emergency Dental Care",
    description: "Prompt treatment for dental emergencies to relieve pain and prevent complications.",
    icon: <AlarmClock className="h-10 w-10 text-dental-600" />
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-white">
      <div className="dental-section">
        <h2 className="section-title text-center">Our Services</h2>
        <p className="section-subtitle text-center">
          We offer a comprehensive range of dental services to meet all your oral health needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {serviceItems.map((service, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow duration-300 hover:border-dental-200">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-dental-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
