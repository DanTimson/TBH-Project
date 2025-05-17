import React from "react";
import Button from "./Button";
import InputField from "./InputField"; // Adjust path if needed
import { ChevronRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Search = ({ mode = "search" }) => {
  // Define input configs for each state
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    console.log('Navigating to:', path);
    navigate(path);
  };

  const inputsConfig = {
    search: [
      { label: "Departure" },
      { label: "Destination" },
      { label: "Start Date" },
      { label: "End Date" },
    ],
    skip: [
      { label: "Departure" },
      { label: "Destination" },
      { label: "Start Date" },
    ],
  };

  // Define button configs for each state
  const buttonsConfig = {
    search: [{ text: "Find", color: "bg-[#6d81d8]", path: "/train1"}],
    skip: [
      { text: "Найти", color: "bg-[#6d81d8]", path: "/train1"},
      { text: "Пропустить", color: "bg-[#369672]", icon: true },
    ],
  };

  const inputs = inputsConfig[mode];
  const buttons = buttonsConfig[mode];

  return (
    <section className="w-full max-w-[1440px] rounded-[5px] border border-dashed border-[#9747ff] p-5">
      <div className="flex flex-wrap items-center gap-3 mb-5">
        {/* Render input fields */}
        <div className="flex flex-wrap items-center gap-3">
          {inputs.map((input, index) => (
            <InputField
              key={index}
              label={input.label}
              size="m"
              state="enabled"
              className="italic"
            />
          ))}
        </div>

        {/* Render buttons */}
        <div className="flex items-center gap-3">
          {buttons.map((button, index) => (
            <Button
              key={index}
              onClick={() => handleNavigation(button.path)}
              className={`h-[52px] px-6 py-2 ${button.color} text-base-0 font-body-m-regular`}
            >
              {button.text}
              {button.icon && <ChevronRight className="w-6 h-6 ml-2" />}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
