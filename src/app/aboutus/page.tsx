"use client";

import Image from "next/image";
import Navbar from "../_components/Navbar";
import ContactUs from "../_components/ContactUs";
import {
  Code,
  BrainCircuit,
  Rocket,
  ShieldCheck,
  Sparkles,
  BarChart2,
  Users,
  Globe,
} from "lucide-react";
import ScheduleMeetCTA from "../_components/ScheduleMeetCTA";
import React from "react";

const About = () => {
  const stats = [
    { value: "3x", label: "Faster Development", description: "with AI-assisted coding" },
    { value: "100%", label: "AI-Integrated", description: "in all our solutions" },
    { value: "40%", label: "Cost Reduction", description: "through intelligent automation" },
  ];

  const aiAdvantages = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Enhanced Development",
      description: "We integrate AI throughout our development process for smarter solutions"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Future-Ready Systems",
      description: "Solutions that evolve with built-in learning capabilities"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Intelligent Automation",
      description: "Reduce manual work with AI-powered process automation"
    }
  ];

  const team = [
    {
      name: "Riddhesh Padma",
      role: "Founder & CEO",
      image: "/assets/team/alex.jpg",
    },
    {
      name: "Samira Khan",
      role: "Lead Developer",
      image: "/assets/team/samira.jpg",
    },
    {
      name: "Jordan Lee",
      role: "UX Designer",
      image: "/assets/team/jordan.jpg",
    },
    {
      name: "Taylor Smith",
      role: "Marketing Head",
      image: "/assets/team/taylor.jpg",
    },
  ];

  return (
    <div className="bg-pink-50">
      {/* Hero Section */}
      <div className="min-h-[60vh] flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center px-4 md:px-8 bg-gradient-to-r from-[#5C213C] to-[#7a2b52]">
          <div className="container mx-auto text-center py-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BrainCircuit className="w-8 h-8 text-pink-200" />
              <span className="text-pink-200 font-semibold">AI-POWERED DEVELOPMENT</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Where Innovation Meets Intelligence
            </h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              We combine cutting-edge software development with AI integration to create solutions that learn and adapt.
            </p>
          </div>
        </div>
      </div>

      {/* Differentiator Section */}
      <section className="py-20 bg-white px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#5C213C] font-semibold">OUR COMPETITIVE EDGE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-4">
              Beyond Traditional Development
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              What makes our AI-powered approach fundamentally different
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {aiAdvantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-pink-50 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-2 border border-pink-100"
              >
                <div className="bg-[#5C213C] w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-[#5C213C] mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video w-full max-w-6xl mx-auto">
            <Image
              src="/assets/competativeedge.jpg"
              alt="AI Development Process"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* AI Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#5C213C] to-[#7a2b52] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-xl font-semibold mb-1">{stat.label}</p>
                <p className="text-pink-100">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video w-full">
                <Image
                  src="/assets/about-mission.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-[#5C213C] font-semibold">OUR MISSION</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-6">
                Why We Exist
              </h2>
              <p className="text-gray-600 mb-6">
                The digital landscape is evolving rapidly, but most solutions lack the intelligence to adapt.
              </p>
              <p className="text-gray-600 mb-6 font-semibold">
                We believe AI should be accessible and practical for every business.
              </p>
              <p className="text-gray-600 mb-8">
                We refuse to build static solutions when we can create systems that learn and improve.
              </p>
              <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                <p className="text-xl font-bold text-[#5C213C]">
                  "Our mission: To bridge the gap between cutting-edge AI and practical business solutions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-pink-50 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#5C213C] font-semibold">OUR PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-4">
              AI-Integrated Development Workflow
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="space-y-8">
                {[
                  {
                    title: "Intelligent Discovery",
                    description: "AI-powered analysis of your business needs and automation opportunities",
                    icon: <BrainCircuit className="w-6 h-6 text-[#5C213C]" />
                  },
                  {
                    title: "Smart Prototyping",
                    description: "AI-generated prototypes with predictive user behavior modeling",
                    icon: <Code className="w-6 h-6 text-[#5C213C]" />
                  },
                  {
                    title: "Adaptive Development",
                    description: "Continuous AI-assisted coding with real-time optimization",
                    icon: <Sparkles className="w-6 h-6 text-[#5C213C]" />
                  },
                  {
                    title: "Predictive Deployment",
                    description: "AI-driven testing and performance forecasting",
                    icon: <BarChart2 className="w-6 h-6 text-[#5C213C]" />
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#5C213C] mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square w-full">
                <Image
                  src="/assets/ai-process.jpg"
                  alt="AI Development Process"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#5C213C] font-semibold">OUR VALUES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-4">
              What Guides Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Client-Centric",
                description: "Your success is our priority",
              },
              {
                icon: <BrainCircuit className="w-8 h-8" />,
                title: "AI-First",
                description: "Intelligence built into everything",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Integrity",
                description: "Honest and transparent",
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Innovation",
                description: "Always pushing boundaries",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-pink-50 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-2 border border-pink-100 text-center"
              >
                <div className="bg-[#5C213C] w-14 h-14 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#5C213C] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section>
        
          <ScheduleMeetCTA />
        
      </section>

      {/* Promise Section */}
      <section className="py-20 bg-white px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#5C213C] font-semibold">OUR PROMISE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-6">
              Commitment to Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-pink-50 p-8 rounded-xl border border-pink-100">
              <h3 className="text-xl font-bold text-[#5C213C] mb-4">
                To Our Clients
              </h3>
              <p className="text-gray-600">
                We promise AI solutions that deliver measurable business impact, not just technical novelty.
              </p>
            </div>
            <div className="bg-pink-50 p-8 rounded-xl border border-pink-100">
              <h3 className="text-xl font-bold text-[#5C213C] mb-4">
                To Our Team
              </h3>
              <p className="text-gray-600">
                We provide continuous AI training and cutting-edge tools to stay at the forefront of innovation.
              </p>
            </div>
            <div className="bg-pink-50 p-8 rounded-xl border border-pink-100">
              <h3 className="text-xl font-bold text-[#5C213C] mb-4">
                To Our Community
              </h3>
              <p className="text-gray-600">
                We're committed to ethical AI development that benefits society while minimizing risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <section className="bg-[#5C213C]">
        <ContactUs />
      </section>
    </div>
  );
};

export default About;