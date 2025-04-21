"use client";

import { JSX, useState } from "react";
import { BarChart2, BrainCircuit, Code, Palette, Server, ShoppingCart, Smartphone, Sparkles, X } from "lucide-react";
import ContactUs from "./ContactUs";
import HeroSec from "../_templates/HeroSec";
import ProcessSteps from "./ProcessSteps";
import ScheduleMeetCTA from "./ScheduleMeetCTA";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  details?: string; // Additional details for the popup
}

interface ServicePopupProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServicePopup: React.FC<ServicePopupProps> = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  // Extended details for each service
  const serviceDetails = {
    "AI-Powered Web Development": {
      details: "Our AI-powered web development services create dynamic, responsive websites that leverage machine learning for enhanced user experiences. Features include intelligent chatbots for customer support, personalized content delivery based on user behavior, and predictive analytics to optimize performance. We use cutting-edge frameworks and AI models to ensure scalability and future-readiness."
    },
    "Smart Mobile Apps": {
      details: "We build intelligent mobile applications for iOS and Android that integrate machine learning capabilities. From predictive text inputs to personalized user journeys and real-time data processing, our apps are designed to adapt to user needs. We prioritize seamless performance, intuitive interfaces, and robust security."
    },
    "AI-Driven UI/UX Design": {
      details: "Our AI-driven UI/UX design process creates adaptive interfaces that evolve based on user interactions. By analyzing user behavior, we craft designs that optimize engagement and usability. Our designs are visually stunning, accessible, and built to enhance user satisfaction across devices."
    },
    "Intelligent E-commerce": {
      details: "Transform your online store with AI-powered features like personalized product recommendations, automated customer service chatbots, and dynamic pricing models. Our e-commerce solutions improve conversion rates, streamline operations, and provide actionable insights through advanced analytics."
    },
    "AI Business Solutions": {
      details: "We develop custom software solutions that integrate AI to automate business processes and uncover actionable insights. From workflow automation to predictive maintenance and data-driven decision-making, our solutions help businesses increase efficiency and stay competitive."
    },
    "Support & Maintanance": {
      details: "Our proactive support and maintenance services ensure your software remains secure, up-to-date, and optimized. We use AI-driven monitoring tools to detect issues before they arise, provide regular updates, and implement enhancements to keep your systems future-ready."
    }
  };

  const currentDetails = serviceDetails[service.title as keyof typeof serviceDetails]?.details || service.description;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-lg w-full mx-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-[#5C213C]"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Service Icon */}
        <div className="bg-[#5C213C] w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 mx-auto">
          {service.icon}
        </div>

        {/* Service Title */}
        <h3 className="text-2xl font-bold text-[#5C213C] mb-4 text-center">
          {service.title}
        </h3>

        {/* Service Description */}
        <p className="text-gray-600 mb-6">{service.description}</p>

        {/* Extended Details */}
        <div className="text-gray-600 leading-relaxed">
          {currentDetails}
        </div>
      </div>
    </div>
  );
};

// Update the page.tsx to include the popup functionality
const UpdatedPage = () => {
  
  const aiEnhancedServices = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI-Powered Web Development",
      description: "Custom websites with intelligent features like chatbots, personalization, and predictive analytics"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Smart Mobile Apps",
      description: "iOS & Android applications with machine learning capabilities"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "AI-Driven UI/UX Design",
      description: "Interfaces that adapt to user behavior using AI algorithms"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Intelligent E-commerce",
      description: "Online stores with recommendation engines and automated customer service"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "AI Business Solutions",
      description: "Custom software with process automation and data analysis"
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Support & Maintanance",
      description: "Proactive monitoring and updates keep your software smooth and future-ready."
    }
  ];

  

  return (
    <div className="bg-pink-50">
      {/* Hero Section */}
      <section>
        <HeroSec
          image="/assets/service.jpg"
          head="AI-Enhanced Services"
          subhead="Transform your business with intelligent software solutions"
          icon={<BrainCircuit className="w-10 h-10 text-white" />}
          iconLabel="AI-POWERED DEVELOPMENT"
        />
      </section>

      <section>
        <ScheduleMeetCTA />
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[#5C213C]" />
              <span className="text-[#5C213C] font-semibold">OUR INTELLIGENT PROCESS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mb-4">
              How We Build Smarter Solutions
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our AI-integrated development workflow ensures efficient, future-ready solutions
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-[#5C213C] font-semibold">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-4">
              AI-Enhanced Solutions
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              We don't just build software - we create intelligent systems that grow with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiEnhancedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-2 border border-pink-100 cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                <div className="bg-[#5C213C] w-14 h-14 rounded-full flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#5C213C] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <ContactUs />
      </section>

      
    </div>
  );
};

export default UpdatedPage;