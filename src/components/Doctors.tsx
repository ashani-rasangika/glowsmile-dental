
import React from 'react';

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    role: "General Dentist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    bio: "Dr. Johnson has over 15 years of experience in general dentistry, with a special focus on preventive care.",
  },
  {
    name: "Dr. Michael Chen",
    role: "Orthodontist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    bio: "Dr. Chen specializes in orthodontic treatments, helping patients achieve perfectly aligned smiles.",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Pediatric Dentist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    bio: "Dr. Rodriguez loves working with children, making dental visits fun and stress-free for young patients.",
  }
];

const Doctors = () => {
  return (
    <section id="doctors" className="bg-white">
      <div className="dental-section">
        <h2 className="section-title text-center">Meet Our Doctors</h2>
        <p className="section-subtitle text-center">
          Our team of experienced dental professionals is dedicated to providing the highest quality care
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dental-800 mb-1">{doctor.name}</h3>
                <p className="text-dental-600 font-medium mb-3">{doctor.role}</p>
                <p className="text-gray-600">{doctor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
