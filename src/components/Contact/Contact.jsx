import React from 'react'
import ContactList from './ContactList' 

const Contact = () => {
  return (
   <>
    <div  className="contact__container  m-auto h-fit md:h-screen ">
    <div className="">
        <h3 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[72px] ">
          Contact
        </h3>
      </div>
        <div className='mt-20 w-full'>
          <ContactList/>
        </div>
    </div>
   </>
  )
}

export default Contact