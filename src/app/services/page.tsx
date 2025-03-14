import ContactUs from "../_components/ContactUs";
import ProcessSteps from "../_components/ProcessSteps";
import Services from "../_components/Services";
import HeroSec from "../_templates/HeroSec";

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
            <h1 className="text-3xl md:text-5xl max-w-48 md:max-w-full text-center font-bold text-white">
              Our Working Process
            </h1>
            <p className="text-xs md:text-lg text-white text-center mt-4 max-w-64 md:max-w-md">
              We use use best practices and cutting-edge technology to deliver
              high-quality solutions that meet your business needs.
            </p>
          </div>
        </div>
        <div>
          <ProcessSteps />
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
