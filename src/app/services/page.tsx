"use client";

import React from "react";
import ContactUs from "../_components/ContactUs";
import ProcessSteps from "../_components/ProcessSteps";
import HeroSec from "../_templates/HeroSec";
import { BrainCircuit, Code, Smartphone, Palette, ShoppingCart, Server, BarChart2, Sparkles } from 'lucide-react';

const page = () => {
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
      title: "Data & Analytics",
      description: "Turn your data into actionable insights with predictive modeling"
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
              We don&apos;t just build software - we create intelligent systems that grow with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiEnhancedServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-2 border border-pink-100"
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

export default page;