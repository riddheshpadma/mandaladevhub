import Link from "next/link";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { LuLinkedin } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div>
      <section id="contact" className="text-black bg-white">
        <div className="flex flex-col items-center justify-center h-1/2 bg-primaryColor text-white py-28 px-5">
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Lets work together!
          </h1>
          <p className="text-sm md:text-xl max-w-2xl text-center mb-8">
            Let’s transform your ideas into reality with innovative solutions
            that drive success, create impact, and bring your vision to life.
          </p>

          <Link href="/getstarted">
            <button className="py-4 px-10 bg-white hover:bg-tirtaryColor text-primaryColor hover:text-white ease-in-out duration-1000 text-sm md:text-xl ">
              Lets Start Project
            </button>
          </Link>
        </div>

        <div className="px-10 py-24 lg:py-40">
          <div className="secContainer">
            <div className="subHeadSec">
              <span>Connect Us</span>
            </div>
            <div className="flex-1">
              <div className="max-w-3xl mb-6">
                <h1 className="heading">Just Say Hello!</h1>
              </div>
              <div className="relative max-w-4xl mt-16 mb-6 rounded-3xl overflow-hidden shadow-2xl shadow-gray-500 aspect-[16/9] md:aspect-auto h-[50vh] md:h-[75vh] lg:h-[85vh] w-full">
                <Image
                  src="/assets/contactus.jpg"
                  alt="Services"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>

              <div className="max-w-3xl">
                <div>
                  <div>
                    <h3 className="text-4xl font-semibold mb-2">
                      Get in Touch
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
                  <div>
                    <p className="text-lg mb-4">
                      Want to know more about us, have a project in mind? Drop
                      us a line and we will get back as soon as possible.
                    </p>
                  </div>
                </div>
                <div>
                  <ContactForm />
                  <div className="flex justify-center items-center p-10 mt-5">
                    <ul className="flex justify-around w-full">
                      <li>
                        <a href="https://www.linkedin.com/company/106391569">
                        <div className="group relative inline-block">
                          <button className="focus:outline-none">
                            <LuLinkedin size={36} className="btnSocial" />
                          </button>
                          <span className="btnSpan">LinkedIn</span>
                        </div>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/mandaladevhub">
                        <div className="group relative inline-block">
                          <button className="focus:outline-none">
                            <RiTwitterXFill size={36} className="btnSocial" />
                          </button>
                          <span className="btnSpan">X</span>
                        </div>
                        </a>
                      </li>
                      {/* <li>
                        <div class="group relative inline-block">
                          <button class="focus:outline-none">
                            <LuGithub size={36} className="btnSocial" />
                          </button>
                          <span
                            className='btnSpan'
                          >Github</span>
                        </div>
                      </li> */}
                      <li>
                        <a href="https://www.instagram.com/mandaladevhub/">
                        <div className="group relative inline-block">
                          <button className="focus:outline-none">
                            <BsInstagram size={36} className="btnSocial" />
                          </button>
                          <span className="btnSpan">Instagram</span>
                        </div>
                        </a>
                      </li>
                      {/* <li>
                        <div class="group relative inline-block">
                          <button class="focus:outline-none">
                            <AiOutlineDiscord size={36} className="btnSocial" />
                          </button>
                          <span
                            className="btnSpan"
                          >Discord</span>
                        </div>
                      </li> */}
                    </ul>
                  </div>
                  <div className="mt-28">
                    <ul className="flex flex-col justify-center items-center space-y-2">
                      <li>
                        {/* <span className="font-semibold mr-2">Email:</span> */}
                        <a
                          href="mandaladevhub@gmail.com"
                          className="text-primary hover:underline"
                        >
                          mandaladevhub@gmail.com
                        </a>
                      </li>
                      <li>
                        {/* <span className="font-semibold mr-2">Phone:</span> */}
                        <a
                          href="tel:+123456789"
                          className="text-primary hover:underline"
                        >
                          +91 92264 06267
                        </a>
                      </li>
                      <li className="flex justify-center">
                        {/* <span className="font-semibold mr-2">Location:</span> */}
                        <span>Solapur-413006, Bharat</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center py-5 bg-[#5F213F]">
        <p className="text-xs text-white md:text-sm">
          &copy; 2025 riddheshpadma.dev . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
