import contactImage from "../assets/contact.png";
import ContactCard from "./ContactCard";

const Contact = ({ setContact }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-gray-800 tracking-wider uppercase wow fadeInUp">
        Contact
      </h1>
      <h1 className="text-center text-4xl font-bold text-green-900 wow fadeInUp">
        Contact Us
      </h1>
      <div className="px-10 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 pb-16">
          <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ContactCard icon="fas fa-map-marker-alt" title="Address">
                <p className="text-gray-700 text-sm font-light">Ranchi</p>
                <p className="text-gray-700 uppercase text-sm font-light">
                  Jharkhand, JH 810001, India
                </p>
              </ContactCard>
              <ContactCard icon="far fa-phone" title="Whatsapp Us">
                <p className="font-light text-sm mt-2 text-green-700">
                  +91 700 4749 343
                </p>
                <p className="font-light text-sm text-green-700">
                  +91 700 4749 343
                </p>
              </ContactCard>
              <ContactCard icon="fas fa-envelope-open-text" title="Email Us">
                <p className="text-black font-light">info@geoarcindia.in</p>
              </ContactCard>
              <ContactCard icon="fas fa-clock" title="Open Hours">
                <p className="text-black font-light">Monday - Saturday</p>
                <p className="text-black uppercase font-light">
                  09:00AM - 09:00PM
                </p>
              </ContactCard>
            </div>
          </div>
          <div className="flex col-span-2 md:col-span-1">
            <img className="mx-auto wow zoomIn" src={contactImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
