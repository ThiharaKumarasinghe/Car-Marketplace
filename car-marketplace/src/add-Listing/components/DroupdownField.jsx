import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DroupdownField = ({item,handleInputChange, carInfo}) => {
  return (
    <div>
      <Select onValueChange={(value)=>handleInputChange(item.name, value)} required={item.required} defaultValue={carInfo?.[item.name]}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={carInfo?.[item.name]?carInfo?.[item.name]:item.label} />
        </SelectTrigger>
        <SelectContent>
            {
                item.options.map((option, index) => (
                    <SelectItem value={option}>{option}</SelectItem>
                ))
            }
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DroupdownField;
