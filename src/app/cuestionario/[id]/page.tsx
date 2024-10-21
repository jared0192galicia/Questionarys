'use client';
import Header from '@/components/header';
import cn from '@/utils/cn';
import { useParams } from 'next/navigation';
import data from '@/models/dommy/encuesta';
import SkeletonCard from '@/components/skeleton/card';
import React, { useEffect, useState } from 'react';
import SkeletonQuestionary from '@/components/skeleton/questionary';
import ShortAnswerQuestion from '@/components/questions/short';
import LongAnswerQuestion from '@/components/questions/long';
import MultipleChoiceQuestion from '@/components/questions/multiple';
import BooleanQuestion from '@/components/questions/boolean';
import { QuestionTypes } from '@/models/constants';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';

export default function Questionnarie() {
  const { id } = useParams(); // Captura el slug desde la URL
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    document.title = `Cuestionarios - ${id}`;
    setTimeout(() => {
      setLoading(false);
    }, 3_000);
  }, []);

  const getQuestion = (question: any) => {
    switch (question.type) {
      case QuestionTypes.LONG_ANSWER:
        return (
          <LongAnswerQuestion
            onChange={() => {}}
            question={question.question}
            value=''
          ></LongAnswerQuestion>
        );
      case QuestionTypes.MULTIPLE_CHOICE:
        return (
          <MultipleChoiceQuestion
            maxSelections={question.max}
            minSelections={question.min}
            onChange={() => {}}
            options={question.options}
            question={question.question}
          ></MultipleChoiceQuestion>
        );
      case QuestionTypes.SHORT_ANSWER:
        return (
          <ShortAnswerQuestion
            onChange={() => {}}
            question={question.question}
            value=''
          ></ShortAnswerQuestion>
        );

      case QuestionTypes.TRUE_FALSE:
        return (
          <BooleanQuestion
            onChange={() => {}}
            question={question.question}
          ></BooleanQuestion>
        );
      default:
        break;
    }
    return <>Tipo no reconocido</>;
  };

  return (
    <>
      <Header></Header>
      <section className='bg-dirty-white h-full sm:px-20 md:px-32'>
        <div className='py-5'></div>
        <section
          className={cn(
            'font-jaldi bg-white px-5 md:pl-24 rounded-lg h-full overflow-scroll'
          )}
        >
          {loading ? (
            <SkeletonCard></SkeletonCard>
          ) : (
            <>
              <h1 className='text-xl md:text-3xl pt-7'>{data.titulo}</h1>
              <img src={data.image} alt='' className='w-52 mr-2 bg-gray-200' />
              <span>{data.descripcion}</span>{' '}
            </>
          )}
        </section>
        <div className='my-5'></div>
        <section
          className={cn('font-jaldi bg-white px-5 pb-10 md:pl-24 rounded-lg')}
        >
          {loading ? (
            <SkeletonQuestionary></SkeletonQuestionary>
          ) : (
            <>
              <h2 className='text-2xl pt-4'>Preguntas</h2>
              {data.questions.map((question, index) => (
                <React.Fragment>{getQuestion(question)}</React.Fragment>
              ))}
            </>
          )}
        </section>
        <div className='py-5'></div>
        <div className='flex pb-10 justify-center'>
          <Button
            label={'Finalizar Cuestionario'}
            className='bg-cyan-800 md:w-1/3'
          ></Button>
          <Ripple />
        </div>
      <FinishQuestionary qualification={60}></FinishQuestionary>
      </section>

    </>
  );
}

function FinishQuestionary({qualification}: any) {
  return (
    <section
      className={cn(
        'font-jaldi bg-white px-5 md:pl-24 rounded-lg h-full',
        'flex flex-col items-center'
      )}
    >
      <h2 className='text-3xl'>Obtiviste</h2>

      <Knob
        value={qualification}
        valueColor='#0891b2'
        valueTemplate={'{value}%'}
        size={150}
      />
      <h3 className='text-2xl'>De aciertos</h3>
      <h3>Tu calificación es {qualification / 10}</h3>

    </section>
  );
}
