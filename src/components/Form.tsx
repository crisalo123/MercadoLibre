import { useForm } from "react-hook-form";
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button, Input, SelectForm } from "./ui";
import { zodResolver } from '@hookform/resolvers/zod';


import { createFormSailSchema, type CreateFormSailSchemaType,  } from './shemaForm';
import { LazyCaptcha } from "./lazyCaptcha";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/userContext";

const buttons: { label: string; type: "submit" | "button" | "reset"; className: string }[] = [
 {
    label:'Go Back',
    type: 'button',
    className: 'w-full bg-gray-500 text-white py-2 px-4  rounded hover:bg-gray-600',
 },
 {
    label:'Next',
    type: 'submit',
    className: 'w-full bg-blue-500 text-white py-2 px-4 text-white rounded hover:bg-blue-600',
},
    ];



export const Form = () => {

     const [searchParams] = useSearchParams();
      const referrer = searchParams.get('referrer');
     const navigate = useNavigate();
     const [captchaToken, setCaptchaToken] = useState<string | null>(null);

     const { stateUser, setStateUser } = useUserContext();
   


  
    const { register, handleSubmit, setValue, control,  formState: { errors}} =  useForm<CreateFormSailSchemaType>({
        resolver: zodResolver(createFormSailSchema),
    }) 

 


    const onSubmit = (data: CreateFormSailSchemaType) => {
         if (!captchaToken) {
      alert("Por favor, completa el captcha.");
      return;
    }  
        setStateUser({
          fullname: data.fullName,
          email: data.email,
          address: data.address,
          country: data.country,
        });
        localStorage.setItem('formData', JSON.stringify(data));
    const redirectUrl = referrer
      ? `${referrer}?token=${captchaToken}`
      : `/confirmacion?token=${captchaToken}`;

    navigate(redirectUrl);
 

    }


 useEffect(() => {
  const storedData = localStorage.getItem("formData");
  if (storedData) {
    const parsed = JSON.parse(storedData);
    setValue("fullName", parsed.fullName);
    setValue("email", parsed.email);
    setValue("address", parsed.address);
    setValue("country", String(parsed.country));

   
    setStateUser({
      fullname: parsed.fullName,
      email: parsed.email,
      address: parsed.address,
      country: parsed.country,
    });
  }
}, []);

  return (
    <div className=" mx-auto w-full max-w-md p-4 ">
      <h1 className='text-center p-5 text-2xl'>{ stateUser.fullname !== undefined &&  stateUser.fullname !== '' ?  'Editar datos del usuario' : 'Ingresar datos'} </h1>
         <form  onSubmit={handleSubmit(onSubmit)} className="w-full grid grid-cols-1 gap-4 max-w-md mx-auto p-4 pt-10 bg-white/30  border-2 border-gray-100 shadow-lg rounded-lg">
           <div className="col-span-1">
            <Input {...register("fullName")} placeholder="Full Name" />
            <p className="text-red-500">{errors.fullName?.message}</p>
            </div>
           <div    className="col-span-1">
            <Input {...register("email")} placeholder="Email" />
            <p className="text-red-500">{errors.email?.message}</p>
           </div>
           <div className="col-span-1">
            <Input {...register("address")} placeholder="Address" />
            <p className="text-red-500">{errors.address?.message}</p>
           </div>

           <div className="col-span-1">
            <SelectForm  control={control}  errors={errors} />

           
           </div>
             <div className="col-span-1 flex  space-x-5">
            {buttons.map((button, index:number) => (
               <Button
                key={index}
                type={button.type}
                className={button.className}
               
               
               >
                {button.label}
                </Button>
            ))}
        </div>
        <div className="col-span-1">
             <LazyCaptcha 
                register={register}
                errors={errors}
                setValue={setValue}
                siteKey="6LcnR2ErAAAAALtTT8v-jMujB0ZZMLmhlowRhnkZ"
                 onVerify={(token) => setCaptchaToken(token)}
              />
        </div>
         </form>
           
    </div>
  )
}


