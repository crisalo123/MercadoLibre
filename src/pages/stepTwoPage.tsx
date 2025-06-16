import { Form } from '../components/Form';
import imgbg from '../img/logo__small@2x.png';
import { useTranslation } from 'react-i18next';



export const StepTwoPage = () => {
   const { t } = useTranslation();
  return (
     <div className='w-full  min-h-screen flex flex-col items-center justify-center'>  
       <div className="bg-[#ffe600] w-full h-[60px] md:h-[9vh]  2xl:h-[6vh]  flex items-center  px-4 border-b-2 border-gray-200">
        <div className=' w-10/12 h-[5vh] flex  justify-left items-left mx-auto'> 
        <img src={imgbg} alt="Logo Mercado Libre" className="h-11 text-left mx-5 md:-mt-1 2xl:-mt-0" />
        <h1 className=' hidden md:block text-[#333333] w-12 leading-5 md:-mt-1 2xl:-mt-0 italic font-sans text-xl tracking-wide font-semibold'>
          {t('mercado libre')}</h1>
        </div>
      </div>
      <div className=' w-full h-[91vh]  2xl:h-[94vh] flex items-center justify-center'>
        
      <Form />
       </div>
       </div>
    
  )
}

