import { Input } from '@/components/ui/input'
import React from 'react'

const  InputField = ({item, handleInputChange, carInfo}) => {
  return (
    <div>
        <Input name={item.name} 
        type={item.fieldType} 
        required={item.required}
        defaultValue={carInfo?.[item.name]}
        onChange ={(e)=>handleInputChange(item.name, e.target.value)}
        />

    </div>
  )
}

export default InputField