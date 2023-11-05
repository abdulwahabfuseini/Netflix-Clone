"use client"

import { BsGlobe } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { FooterLinks } from "./Data";


const Footer = () => {
  return (
    <div className="w-full h-full px-6 py-10 sm:pt-16 sm:px-10 lg:px-32 bg-main">
      <li className="underline list-none ">
        <a href="/">Questions? Contact us.</a>
      </li>
      <div className="grid grid-cols-1 py-8 leading-10 sm:grid-cols-3 w-full">
        {FooterLinks.map((items) => (
          <ul key={items.id}>
            <li className="underline list-none">{items.title}</li>
            {items.Links.map((foot, index) => (
              <li key={index} className="underline list-none">
                <a href="/">{foot.display}</a>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <button className="flex items-center justify-center gap-2 px-2 py-1 border">
        <BsGlobe />
        <h6>English</h6>
        <AiFillCaretDown />
      </button>
      <h4 className="text-sm py-7">Netflix Ghana</h4>
    </div>
  );
};

export default Footer;
