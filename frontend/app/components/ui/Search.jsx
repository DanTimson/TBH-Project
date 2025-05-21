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

const Search = ({ 
  mode = "search",
  initialDeparture = "",
  initialDestination = "",
  initialStartDate = null,
  initialEndDate = null
}) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    departure: initialDeparture,
    destination: initialDestination,
    startDate: initialStartDate,
    endDate: initialEndDate
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
        label: "Откуда",
        type: "city",
        field: "departure",
        showDropdown: showDepartureCities,
        setShowDropdown: setShowDepartureCities,
        filteredCities: filteredDepartureCities
      },
      { 
        label: "Куда",
        type: "city",
        field: "destination",
        showDropdown: showDestinationCities,
        setShowDropdown: setShowDestinationCities,
        filteredCities: filteredDestinationCities
      },
      { 
        label: "Туда",
        type: "date",
        field: "startDate"
      },
      { 
        label: "Обратно",
        type: "date",
        field: "endDate"
      },
    ],
    skip_start: [
      { 
        label: "Откуда",
        type: "city",
        field: "departure",
        showDropdown: showDepartureCities,
        setShowDropdown: setShowDepartureCities,
        filteredCities: filteredDepartureCities
      },
      { 
        label: "Куда",
        type: "city",
        field: "destination",
        showDropdown: showDestinationCities,
        setShowDropdown: setShowDestinationCities,
        filteredCities: filteredDestinationCities
      },
      { 
        label: "Туда",
        type: "date",
        field: "startDate"
      },
    ],
    skip_end: [
      { 
        label: "Откуда",
        type: "city",
        field: "departure",
        showDropdown: showDepartureCities,
        setShowDropdown: setShowDepartureCities,
        filteredCities: filteredDepartureCities
      },
      { 
        label: "Куда",
        type: "city",
        field: "destination",
        showDropdown: showDestinationCities,
        setShowDropdown: setShowDestinationCities,
        filteredCities: filteredDestinationCities
      },
      { 
        label: "Обратно",
        type: "date",
        field: "endDate"
      },
    ],  
    skip_hotel: [
      { 
        label: "Куда",
        type: "city",
        field: "destination",
        showDropdown: showDestinationCities,
        setShowDropdown: setShowDestinationCities,
        filteredCities: filteredDestinationCities
      },
      { 
        label: "Туда",
        type: "date",
        field: "startDate"
      },
      { 
        label: "Обратно",
        type: "date",
        field: "endDate"
      },
    ],
  };

  const buttonsConfig = {
    search: [{ text: "Найти", color: "bg-indigo-500", path: "/train1"}],
    skip: [
      { text: "Найти", color: "bg-indigo-500", path: "/train1"},
      { text: "Пропустить", color: "bg-emerald-600", icon: true },
    ],
  };

  const inputs = inputsConfig[mode];
  const buttons = buttonsConfig[mode === "search" ? "search" : "skip"];

  return (
    <section className="w-full max-w-screen-xl rounded-md bg-white p-5 ">
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-grow">
          {inputs.map((input, index) => (
            <div key={index} className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {input.label}
              </label>
              
              {input.type === "city" ? (
                <div className="relative">
                  <input
                    type="text"
                    value={searchParams[input.field]}
                    onChange={(e) => handleInputChange(input.field, e.target.value)}
                    onFocus={() => input.setShowDropdown(true)}
                    onBlur={() => setTimeout(() => input.setShowDropdown(false), 200)}
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md italic placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder={`Ввести ${input.label.toLowerCase()}`}
                  />
                  {input.showDropdown && (
                    <div className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                      {input.filteredCities.map((city, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
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
                  className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md italic placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholderText={`Выбрать дату ${input.label.toLowerCase()}`}
                  popperClassName="z-50" // This ensures the calendar appears above other content
                  popperPlacement="bottom-start" // This makes it open downward
                  showPopperArrow={false}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {buttons.map((button, index) => (
            <Button
              key={index}
              onClick={() => handleNavigation(button.path)}
              className={`h-12 px-6 rounded-md text-white font-medium transition-colors ${button.color} hover:${button.color.replace('bg-', 'bg-').replace('-500', '-600').replace('-600', '-700')} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:${button.color.replace('bg-', 'ring-')}`}
            >
              <div className="flex items-center justify-center">
                {button.text}
                {button.icon && <ChevronRight className="w-5 h-5 ml-2" />}
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;