import { motion } from "framer-motion";
import { Users, Mail, Phone } from "lucide-react";
import AnandImg from "../../assets/images/Anand.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Anand N Doddamani",
      role: "CEO & Founder",
      image: AnandImg, // Use the imported image
      bio: "With 10+ years in construction, who leads our vision for excellence.",
      mail: "doddamani.brothers@gmail.com",
      phone: "94807 50444",
    },
    {
      name: "Manju P",
      role: "Assistant",
      // image: AnandImg,
      bio: "With 5+ years in construction",
      mail: "abc@gmail.com",
      phone: "1234567898",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to your success
          </p>
        </motion.div>
        <div
          className={
            teamMembers.length < 3
              ? "flex justify-center gap-8"
              : "grid md:grid-cols-3 gap-8"
          }
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center">
                    <Users size={32} className="mx-auto mb-2" />
                    <p className="font-semibold">{member.role}</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Mail size={16} className="mr-1" /> {member.mail}
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-1" />
                  +91 {member.phone}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
