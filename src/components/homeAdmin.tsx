'use client';
import Header from '@/components/header';
import { useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import cn from '@/utils/cn';
import { useRouter } from 'next/navigation';
import { PiFilesFill } from 'react-icons/pi';

export default function HomeAdmin() {
  const router = useRouter();

  useEffect(() => {
    document.title = 'Encuestas - Home';
  }, []);

  return (
    <>
      <Header></Header>
      <div className='my-5'></div>
      <h1 className='font-jaldi text-center text-[40px] text-gray-800 m-0'>
        Menú principal
      </h1>
      <section
        className={cn(
          'font-jaldi py-5 md:py-10',
          'flex items-center justify-center flex-wrap',
          'gap-3 md:gap-7 md:px-10'
        )}
      >
        <div
          className={cn(
            'w-40 h-40 bg-cyan-700 text-white rounded-md',
            'flex flex-col justify-center items-center',
            'text-2xl text-center cursor-pointer',
            'hover:animate-pulse'
          )}
          onClick={()=> {router.push('home')}}
        >
          <PiFilesFill className='text-3xl' />
          Crear <br /> Cuestionario
        </div>
        <div
          className={cn(
            'w-40 h-40 bg-orange-700 text-white rounded-md',
            'flex flex-col justify-center items-center',
            'text-2xl text-center cursor-pointer',
            'hover:animate-pulse'
          )}
          onClick={()=> {router.push('/administracion/cuestionarios');}}
        >
          <PiFilesFill className='text-3xl' />
          Mis <br /> Cuestionarios
        </div>
        <div
          className={cn(
            'w-40 h-40 bg-green-700 text-white rounded-md',
            'flex flex-col justify-center items-center',
            'text-2xl text-center cursor-pointer select-none',
            'hover:animate-pulse'
          )}
          onClick={()=> {router.push('cuestionarios')}}
        >
          <PiFilesFill className='text-3xl' />
          Responder <br /> Cuestionarios
        </div>
        <div
          className={cn(
            'w-40 h-40 bg-sky-700 text-white rounded-md',
            'flex flex-col justify-center items-center',
            'text-2xl text-center cursor-pointer',
            'hover:animate-pulse'
          )}
          onClick={()=> {
            router.push('/administracion/cuentas');
          }}
        >
          <PiFilesFill className='text-3xl' />
          Crear <br /> Cuenta
        </div>
      </section>
    </>
  );
}
