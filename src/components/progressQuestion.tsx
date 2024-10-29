import cn from '@/utils/cn';
import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function ProgressQuestion({ total = 25, response }: any) {
  const [responded, setResponded] = useState<boolean[]>([]);
  const [porcentage, setPorcentage] = useState<number>(0);
  const [questionsResponded, setQuestionsResponded] = useState<number>(0);

  const handleChange = (question: number, value: boolean) => {
    console.log('🚀 ~ value:', value);
    const aux = responded.map((item: boolean, index: number) =>
      index == question ? value : item
    );
    setResponded(aux);
  };

  useEffect(() => {
    const aux: boolean[] = [];
    for (let i = 0; i < total; i++) aux.push(false);

    setResponded(aux);
  }, []);

  useEffect(() => {
    if (!responded.length) return;

    handleChange(response.id, response.responded);

    const questionResponded = responded.filter((value) => value).length;
    setQuestionsResponded(questionResponded);

    console.log('🚀 ~ responded.length:', responded.length);
    const calc = 100 / responded.length * questionResponded;

    console.log(calc + '%');
    setPorcentage(Math.ceil(calc));
  }, [response]);

  return (
    <div className='flex flex-col w-1/2 mt-24'>
      <section
        className={cn(
          'bg-slate-300 rounded-md',
          'h-24 z-10 pt-4 px-3',
          'flex flex-col items-center justify-center shadow-xl'
        )}
      >
        <ProgressBar
          value={porcentage}
          color='#0891b2'
          className='borde bordersolid border-cyan500 w-full'
        ></ProgressBar>
        <p className={cn('text-lg my-2 text-white')}>
          {questionsResponded}/{total}
        </p>
      </section>
      <section
        className={cn('bg-slate-100 rounded-md', ' relative -top-5 py-7')}
      >
        <ul className='list-none flex flex-wrap gap-2'>
          {responded.map((status: boolean, index: number) => (
            <React.Fragment key={index}>
              <CheckQuestion status={status} index={index} />
            </React.Fragment>
          ))}
        </ul>
      </section>
    </div>
  );
}

function CheckQuestion({ status, index }: any) {
  return (
    <li
      className={cn(
        'w-10 h-10 border border-solid border-gray-400 rounded-md',
        'flex flex-col justify-center items-center',
        { 'bg-green-700 text-white border-white': status }
      )}
      key={index}
    >
      {index + 1}
      <div
        className={cn(
          'border-t border-x-0 border-b-0 border-solid border-gray-300',
          'w-full h-full',
          { 'border-white': status }
        )}
      ></div>
    </li>
  );
}
