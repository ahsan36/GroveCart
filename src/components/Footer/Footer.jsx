import React from 'react'
import footerLogo from "../../assets/logo.png";
import {FooterLinks, ImportantLinks} from "./FooterLinks"
import {
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaTwitter,
} from "react-icons/fa";

// Style for Footer bg
const FooterBg = {
    backgroundColor: "#16293a",
    height: "100%",
    width: "100%",
};
  
const Footer = () => {
  return (
    <div style={FooterBg} className='text-white'>
      <div className='container'>
        <div 
            data-aos="zoom-in"
            className='grid md:grid-cols-3 pb-20 pt-5'
        >

            {/* Logo and details */}
            <div className='py-8 px-4'>
                <h1 
                    className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'
                >
                    <img src={footerLogo} alt="" className='max-w-[50px]'/>
                    GroveCart
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
                    beatae ea recusandae blanditiis veritatis.
                </p>
            </div>

            {/* Footer All Links */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>

                {/* Important Links */}
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                            Important Links
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            {ImportantLinks.map((link) => (
                                <li 
                                    className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'
                                    key={link.title}>
                                    <span>{link.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <div className='py-8 px-4'>
                        <h1 
                            className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'
                        >
                            Links
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            {FooterLinks.map((link) => (
                                <li
                                className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'
                                key={link.title}
                                >
                                <span>{link.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* social links */}
                <div>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="https://www.instagram.com/iahsan01/" target='blank'>
                        <FaInstagram className='text-3xl hover:text-primary hover:translate-x-1 duration-300'/>
                        </a>
                        <a href="https://twitter.com/md_ahsan01" target='blank'>
                        <FaTwitter className='text-3xl hover:text-primary hover:translate-x-1 duration-300'/>
                        </a>
                        <a href="https://www.linkedin.com/in/mdahsanansari/" target='blank'>
                        <FaLinkedin className='text-3xl hover:text-primary hover:translate-x-1 duration-300'/>
                        </a>
                    </div>

                    {/* Contact Details */}
                    <div className='mt-6'>
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow />
                            <p>Bihar, India</p>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                            <FaMobileAlt />
                            <p>+91 999-8888-777</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
