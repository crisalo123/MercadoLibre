import { Suspense, lazy, useRef } from 'react';
import type { MutableRefObject } from 'react';
import type { ReCAPTCHA } from 'react-google-recaptcha';
import type { UseFormRegister, FieldErrors, UseFormSetValue} from 'react-hook-form';
import type { CreateFormSailSchemaType } from './shemaForm';

import { Input } from './ui';




const ReCAPTCHALazy = lazy(() => import('react-google-recaptcha'));


type Props = {
  siteKey: string;
  onVerify: (token: string | null) => void;
 register: UseFormRegister<CreateFormSailSchemaType>;
  setValue: UseFormSetValue<CreateFormSailSchemaType>;
  errors: FieldErrors<CreateFormSailSchemaType>;
};


export const LazyCaptcha = ({ siteKey, onVerify , errors, register, setValue }: Props) => {
     const recaptchaRef: MutableRefObject<ReCAPTCHA | null> = useRef(null);

    const handleChange = (token: string | null) => {
    // Guardar el token del captcha en el estado del formulario
    setValue('captcha', token || '', { shouldValidate: true });
    onVerify(token);
  }


  return (
   <Suspense fallback={<span className="text-gray-400">Cargando Captcha...</span>}>
    <Input
      type="hidden" {...register('captcha')}
      
       />

      <ReCAPTCHALazy
        ref={recaptchaRef}
        sitekey={siteKey}
        size="normal"
        onChange={handleChange}
        
      />
     
       {errors.captcha && (
        <p className="text-sm text-red-500 mt-2">{errors.captcha.message}</p>
      )}
    </Suspense>
  )
}

