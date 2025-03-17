import React from "react";

const services_data = [
  {
    service_head: "Web App Development",
    service_desc:
      "We create modern web applications tailored to meet your unique business requirements. Our team specializes in building responsive, secure, and high-performing web apps that deliver exceptional user experiences across devices and platforms.",
    img_url: "/assets/servicepage/webapp.jpg",
    button_context: "Read More",
  },
  {
    service_head: "Mobile App Development",
    service_desc:
      "We specialize in creating innovative mobile applications tailored to your business needs. Our expertise spans both native and hybrid app development, ensuring your app is optimized for iOS, Android, or cross-platform solutions.",
    img_url: "/assets/servicepage/mobileapp.jpg",
    button_context: "Read More",
  },
  {
    service_head: "UI/UX Design",
    service_desc:
      "Our UI/UX design services focus on creating visually stunning and user-friendly interfaces. By blending aesthetics with functionality, we ensure your product resonates with your target audience. Our designs are research-driven, emphasizing usability, accessibility, and a seamless user journey to maximize engagement and satisfaction.",
    img_url: "/assets/servicepage/uiux.jpg",
    button_context: "Read More",
  },
  {
    service_head: "QA & Testing",
    service_desc:
      "Ensure your software performs seamlessly under all conditions with our comprehensive QA and testing services. From functional and performance testing to security and usability assessments, our team employs the latest tools and methodologies to detect and resolve issues early. We ensure your product is launch-ready and exceeds quality expectations.",
    img_url: "/assets/servicepage/qatesting.jpg",
    button_context: "Read More",
  },
  {
    service_head: "Maintenance and Support",
    service_desc:
      "Our maintenance and support services offer peace of mind with regular updates, bug fixes, and performance optimization. We proactively monitor and enhance your software to adapt to evolving business needs and technologies, ensuring uninterrupted operation and long-term success.",
    img_url: "/assets/servicepage/maintanancesupport.jpg",
    button_context: "Read More",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services_data.map((service, index) => (
          <div
            key={index}
            className="bg-primaryColor rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col"
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.img_url}
                alt={service.service_head}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold text-center">
                  {service.service_head}
                </h2>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-white text-sm leading-relaxed flex-grow">
                {service.service_desc}
              </p>
              <div className="mt-4 flex justify-center">
                <button className="bg-white text-primaryColor px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 ease-in-out">
                  {service.button_context}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;