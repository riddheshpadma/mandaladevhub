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
    img_url: "/asets/servicepage/mobileapp.jpg",
    button_context: "Read More",
  },
  {
    service_head: "UI/UX Design",
    service_desc:
      "Our UI/UX design services focus on creating visually stunning and user-friendly interfaces. By blending aesthetics with functionality, we ensure your product resonates with your target audience. Our designs are research-driven, emphasizing usability, accessibility, and a seamless user journey to maximize engagement and satisfaction.",
    img_url: "/assers/servicepage/uiux.jpg",
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
    img_url: "/assets/servicepage/maintancesupport.jpg",
    button_context: "Read More",
  },
];

const Services = () => {
  return (
    <div className="container grid grid-cols-1 gap-4 md:grid-cols-2 px-4 py-8">
      {services_data.map((service, index) => (
        <div
          key={index}
          className="flex p-4 max-w-xl bg-primaryColor rounded-lg text-white min-h-[200px] hover:scale-105 transition-all ease-in-out duration-500"
        >
          <div className="flex flex-col">
            {/* <div className='max-w-96 p-4 space-y-10'>
                            <img src={service.img_url} alt={service.service_head} className='mb-4 rounded-lg' />

                        </div> */}
            <div className="p-2">
              <h1 className="text-2xl  font-bold mb-2">
                {service.service_head}
              </h1>
              <p className="text-sm">{service.service_desc}</p>
              {/* <Link to="/services">

                                <button
                                    type="submit"
                                    class="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                                >
                                    {service.button_context}
                                    <svg
                                        class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                                        viewBox="0 0 16 19"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                            class="fill-gray-800 group-hover:fill-gray-800"
                                        ></path>
                                    </svg>
                                </button>

                            </Link> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
