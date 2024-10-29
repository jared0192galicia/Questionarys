'use client';
import Header from '@/components/header';
import cn from '@/utils/cn';
import { useParams, useRouter } from 'next/navigation';
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
import ProgressQuestion from '@/components/progressQuestion';

interface QuestionResponse {
  id?: number;
  responded?: boolean;
}

export default function Questionnarie() {
  const { id } = useParams(); // Captura el slug desde la URL
  const [loading, setLoading] = useState<boolean>(true);
  const [finished, setFinished] = useState<boolean>(false);
  const [lastResponse, setLastResponse] = useState<QuestionResponse>({});
  const router = useRouter();

  useEffect(() => {
    document.title = `Cuestionarios - ${id}`;
    setTimeout(() => {
      setLoading(false);
    }, 3_000);
  }, []);

  const getQuestion = (
    question: any,
    index: number,
    answered: boolean = false
  ) => {
    const response = answered ? question.response : null;
    // console.log(question.question, response)

    switch (question.type) {
      case QuestionTypes.LONG_ANSWER:
        return (
          <LongAnswerQuestion
            onChange={() => {
              setLastResponse({ id: index, responded: true });
            }}
            question={question.question}
            value=''
            required={question.required}
            answer={response != null ? 'Por reponder' : response}
          ></LongAnswerQuestion>
        );
      case QuestionTypes.MULTIPLE_CHOICE:
        return (
          <MultipleChoiceQuestion
            maxSelections={question.max}
            minSelections={question.min}
            onChange={() => {
              setLastResponse({ id: index, responded: true });
            }}
            required={question.required}
            options={question.options}
            question={question.question}
            correctAnswers={response}
          ></MultipleChoiceQuestion>
        );
      case QuestionTypes.SHORT_ANSWER:
        return (
          <ShortAnswerQuestion
            onChange={() => {
              setLastResponse({ id: index, responded: true });
            }}
            question={question.question}
            value=''
            required={question.required}
            answer={response}
          ></ShortAnswerQuestion>
        );

      case QuestionTypes.TRUE_FALSE:
        return (
          <BooleanQuestion
            onChange={() => {
              setLastResponse({ id: index, responded: true });
            }}
            question={question.question}
            required={question.required}
            correctAnswer={response}
          ></BooleanQuestion>
        );
      default:
        break;
    }
    return <>Tipo no reconocido</>;
  };

  // const handleResponse = (index, ) => {

  // }

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
              <h1 className='text-xl md:text-3xl pt-7'>{data.title}</h1>
              <img src={data.image} alt='' className='w-52 mr-2 bg-gray-200' />
              <span>{data.description}</span>{' '}
            </>
          )}
        </section>
        <div className='my-5'></div>

        {finished ? (
          <FinishQuestionary
            qualification={60}
            data={data}
            getQuestion={getQuestion}
          ></FinishQuestionary>
        ) : (
          <section
            className={cn('font-jaldi bg-white px-5 pb-10 md:pl-24 rounded-lg')}
          >
            {loading ? (
              <SkeletonQuestionary></SkeletonQuestionary>
            ) : (
              <div className='flex justify-between'>
                <div>
                  <h2 className='text-2xl pt-4'>Preguntas</h2>
                  {data.questions.map((question, index) => (
                    <React.Fragment key={index}>
                      {getQuestion(question, index)}
                    </React.Fragment>
                  ))}
                </div>
                <ProgressQuestion
                  total={data.questions.length}
                  response={lastResponse}
                ></ProgressQuestion>
              </div>
            )}
          </section>
        )}
        <div className='py-5'></div>
        <div className='flex pb-10 justify-center'>
          <Button
            label={finished ? 'Finalizar Revición' : 'Finalizar Cuestionario'}
            className='bg-cyan-800 md:w-1/3'
            onClick={() => {
              window.scroll(0, 0);
              finished ? router.push('/home') : setFinished(true);
            }}
          ></Button>
          <Ripple />
        </div>
      </section>
    </>
  );
}

function FinishQuestionary({ qualification, data, getQuestion }: any) {
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
      <div className='w-3/4 border border-solid border-gray-200'></div>
      <h3 className='text-left w-3/4'>Respuestas</h3>
      <div className='w-5/6 md:w-3/4'>
        {data.questions.map((question: any, index: number) => (
          <React.Fragment key={index}>
            {getQuestion(question, index, true)}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
