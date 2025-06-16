import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'
import type { Control, FieldErrors } from 'react-hook-form';
import {  Controller } from "react-hook-form";
import type { CreateFormSailSchemaType } from '../shemaForm';
import { useUserContext } from '../../context/userContext';


interface SelectItemProps {
   control:  Control<{
    country: string | number;
    address: string;
    email: string;
    fullName: string;
    captcha: string;
}, any, {
    country: string | number;
    address: string;
    email: string;
    fullName: string;
    captcha: string;
}>

errors: FieldErrors<CreateFormSailSchemaType>
 
} 

    const valuesContry = [
        { value: '1', label: 'Argentina' }, 
        { value: '2', label: 'Brazil' },
        { value: '3', label: 'Chile' },
        { value: '4', label: 'Colombia' },
        { value: '5', label: 'Mexico' },
        { value: '6', label: 'Peru' },
        { value: '7', label: 'Uruguay' }, 
    ]


export const SelectForm:React.FC<SelectItemProps> = ({control, errors}) => {

    const { stateUser } = useUserContext();

   


  return (
    <div> 
     <Controller
        name="country"
        control={control}
        render={({ field }) => (
        
          <Select
            onValueChange={(value) => field.onChange(value)}
             value={ (field.value !== undefined && field.value !== null ? String(field.value) : (stateUser.country !== undefined && stateUser.country !== null ? String(stateUser.country) : '')) } 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              {valuesContry.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
   <p className="text-red-500">{errors.country?.message}</p>
 </div>
  )
}
