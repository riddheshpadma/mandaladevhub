import ContactUs from "../_components/ContactUs";
import Services from "../_components/Services";
import HeroSec from "../_templates/HeroSec";

import Image from "next/image";

const page = () => {
  return (
    <div>
      <section>
        <HeroSec
          image="/assets/service.jpg"
          head="Services"
          subhead="Empowering your digital presence with top-notch solutions."
        />
      </section>

      <section className="bg-white">
        <div className="flex flex-col items-center justify-center h-screen bg-primaryColor">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Our Working Process
            </h1>
            <p className="text-sm md:text-lg text-white text-center mt-4">
              We use use best practices and cutting-edge technology to deliver{" "}
              <br /> high-quality solutions that meet your business needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center p-20 h-screen text-[#181813]">
          <div className="flex flex-col justify-center items-center">
            <div className="relative w-full h-[200px]">
              <Image
                src="/assets/illustrations/illustration1.svg" // Ensure it's inside 'public/'
                alt="Illustration 1"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative flex items-center justify-center overflow-visible border-2 border-dashed border-black w-full mt-14">
              <div className="absolute py-4 px-6 rounded-full bg-[#cacf82]">
                1
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 mt-10 ">
              <h1 className="text-xl md:text-2xl font-bold">
                Initiation & Planning
              </h1>
              <p className="text-lg text-gray-400 text-center">
                Start strong with strategic planning for success.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="relative w-full h-[200px]">
              <Image
                src="/assets/illustrations/illustration2.svg" // Ensure it's inside 'public/'
                alt="Illustration 2"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative flex items-center justify-center overflow-visible border-2 border-dashed border-black w-full mt-14">
              <div className="absolute py-4 px-6 rounded-full bg-[#cacf82]">
                2
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 mt-10 ">
              <h1 className="text-xl md:text-2xl font-bold">
                Execution & Development
              </h1>
              <p className="text-lg text-gray-400 text-center">
                Turning plans into impactful digital solutions.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="relative w-full h-[200px]">
              <Image
                src="/assets/illustrations/illustration3.svg" // Ensure it's inside 'public/'
                alt="Illustration 3"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative flex items-center justify-center overflow-visible border-2 border-dashed border-black w-full mt-14">
              <div className="absolute py-4 px-6 rounded-full bg-[#cacf82]">
                3
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 mt-10 ">
              <h1 className="text-xl md:text-2xl font-bold">
                Testing & Maintenance
              </h1>
              <p className="text-lg text-gray-400 text-center">
                Ensuring quality with thorough testing and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="flex flex-col items-center justify-center h-screen bg-primaryColor">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Our Services
            </h1>
            <p className="text-sm md:text-lg text-white">
              We offer a wide range of services to help you
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="container flex flex-col justify-center items-center">
            <Services />
          </div>
        </div>
      </section>

      <section>
        <ContactUs />
      </section>
    </div>
  );
};

export default page;
