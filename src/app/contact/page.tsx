import ContactUs from "../_components/ContactUs";
import HeroSec from "../_templates/HeroSec";

const page = () => {
  return (
    <div>
      <section>
        <HeroSec
          image="/assets/service.jpg"
          head="Contact Us"
          subhead="Let’s build something amazing together."
        />
      </section>
      <section>
        <ContactUs />
      </section>
    </div>
  );
};

export default page;
