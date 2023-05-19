import { ArrowDownIcon, CheckIcon } from "@public/assets/icons";
import React, { useState } from "react";

const Dropdown = ({ options, selectedOption, onSelectOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    onSelectOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={toggleDropdown}
        className="pl-2 flex items-center justify-center text-white focus:outline-none tracking-widest font-medium"
      >
        {selectedOption}
        <ArrowDownIcon className="ml-2" />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 p-8 bg-liteflix-grey shadow-lg rounded-md w-full h-36 z-50">
          <ul className="flex flex-col w-full gap-y-2 font-extralight">
            {options.map((option, index) => (
              <li key={index}>
                <button
                  className={`tracking-widest flex justify-between w-full items-center ${
                    option === selectedOption && "font-medium"
                  }`}
                  onClick={() => handleSelectOption(option)}
                >
                  {option}
                  {option === selectedOption && <CheckIcon />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
