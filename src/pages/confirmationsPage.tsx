
import { useSearchParams } from 'react-router-dom';
import imgbg from '../img/logo__small@2x.png';

export const ConfirmationsPage = () => {
      const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  return (
     <div className='w-full  min-h-screen flex flex-col items-center justify-center'>  
            <div className="bg-[#ffe600] w-full h-[60px] md:h-[9vh]  2xl:h-[6vh]  md:!-mt-[149px] 2xl:!-mt-[526px] flex items-center  px-4 border-b-2 border-gray-200">
             <div className=' w-10/12 h-[5vh] flex  justify-left items-left mx-auto'> 
             <img src={imgbg} alt="Logo Mercado Libre" className="h-11 text-left mx-5 md:-mt-1 2xl:-mt-0" />
             <h1 className=' hidden md:block text-[#333333] w-12 leading-5 md:-mt-1 2xl:-mt-0 italic font-sans text-xl tracking-wide font-semibold'>mercado libre</h1>
             </div>
           </div>


    <div className="w-10/12   mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold ">¡Gracias por confirmar tus datos! </h1>
      <p className="mb-2">Tu token es: <code className="text-xs bg-gray-100 p-2 break-words max-w-full overflow-hidden block whitespace-pre-wrap">
  {token}
</code></p>
      <p>Tu pedido será procesado en breve.</p>
    </div>
    </div>
  )
}
