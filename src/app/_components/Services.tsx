import React from "react";
import { Code, Smartphone, Palette, Shield, RefreshCw, ArrowRight } from 'lucide-react';
import Link from 'next/link'
const services_data = [
  {
    icon: <Code className="w-8 h-8" />,
    service_head: "Web App Development",
    service_desc: "We create modern web applications tailored to meet your unique business requirements. Our team specializes in building responsive, secure, and high-performing web apps.",
    img_url: "/assets/servicepage/webapp.jpg",
    button_context: "Explore Web Development",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    service_head: "Mobile App Development",
    service_desc: "We specialize in creating innovative mobile applications for iOS, Android, or cross-platform solutions with optimized performance and user experience.",
    img_url: "/assets/servicepage/mobileapp.jpg",
    button_context: "Discover Mobile Solutions",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    service_head: "UI/UX Design",
    service_desc: "Our research-driven designs blend aesthetics with functionality, ensuring your product resonates with users through exceptional interfaces and seamless journeys.",
    img_url: "/assets/servicepage/uiux.jpg",
    button_context: "View Design Portfolio",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    service_head: "QA & Testing",
    service_desc: "Comprehensive testing services using latest tools to ensure your software exceeds quality expectations and performs flawlessly in all conditions.",
    img_url: "/assets/servicepage/qatesting.jpg",
    button_context: "Learn About QA",
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    service_head: "Maintenance and Support",
    service_desc: "Proactive monitoring and regular updates to keep your software running smoothly while adapting to evolving business needs and technologies.",
    img_url: "/assets/servicepage/maintanancesupport.jpg",
    button_context: "Support Plans",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#5C213C] mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver tailored solutions that drive business growth and digital transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services_data.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              {/* Image with overlay */}
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={service.img_url}
                  alt={service.service_head}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5C213C]/90 to-transparent flex items-end p-6">
                  <div className="bg-[#5C213C] w-14 h-14 rounded-full flex items-center justify-center text-white absolute top-4 left-4 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-white text-xl font-bold">
                    {service.service_head}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.service_desc}
                </p>
                <div className="mt-auto">
                  <button className="w-full flex items-center justify-between text-[#5C213C] font-semibold group">
                    <span>{service.button_context}</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#5C213C] mb-4">
            Ready to transform your digital presence?
          </h3>
          <Link href='/getstarted'>
          <button className="bg-[#5C213C] hover:bg-[#7a2b52] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center gap-2">
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;