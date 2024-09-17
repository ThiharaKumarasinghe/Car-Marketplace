import { Textarea } from "@/components/ui/textarea";
import React from "react";

const TextAreaField = ({ item, handleInputChange ,carInfo}) => {
  return (
    <div>
      <Textarea
        onChange={(e) => handleInputChange(item.name, e.target.value)}
        required={item.required}
        defaultValue={carInfo?.[item.name]}
      />
    </div>
  );
};

export default TextAreaField;
