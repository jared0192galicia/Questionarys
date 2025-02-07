"use client"
import cn from '@/utils/cn';
import { useRouter } from 'next/navigation';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import { Toolbar } from 'primereact/toolbar';
import { CiLogout } from 'react-icons/ci';
import { IoArrowBack } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';
import { MdAccountCircle } from 'react-icons/md';

export default function Header() {
  const router = useRouter();

  const endContent = () => {
    return (
      <>
        <div className='flex items-center flex-col'>
          <p className='textlg pr5 m-0'>Jared Galicia</p>
          <MdAccountCircle className='text-[70px] text-gray-400' />
        </div>
        <button
          className='border-none bg-white cursor-pointer ml-5'
          onClick={() => {
            router.push('/');;
          }}
        >
          {/* <p className='textlg pr5 m-0'>Jared Galicia</p> */}
          <LuLogOut className='text-[30px] text-gray400' />
        </button>
      </>
    );
  };

  const startContent = () => {
    return (
      <>
        <button
          className='border-none bg-white cursor-pointer'
          onClick={() => {
            history.back();
          }}
        >
          {/* <p className='textlg pr5 m-0'>Jared Galicia</p> */}
          <IoArrowBack className='text-[30px] text-gray400' />
        </button>
      </>
    );
  };

  return (
    <header
      className={cn(
        'border border-solid border-cyan-800',
        'w-screen h-32 overflow-hidden'
      )}
    >
      <Toolbar
        className='bg-white md:mx-10 border-none wfull h-full'
        start={startContent}
        end={endContent}
      />
    </header>
  );
}
