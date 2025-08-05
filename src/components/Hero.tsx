import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative bg-dental-50 overflow-hidden">
      <div className="dental-section pt-12 pb-20 md:pt-20 md:pb-28 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dental-800 mb-4">
            Your Healthy Smile
            <br />
            Is Our Priority
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
            Experience exceptional dental care with our team of experts using
            the latest technology for your comfort and satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-dental-600 hover:bg-dental-700 text-white px-6 py-6"
            >
              Book Appointment
            </Button>
            <a href="#services">
              <Button
                size="lg"
                variant="outline"
                className="border-dental-600 text-dental-600 hover:bg-dental-50 px-6 py-6"
              >
                View Services
              </Button>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 animate-fade-in">
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Dentist with patient"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-dental-100 rounded-lg p-4 shadow-md border border-dental-200 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-dental-500 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-dental-800">98% Satisfied</p>
                  <p className="text-sm text-gray-600">Happy patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      ></div>
    </section>
  );
};

export default Hero;
