import { Phone, Mail, MapPin } from "lucide-react"; // Added missing imports
import ContactForm from "../components/Contact/ContactForm";
import Map from "../components/Contact/Map";

const Contact = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear about your project. Contact us for a free
            consultation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <ContactForm />
          <div className="space-y-8">
            <div
              className="bg-white p-8 rounded-lg shadow-lg"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <Phone size={20} className="inline mr-3 text-primary" /> +91
                  94807 50444
                </p>
                <p>
                  <Mail size={20} className="inline mr-3 text-primary" />{" "}
                  doddamani.brother@gmail.com
                </p>
                <p>
                  <MapPin size={20} className="inline mr-3 text-primary" />
                  Shop no 45, Kumaravyasa Complex, Basaveshwara Nagar,
                  Gadag-Betigeri, Karnataka 582101
                </p>
              </div>
            </div>
            <div
              className="bg-white p-8 rounded-lg shadow-lg"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Contact;
