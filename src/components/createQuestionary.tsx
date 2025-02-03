import cn from '@/utils/cn';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { IoMdClose } from 'react-icons/io';
import MultipleForm from './create/multipleChoice';
import { useEffect, useState } from 'react';
import Additionals from './create/additionals';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import { calendarEs } from '@/models/constants';
import { Button } from 'primereact/button';
import SortAnsware from './create/shortAnsware';
import useQuestionaryStore from '@/stores/questionary';

interface params {
  mode: 1 | 2;
}

export default function CreateQuestionary({ visible, setVisible }: any) {
  // const [questions, setQuestions] = useState<any>({});
  const { questionary, handleQuestionary } = useQuestionaryStore();

  const [question, setQuestion] = useState<any>({
    question: '',
    type: '',
    required: false,
    ignoreCase: false
  });

  addLocale('es', calendarEs);

  useEffect(() => {
    console.log(JSON.stringify(questionary, null, 2));
  }, [questionary]);

  const handleChangeQuestion = (key: string, value: any) => {
    setQuestion((prev: any) => ({ ...prev, [key]: value }));
  };

  const handlePushOptions = (options: any = null) => {
    if (!options) return;

    setQuestion((prev: any) => ({ ...prev, ...options }));
  };

  const handleDateRangeChange = (dates: any) => {
    if (!Array.isArray(dates) || dates.length === 0) return;

    handleQuestionary('startDate', dates[0] ?? null);
    handleQuestionary('limitDate', dates[1] ?? null);
  };

  const addQuestion = () => {
    const questions = questionary.questions;
    questions.push(question);
    handleQuestionary('questions', questions);
  };

  return (
    <section
      className={cn(
        'w-screen h-panel font-jaldi borde bordersolid bordercyan-500',
        'absolute top-0 left-0 bg-dirty-white m5 z-20 flex flex-col',
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
      <h1 className='w-1/3 text-center'>Crea un cuestionario</h1>
      <div className='flex flex-col md:flex-row md:justify-around w-screen bg-dirty-white'>
        <section className={cn('flex md:w-1/3 bg-white flex-col p-5 mb-5')}>
          {/* Formulario general */}
          <div>
            <h2>General</h2>
            <div className='flex w-full gap-2 pb-5'>
              <FloatLabel className='font-jaldi'>
                <InputText
                  id='tittle'
                  value={questionary.tittle}
                  onChange={(e) => handleQuestionary('tittle', e.target.value)}
                  className='w-full'
                />
                <label htmlFor='tittle'>Titulo</label>
              </FloatLabel>
              <FloatLabel className='font-jaldi'>
                {/* <InputText
                  id='tittle'
                  value={form.tittle}
                  onChange={(e) => handleChange('tittle', e.target.value)}
                  className='w-full'
                /> */}
                <Calendar
                  value={
                    questionary.startDate || questionary.limitDate
                      ? [questionary.startDate, questionary.limitDate]
                      : null
                  }
                  // value={tempStartDate}
                  onChange={(e) => handleDateRangeChange(e.value)}
                  selectionMode='range'
                  locale='es'
                  readOnlyInput
                  hideOnRangeSelection
                />
                <label htmlFor='tittle'>Fechas</label>
              </FloatLabel>
            </div>
            <FloatLabel className='font-jaldi'>
              <InputTextarea
                id='description'
                value={questionary.description}
                onChange={(e) =>
                  handleQuestionary('description', e.target.value)
                }
                className='w-full'
              />
              <label htmlFor='description'>Descripción</label>
            </FloatLabel>
          </div>
          {/* Formulario de preguntas */}
          <div>
            <h2>Preguntas</h2>
            <FloatLabel className='font-jaldi'>
              <InputText
                id='question'
                value={question.question}
                onChange={(e) =>
                  handleChangeQuestion('question', e.target.value)
                }
                className='w-full'
              />
              <label htmlFor='question'>Pregunta</label>
            </FloatLabel>
            <div className='flex w-full justify-between gap-2 py-5 items-center'>
              <FloatLabel className='font-jaldi'>
                <Dropdown
                  id='type-question'
                  options={[
                    'Abierta',
                    'Falso / Verdadero',
                    'Corta',
                    'Multiple'
                  ]}
                  value={question.type}
                  onChange={(e) => handleChangeQuestion('type', e.target.value)}
                  className='w-[200px]'
                />
                <label htmlFor='type-question'>Tipo</label>
              </FloatLabel>
              <div className='flex align-items-center w-[40%]'>
                <Checkbox
                  inputId='required'
                  name='pizza'
                  value='Obligatoria'
                  onChange={(e) =>
                    handleChangeQuestion('required', e.target.checked)
                  }
                  checked={question.required}
                />
                <label htmlFor='required' className='ml-2'>
                  Obligatoria
                </label>
              </div>
              <Button
                icon='pi pi-plus-circle'
                raised
                outlined
                text
                className='rounded-full bg-green-700 text-white'
                tooltip='Agregar Pregunta'
                onClick={addQuestion}
              ></Button>
            </div>
            {question.type == 'Multiple' ? (
              <MultipleForm onChange={handlePushOptions} id={1}></MultipleForm>
            ) : (
              <></>
            )}
            {question.type == 'Corta' ? (
              <SortAnsware
                handleChange={handleChangeQuestion}
                question={question}
              ></SortAnsware>
            ) : (
              <></>
            )}
          </div>
        </section>
        <div className='md:h-96 border border-solid border-gray-300'></div>
        <Additionals
          handleChange={handleQuestionary}
          form={questionary}
        ></Additionals>
        {/* <section className={cn('flex w-1/3 hfull bg-white')}></section> */}
        {/* <Button label='Agregar' outlined /> */}
      </div>
    </section>
  );
}
