import React, { useState } from "react";
import Button from "./Button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose"
];

const Search = ({ mode = "search" }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    departure: '',
    destination: '',
    startDate: null,
    endDate: null
  });
  const [showDepartureCities, setShowDepartureCities] = useState(false);
  const [showDestinationCities, setShowDestinationCities] = useState(false);

  const handleNavigation = (path) => {
    console.log('Search parameters:', searchParams);
    navigate(path);
  };

  const handleInputChange = (field, value) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const filteredDepartureCities = cities.filter(city => 
    city.toLowerCase().includes(searchParams.departure.toLowerCase())
  );

  const filteredDestinationCities = cities.filter(city => 
    city.toLowerCase().includes(searchParams.destination.toLowerCase())
  );

  const inputsConfig = {
    search: [
      { 
        label: "Departure",
        type: "city",
        field: "departure",
        showDropdown: showDepartureCities,
        setShowDropdown: setShowDepartureCities,
        filteredCities: filteredDepartureCities
      },
      { 
        label: "Destination",
        type: "city",
        field: "destination",
        showDropdown: showDestinationCities,
        setShowDropdown: setShowDestinationCities,
        filteredCities: filteredDestinationCities
      },
      { 
        label: "Start Date",
        type: "date",
        field: "startDate"
      },
      { 
        label: "End Date",
        type: "date",
        field: "endDate"
      },
    ],
    skip: [
      { 
        label: "Departure",
        type: "city",
        field: "departure",
        showDropdown: showDepartureCities,
        setShowDropdown: setShowDepartureCities,
        filteredCities: filteredDepartureCities
      },
      { 
        label: "Destination",
        type: "city",
        field: "destination",
        showDropdown: showDestinationCities,
        setShowDropdown: setShowDestinationCities,
        filteredCities: filteredDestinationCities
      },
      { 
        label: "Start Date",
        type: "date",
        field: "startDate"
      },
    ],
  };

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
        <div className="flex flex-wrap items-center gap-3">
          {inputs.map((input, index) => (
            <div key={index} className="relative">
              <label className="block text-sm font-medium mb-1">{input.label}</label>
              
              {input.type === "city" ? (
                <div className="relative">
                  <input
                    type="text"
                    value={searchParams[input.field]}
                    onChange={(e) => handleInputChange(input.field, e.target.value)}
                    onFocus={() => input.setShowDropdown(true)}
                    onBlur={() => setTimeout(() => input.setShowDropdown(false), 200)}
                    className="h-[52px] px-4 py-2 border rounded italic w-full"
                    placeholder={`Enter ${input.label.toLowerCase()}`}
                  />
                  {input.showDropdown && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                      {input.filteredCities.map((city, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            handleInputChange(input.field, city);
                            input.setShowDropdown(false);
                          }}
                        >
                          {city}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <DatePicker
                  selected={searchParams[input.field]}
                  onChange={(date) => handleInputChange(input.field, date)}
                  minDate={input.field === 'endDate' ? searchParams.startDate : new Date()}
                  className="h-[52px] px-4 py-2 border rounded italic w-full"
                  placeholderText={`Select ${input.label.toLowerCase()}`}
                />
              )}
            </div>
          ))}
        </div>

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