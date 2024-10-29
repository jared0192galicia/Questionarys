'use client';
import Header from '@/components/header';
import { useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import cn from '@/utils/cn';
import { useRouter } from 'next/navigation';

export default function Questionarys() {
  useEffect(() => {
    document.title = 'Encuestas - Home';
  }, []);

  return (
    <>
      <Header></Header>
      <h1 className='font-jaldi text-3xl text-center'>
        Cuestionarios Disponibles
      </h1>
      <section className={cn('w-screen flex flex-wrap gap-7 justify-center')}>
        <QuestionnarieCard></QuestionnarieCard>
        <QuestionnarieCard></QuestionnarieCard>
        <QuestionnarieCard></QuestionnarieCard>
        <QuestionnarieCard></QuestionnarieCard>
        <QuestionnarieCard></QuestionnarieCard>
        <QuestionnarieCard></QuestionnarieCard>
        <QuestionnarieCard></QuestionnarieCard>
        <QuestionnarieCard></QuestionnarieCard>
        <QuestionnarieCard></QuestionnarieCard>
      </section>
      <div className='my-8'></div>
    </>
  );
}

function QuestionnarieCard() {
  const router = useRouter();

  const header = <img alt='Card' src='/usercard.png' />;
  const footer = (
    <>
      <Button
        label='Responder'
        icon='pi pi-check'
        onClick={() => {
          router.push(`/cuestionario/${'id-cuestionario'}`);
        }}
      />
      <Button
        label='Cancel'
        severity='secondary'
        icon='pi pi-times'
        style={{ marginLeft: '0.5em' }}
      />
    </>
  );

  return (
    <div
      className={cn(
        'card rounded-md',
        'flex justify-content-center',
        'w-11/12 sm:w-1/2 md:w-1/3 lg:w-3/12 max-w-[346px] w[calc(33%-30px)] shadow-md',
        'hover:border-solid border-cyan-500 hover:border'
      )}
    >
      <Card
        title='Encuesta'
        subTitle='Lorem ipsum dolor sit amet ...'
        footer={footer}
        header={header}
        className='md:w-25rem'
      >
        <p className='m-0'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </Card>
    </div>
  );
}
