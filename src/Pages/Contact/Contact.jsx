import React from "react";
import ContactList from "./ContactList";
import Footer from "../../components/Footer";
import { GoArrowRight } from "react-icons/go";

const Contact = () => {
  const contactData = [
    {
      id: 1,
      name: "Github",
      url: "https://github.com/sujandk",
      icon: <GoArrowRight />,
    },
    {
      id: 2,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/sujan-dhakal10/",
      icon: <GoArrowRight />,
    },
    {
      id: 3,
      name: "Facebook",
      url: "https://www.facebook.com/sujan.dhakal.750",
      icon: <GoArrowRight />,
    },
    {
      id: 4,
      name: "Instagram",
      url: "https://www.instagram.com/sujan_iv/",
      icon: <GoArrowRight />,
    },
    {
      id:5,
      name:"Email",
      url:"mailto:saralronas@gmail.com",
      icon:<GoArrowRight/>
    }
  ];

  return (
    <section className="w-full h-screen mt-0 relative  ">
      <div>
        <h3 className=" text-2xl sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[100px] p-4 lg:px-16 md:py-8 lg:py-16 container">
          Contact
        </h3>
      </div>
      <div className="mt-4">
        <ContactList contactData={contactData} />
      </div>
      <Footer/>
    </section>
  );
};

export default Contact;
