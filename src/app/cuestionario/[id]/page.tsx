'use client';
import Header from '@/components/header';
import cn from '@/utils/cn';
import { useParams } from 'next/navigation';
import data from '@/models/dommy/encuesta';
import SkeletonCard from '@/components/skeleton/card';
import { useEffect, useState } from 'react';
import SkeletonQuestionary from '@/components/skeleton/questionary';
import ShortAnswerQuestion from '@/components/questions/short';

export default function Questionnarie() {
  const { id } = useParams(); // Captura el slug desde la URL
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10_000);
  }, []);

  return (
    <>
      <Header></Header>
      <section className='bg-dirty-white h-full px-32'>
        <div className='py-5'></div>
        <section
          className={cn(
            'font-jaldi bg-white pl-24 rounded-lg h-full overflow-scroll'
          )}
        >
          {loading ? (
            <SkeletonCard></SkeletonCard>
          ) : (
            <>
              <h1 className='text-3xl pt-7'>{data.titulo}</h1>
              <img src={data.image} alt='' className='w-52 bg-gray-200' />
              <span>{data.descripcion}</span>{' '}
            </>
          )}
        </section>
        <div className='my-5'></div>
        <section className={cn('font-jaldi bg-white pl-24 rounded-lg')}>
          {loading ? (
            <SkeletonQuestionary></SkeletonQuestionary>
          ) : (
            <>
              <h2 className='text-2xl'>Preguntas</h2>
              <ShortAnswerQuestion
                onChange={() => {}}
                question='Holaa'
                value=''
                key={1}
              ></ShortAnswerQuestion>
            </>
          )}
        </section>
        <div className='py-7'></div>
      </section>
    </>
  );
}
