import React from "react";
import { useState } from "react";
import ContactList from "./ContactList";


const Contact = () => {
  const [hidden, setHidden] = useState(true);
  const datas = [
    {
      name: "GitHub",
      link: "https://github.com/Ronas1zz4",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/ronastiwari1224/",
    },
    {
      name: "InstaGram",
      link: "https://www.instagram.com/saw.ral/",
    },
    {
      name: "Dribble",
      link: "https://dribbble.com/Ronas1zz4",
    },
  ];

  return (
    <>
      <div className="contact__container  m-auto h-fit md:h-screen ">
        <div className="">
          <h3 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[72px] ">
            Contact
          </h3>
        </div>
        <div
          // className="mt-20 w-full"
          // onMouseEnter={() => setHidden(false)}
          // onMouseLeave={() => setHidden(true)}
        >
          {/* {hidden ? <ContactList/> : <ContactMarquee />} */}

          <ContactList/>
        </div>
      </div>
    </>
  );
};

export default Contact;
