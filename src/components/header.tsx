import cn from '@/utils/cn';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import { Toolbar } from 'primereact/toolbar';
import { MdAccountCircle } from 'react-icons/md';

export default function Header() {
  const endContent = () => {
    return (
      <>
        <div className=''>
          <MdAccountCircle />
        </div>
      </>
    );
  };

  return (
    <header
      className={cn('border border-solid border-cyan-800', 'w-screen h-32 overflow-hidden')}
    >
      <Toolbar
        className='bg-white md:mx-10 border-none wfull h-full'
        // start={startContent}
        end={endContent}
      />
    </header>
  );
}
