"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import Link from "next/link";
import { Rocket, Code, Cpu, Palette, Smartphone, ShoppingCart, Server, BarChart2, ChevronRight, Check } from 'lucide-react';

const Landing = () => {
  const services = [
    { icon: <Code className="w-8 h-8" />, title: "Web Development", description: "Custom websites with modern frameworks" },
    { icon: <Smartphone className="w-8 h-8" />, title: "Mobile Apps", description: "iOS & Android applications" },
    { icon: <Palette className="w-8 h-8" />, title: "UI/UX Design", description: "Intuitive user experiences" },
    { icon: <ShoppingCart className="w-8 h-8" />, title: "E-commerce", description: "Online stores that convert" },
    { icon: <Server className="w-8 h-8" />, title: "Custom Software", description: "Tailored business solutions" },
    { icon: <BarChart2 className="w-8 h-8" />, title: "Digital Marketing", description: "Growth-focused strategies" }
  ];

  const technologies = [
    { name: "HTML5", icon: "/assets/tech/html.png" },
    { name: "CSS", icon: "/assets/tech/css.png" },
    { name: "JavaScript", icon: "/assets/tech/js.png" },
    { name: "React", icon: "/assets/tech/react.png" },
    { name: "Node.js", icon: "/assets/tech/nodejs.png" },
    { name: "Express", icon: "/assets/tech/express.png" },
    { name: "Java", icon: "/assets/tech/java.png" },
    { name: "Python", icon: "/assets/tech/python.png" },
    { name: "MongoDB", icon: "/assets/tech/mongodb.png" },
    { name: "MySQL", icon: "/assets/tech/mysql.png" },
    { name: "Git", icon: "/assets/tech/git.png" },
    { name: "Tailwind", icon: "/assets/tech/tailwind.png" }
  ];

  return (
    <div className="bg-pink-50">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center px-4 md:px-8">
          <div className="container mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-[#5C213C]">
                  Software Development & <br className="hidden md:block" />
                  <span className="text-[#c5487e]">AI Powered Solutions</span>
                </h1>
                <p className="text-gray-600 text-lg">
                  At Mandala DevHub, we specialize in delivering high-performance,
                  secure, and scalable software solutions that empower businesses
                  to thrive in the digital era.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services">
                    <button className="bg-[#5C213C] hover:bg-[#7a2b52] text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all">
                      Explore Services <ChevronRight className="w-5 h-5" />
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="border-2 border-[#5C213C] text-[#5C213C] hover:bg-[#5C213C] hover:text-white px-8 py-3 rounded-full transition-all">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/assets/hero-illustration.png"
                  alt="Illustration"
                  width={600}
                  height={500}
                  className="w-full max-w-md"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#5C213C] font-semibold">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-4">
              Innovate. Design. Deliver.
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Empowering businesses with cutting-edge digital solutions tailored to meet unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-pink-50 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-2 border border-pink-100"
              >
                <div className="bg-[#5C213C] w-14 h-14 rounded-full flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#5C213C] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video w-full max-w-6xl mx-auto">
            <Image
              src="/assets/servicesechome.jpg"
              alt="Services showcase"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-pink-50 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video w-full">
                <Image
                  src="/assets/about.webp"
                  alt="About Mandala DevHub"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-[#5C213C] font-semibold">ABOUT US</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-6">
                Approach and Philosophy
              </h2>
              <p className="text-gray-600 mb-6">
                At <span className="font-bold text-[#5C213C]">Mandala DevHub</span> we are passionate about turning ideas into reality through innovative technology solutions.
              </p>
              
              <div className="space-y-6 mb-8">
                <h3 className="text-2xl font-bold text-[#5C213C]">Why choose us?</h3>
                <ul className="space-y-4">
                  {[
                    "Client-Centric Approach: Your vision is at our core",
                    "Expert Team: Skilled professionals across technologies",
                    "End-to-End Solutions: From ideation to execution",
                    "Innovation & Quality: Creative solutions with uncompromised quality"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="text-[#5C213C] w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="font-bold text-lg text-[#5C213C]">
                Let's shape the future together.
              </p>
              <p className="font-semibold text-[#5C213C]">
                Mandala DevHub Services – Transforming ideas into impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-white px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#5C213C] font-semibold">OUR TECH STACK</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-4">
              Technologies We Work With
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              We leverage cutting-edge technologies to build robust and scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-pink-50 rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition-all hover:-translate-y-2 border border-pink-100"
              >
                <div className="w-16 h-16 relative mb-4">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-medium text-[#5C213C]">{tech.name}</h3>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#5C213C] mb-4">What We Do Best?</h3>
            <p className="text-gray-600">
              As a dedicated and skilled team, we excel in creating dynamic and responsive applications. 
              Our expertise spans across various technologies and methodologies, enabling us to deliver 
              high-quality solutions tailored to meet the unique needs of each project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#5C213C]">
        <ContactUs />
      </section>
    </div>
  );
};

export default Landing;