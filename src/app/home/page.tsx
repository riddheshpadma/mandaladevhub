"use client";

import Image from "next/image";
import Navbar from "../_components/Navbar";
import ContactUs from "../_components/ContactUs";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <div className="relative h-screen w-full bg-[#181813]">
        <Image
          src={"/assets/backgroundhome.jpg"}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute opacity-50"
        />
        <Navbar />
        <section className="h-screen flex items-center justify-center text-center px-6 text-white relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold leading-tight">
              Building. Digital. Brilliance.
            </h1>
            <p className="mt-4 text-lg">
              Empowering businesses with innovative tech solutions. Creativity
              meets technology at
              <br />
              <span className="text-4xl font-bold mt-4">Kodify</span>.
            </p>
            <Link href="/getstarted">
              <button className="mt-6 px-6 py-3 bg-white text-black text-lg font-semibold rounded-md hover:bg-gray-200 transition">
                Let's Grow Together
              </button>
            </Link>
          </div>
        </section>

        <section
          id="services"
          className="text-black px-10 py-24 lg:py-40 bg-white"
        >
          <div className="secContainer">
            <div className="subHeadSec">
              <span>Services</span>
            </div>
            <div className="flex-1">
              <div className="lg:mb-14">
                <h1 className="heading">Innovate. Design. Deliver.</h1>
              </div>
              <div className="flex lg:flex-row flex-col items-center justify-between">
                <div className="flex-1">
                  <p>
                    Empowering businesses with cutting-edge digital solutions,
                    we specialize in web and mobile app development, intuitive
                    UI/UX design, e-commerce platforms, and custom software
                    tailored to meet unique needs. Our expertise extends to
                    digital marketing and reliable maintenance, ensuring your
                    online presence is impactful, secure, and always evolving
                    with your goals.
                  </p>
                </div>
                <div className="flex flex-1 max-w-md  items-center justify-start p-10 text-white">
                  <Link href="/services">
                    <button className="md:ml-10 py-3 px-10 bg-[#2a2a2a] hover:bg-black ease-in-out duration-1000 text-base md:text-xl">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative max-w-4xl mt-16 rounded-3xl overflow-hidden shadow-2xl shadow-gray-500 h-lvh">
                <Image
                  src="/assets/servicesechome.jpg"
                  alt="Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section Starts */}
        <section
          id="aboutus"
          className="text-black px-10 py-24 lg:py-40 bg-white"
        >
          <div className="secContainer">
            <div className="subHeadSec">
              <span>About Us</span>
            </div>
            <div className="flex-1">
              <div className="max-w-3xl mb-4">
                <h1 className="heading">Aproach and Philosophy</h1>
              </div>
              <div className="relative max-w-[75%] md:max-w-3xl py-10 h-[80vh] mb-4 ">
                <Image
                  src="/assets/about.webp" // Ensure the image is inside 'public/' folder
                  alt="About Section"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>

              <div className="flex flex-col md:flex-col md:w-3/4">
                <div className="p-5 md:p-0">
                  <p className="md:pr-20 mb-4 text-sm">
                    At <span className="font-bold">Chakra Code Services</span>{" "}
                    we are passionate about turning ideas into reality through
                    innovative technology solutions. Founded with the vision to
                    empower businesses, we specialize in delivering high-quality
                    software and application development services that cater to
                    diverse needs, whether you’re a startup seeking to make your
                    mark or an established organization aiming to enhance your
                    digital presence.
                  </p>
                  {/* <button className='py-6 px-14 border-2 rounded-full hover:bg-white hover:text-black transition-all ease-in-out duration-300 hover:scale-[1.2]'>Download CV</button> */}
                </div>
                <div className="flex flex-col md:justify-start md:items-start p-5 md:p-0 min-w-64">
                  <h3 className="text-3xl font-bold">Why choose us?</h3>
                  <ul className="space-y-6 pl-4 mt-4">
                    <li>
                      <span className="font-bold">
                        Client-Centric Approach:
                      </span>{" "}
                      Your vision is at the core of everything we do.
                    </li>
                    <li>
                      <span className="font-bold">Expert Team:</span> A
                      dedicated team with expertise across various domains and
                      technologies.
                    </li>
                    <li>
                      <span className="font-bold">End-to-End Solutions:</span>{" "}
                      From ideation to execution and beyond, we cover it all.
                    </li>
                    <li>
                      <span className="font-bold">Innovation & Quality:</span>{" "}
                      We thrive on creativity and deliver products with
                      uncompromised quality.
                    </li>
                  </ul>
                  <p className="mt-10 font-extrabold text-xl">
                    Let’s shape the future together.
                  </p>
                  <p className="font-bold mt-4">
                    Chakra Code Services – Transforming ideas into impactful
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Us section ends */}

        {/* Technologies Section starts */}
        <section
          id="technologies"
          className="text-black px-10 py-24 lg:py-40 bg-white"
        >
          <div className="secContainer">
            <div className="subHeadSec">
              <p>Technologies</p>
            </div>
            <div className="flex 1">
              <div>
                <div>
                  <h1 className="heading">Tech Stack</h1>
                  <div className="py-16">
                    <ul className="grid grid-cols-5 gap-4 gap-y-14">
                      <div className="group relative inline-block">
                        <li className="skillIcon">
                          <Image
                            src="/assets/tech/html.png"
                            width={100}
                            height={100}
                            alt="html"
                          />
                        </li>
                        <span className="skillSpan">HTML5</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className="skillIcon">
                          <Image
                            src="/assets/tech/bootstrap.png"
                            width={100}
                            height={100}
                            alt="html"
                          />{" "}
                        </li>
                        <span className="skillSpan">BOOTSTRAP</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className="skillIcon">
                          <Image
                            src="/assets/tech/tailwind.png"
                            width={100}
                            height={100}
                            alt="html"
                          />{" "}
                        </li>
                        <span className="skillSpan">TAILWIND</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className="skillIcon">
                          <Image
                            src="/assets/tech/css.png"
                            width={100}
                            height={100}
                            alt="html"
                          />{" "}
                        </li>
                        <span className="skillSpan">CSS</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className="skillIcon">
                          <Image
                            src="/assets/tech/js.png"
                            width={100}
                            height={100}
                            alt="html"
                          />{" "}
                        </li>
                        <span className="skillSpan">JAVASCRIPT</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className="skillIcon">
                          <Image
                            src="/assets/tech/react.png"
                            width={100}
                            height={100}
                            alt="html"
                          />{" "}
                        </li>
                        <span className="skillSpan">React.JS</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className="skillIcon">
                          <Image
                            src="/assets/tech/nodejs.png"
                            width={100}
                            height={100}
                            alt="html"
                          />{" "}
                        </li>
                        <span className="skillSpan">Node.JS</span>
                      </div>

                      <div className="group relative inline-block">
                        <li className="skillIcon">
                          <Image
                            src="/assets/tech/express.png"
                            width={100}
                            height={100}
                            alt="html"
                          />{" "}
                        </li>
                        <span className="skillSpan">Express.JS</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className="skillIcon">
                          <Image
                            src="/assets/tech/java.png"
                            width={100}
                            height={100}
                            alt="html"
                          />{" "}
                        </li>
                        <span className="skillSpan">JAVA</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className="skillIcon">
                          <Image
                            src="/assets/tech/python.png"
                            width={100}
                            height={100}
                            alt="html"
                          />{" "}
                        </li>
                        <span className="skillSpan">PYTHON</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className="skillIcon">
                          <Image
                            src="/assets/tech/mongodb.png"
                            width={100}
                            height={100}
                            alt="html"
                          />{" "}
                        </li>
                        <span className="skillSpan">MONGODB</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className="skillIcon">
                          <Image
                            src="/assets/tech/mysql.png"
                            width={100}
                            height={100}
                            alt="html"
                          />{" "}
                        </li>
                        <span className="skillSpan">MySQL</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className="skillIcon">
                          <Image
                            src="/assets/tech/git.png"
                            width={100}
                            height={100}
                            alt="html"
                          />{" "}
                        </li>
                        <span className="skillSpan">GIT</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className="skillIcon">
                          <Image
                            src="/assets/tech/github.png"
                            width={100}
                            height={100}
                            alt="html"
                          />{" "}
                        </li>
                        <span className="skillSpan">GITHUB</span>
                      </div>
                    </ul>
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl mb-4">What We Do Best?</h1>
                  <p className="max-w-2xl">
                    As a dedicated and skilled team, we excel in creating
                    dynamic and responsive applications. Our expertise spans
                    across various technologies and methodologies, enabling we
                    to deliver high-quality solutions tailored to meet the
                    unique needs of each project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technologies section ends */}

        {/* Contact Us section starts */}
        <section className="">
          <ContactUs />
        </section>
      </div>
    </div>
  );
};

export default page;
