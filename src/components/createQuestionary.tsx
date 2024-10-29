import cn from '@/utils/cn';
import { IoMdClose } from 'react-icons/io';

interface params {
  mode: 1 | 2;
}

export default function CreateQuestionary({ mode, visible, setVisible }: any) {
  return (
    <section
      className={cn(
        'w-screen h-screen font-jaldi',
        'absolute top-0 left-0 bg-white m5 z-20',
        { hidden: !visible }
      )}
    >
      <button
        className={cn(
          'bg-slate-100 rounded-full absolute text-2xl top-5 left-5',
          'hover:text-red-700 cursor-pointer'
        )}
        onClick={() => {
          setVisible((prev: boolean) => !prev);
        }}
      >
        <IoMdClose />
      </button>
      <div className='w-full h-screen flex flex-wrap'>
        <section
          className={cn('w-2/5', 'border border-solid border-cyan-800')}
        ></section>
        <div className='w-20'></div>
        <section
          className={cn('w-2/5', 'border border-solid border-cyan-800')}
        ></section>
      </div>
    </section>
  );
}
