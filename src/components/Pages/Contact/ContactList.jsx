import React from "react";
import { GoArrowRight } from "react-icons/go";


const ContactList = (props) => {
  return (
<>
<div className="w-full contact_list text-black border-y border-black p-4">
      <div className="w-full flex items-center justify-between container">
        <a href="">
          <p className="uppercase">GitHub</p>
        </a>
        <button className="">
          <GoArrowRight className="-rotate-45" />
        </button>
      </div>
    </div>
</>
  );
};

export default ContactList;
