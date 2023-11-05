import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const AccordionText = ({ title, desc, subdesc }) => {
  const [icon, setIcon] = useState(false);

  return (
    <div className="w-full h-full px-2 sm:px-10 md:px-6 lg:px-40">
      <div className="px-3 sm:px-5 py-3 mb-1.5 bg-dark">
        <div
          onClick={() => setIcon((prev) => !prev)}
          className="flex items-center justify-between py-3 text-xl cursor-pointer"
        >
          <h1> {title}</h1>
          <button>{icon ? <FaMinus /> : <FaPlus />}</button>
        </div>
        {icon && (
          <div className="grid gap-5 py-2 texl-xl sm:text-2xl">
            <p>{desc}</p>
            <p>{subdesc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionText;
