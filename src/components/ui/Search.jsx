import { Button } from "@/components/ui/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, ChevronDown, ChevronRight } from "lucide-react";
import React from "react";

const Box = () => {
  // Form field data for mapping
  const formRows = [
    {
      fields: [
        { type: "select", width: "w-[300px]", label: "Lable" },
        { type: "select", width: "w-[300px]", label: "Lable" },
        { type: "date", width: "w-[200px]", label: "Lable" },
        { type: "date", width: "w-[200px]", label: "Lable" },
      ],
      buttons: [{ text: "Найти", color: "bg-[#6d81d8]" }],
    },
    {
      fields: [
        { type: "select", width: "w-[300px]", label: "Lable" },
        { type: "select", width: "w-[300px]", label: "Lable" },
        { type: "date", width: "w-[200px]", label: "Lable" },
      ],
      buttons: [
        { text: "Найти", color: "bg-[#6d81d8]" },
        { text: "Пропустить", color: "bg-[#369672]", icon: true },
      ],
    },
  ];

  // Render a form field based on its type
  const renderField = (field, index) => {
    if (field.type === "select") {
      return (
        <div key={index} className={`p-0.5 ${field.width}`}>
          <Select>
            <SelectTrigger className="h-[50px] border-[#8796e8] text-base-40 font-body-s-italic">
              <SelectValue placeholder={field.label} />
              <ChevronDown className="w-4 h-4" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      );
    } else if (field.type === "date") {
      return (
        <div key={index} className={`p-0.5 ${field.width}`}>
          <Select>
            <SelectTrigger className="h-[50px] border-[#8796e8] text-base-40 font-body-s-italic">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue placeholder={field.label} />
              <ChevronDown className="w-4 h-4" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date1">Date 1</SelectItem>
              <SelectItem value="date2">Date 2</SelectItem>
              <SelectItem value="date3">Date 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      );
    }
  };

  return (
    <section className="w-full max-w-[1147px] rounded-[5px] border border-dashed border-[#9747ff] p-5">
      {formRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap items-center gap-3 mb-5">
          <div className="flex flex-wrap items-center">
            {row.fields.map((field, fieldIndex) =>
              renderField(field, `${rowIndex}-${fieldIndex}`),
            )}
          </div>

          <div className="flex items-center gap-3">
            {row.buttons.map((button, buttonIndex) => (
              <Button
                key={`button-${rowIndex}-${buttonIndex}`}
                className={`h-[52px] px-6 py-2 ${button.color} text-base-0 font-body-m-regular`}
              >
                {button.text}
                {button.icon && <ChevronRight className="w-6 h-6 ml-2" />}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Box;
