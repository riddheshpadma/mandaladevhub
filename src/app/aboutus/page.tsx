import ContactUs from "../_components/ContactUs";
import HeroSec from "../_templates/HeroSec";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <section>
        <HeroSec
          image="/assets/service.jpg"
          head="About Us"
          subhead="Transforming ideas into impactful solutions."
        />
      </section>

      <section className="bg-[#FAFAFA]">
        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center h-[50vh] bg-primaryColor p-10 md:p-20 text-white text-center">
          <h1 className="text-2xl md:text-5xl font-bold">
            Approach and Philosophy
          </h1>
          <p className="text-sm md:text-lg mt-2 max-w-2xl">
            Emphasize your commitment to deadlines, quality, and tailored
            solutions.
          </p>
          <Link href="/getstarted">
            <button className="px-8 py-3 mt-4 bg-white hover:bg-tirtaryColor text-primaryColor hover:text-white transition-all ease-in-out duration-500">
              Let's Build Together
            </button>
          </Link>
        </div>

        {/* About Section */}
        <div className="flex flex-col md:flex-row justify-center items-center bg-[#FAFAFA] text-primaryColor">
          {/* Text Content */}
          <div className="flex-1 p-6 md:p-10">
            <p className="md:pr-20 mb-4 text-sm md:text-base">
              At <span className="font-bold">Mandala DevHub Services</span>, we
              are passionate about turning ideas into reality through innovative
              technology solutions. Founded with the vision to empower
              businesses, we specialize in delivering high-quality software and
              application development services that cater to diverse needs,
              whether you’re a startup seeking to make your mark or an
              established organization aiming to enhance your digital presence.
            </p>
            <p className="md:pr-20 mb-8">
              Our team comprises talented developers, designers, and strategists
              committed to crafting tailored solutions. From web and mobile
              applications to intuitive UI/UX designs, we prioritize
              user-centric approaches and cutting-edge technologies to ensure
              your business achieves its goals effectively.
            </p>
            <p className="md:pr-20 mb-8">
              Our mission is to help businesses succeed by leveraging
              technology, creating meaningful experiences for users, and
              fostering growth. With a focus on transparency and collaboration,
              we aim to build lasting relationships with our clients.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:flex-1 relative w-full h-[40vh] md:h-[70vh] p-6 md:p-10 overflow-hidden">
            <Image
              src="/assets/about1.jpg"
              alt="About Us"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center bg-[#FAFAFA] text-primaryColor px-4 md:px-10">
          {/* Image Section */}
          <div className="md:flex-1 relative w-full h-[40vh] md:h-[70vh] p-6 md:p-10 overflow-hidden rounded-lg">
            <Image
              src="/assets/about2.jpg"
              alt="Why Choose Us"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 p-6 md:p-10 max-w-lg">
            <h3 className="text-3xl font-bold">Why choose us?</h3>
            <ul className="space-y-6 pl-4 mt-4">
              <li>
                <span className="font-bold">Client-Centric Approach:</span> Your
                vision is at the core of everything we do.
              </li>
              <li>
                <span className="font-bold">Expert Team:</span> A dedicated team
                with expertise across various domains and technologies.
              </li>
              <li>
                <span className="font-bold">End-to-End Solutions:</span> From
                ideation to execution and beyond, we cover it all.
              </li>
              <li>
                <span className="font-bold">Innovation & Quality:</span> We
                thrive on creativity and deliver products with uncompromised
                quality.
              </li>
            </ul>
            <p className="mt-10 font-extrabold text-xl">
              Let’s shape the future together.
            </p>
            <p className="font-bold mt-4">
              Mandala DevHub Services – Transforming ideas into impactful
              solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <ContactUs />
      </section>
    </div>
  );
};

export default page;
