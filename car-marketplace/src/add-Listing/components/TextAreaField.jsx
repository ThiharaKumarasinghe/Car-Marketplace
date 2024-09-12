import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const TextAreaField = ({item,handleInputChange}) => {
  return (
    <div>
        <Textarea onChange ={(e)=>handleInputChange(item.name, e.target.value)} required={item.required}/>

    </div>
  )
}

export default TextAreaField