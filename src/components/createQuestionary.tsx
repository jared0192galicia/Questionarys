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

interface params {
  mode: 1 | 2;
}

export default function CreateQuestionary({ mode, visible, setVisible }: any) {
  const [questions, setQuestions] = useState<any>({});
  const [form, setForm] = useState<any>({
    id: 1,
    required: false,
    tittle: '',
    question: '',
    type: '',
    questions: []
  });

  addLocale('es', calendarEs);

  useEffect(() => {
    console.log(form);
  }, [form]);

  const handleChange = (key: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [key]: value }));
  };

  const handlePushOptions = (id: number, options: any) => {
    const questions = form.questions;
    questions.find((question: any, index: number) => index == id).options = options;

    handleChange('questions', questions);
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
      <div className='flex justify-around w-screen'>
        <section className={cn('flex w-1/3 h-full bg-white flex-col p-5')}>
          {/* Formulario general */}
          <div>
            <h2>General</h2>
            <div className='flex w-full gap-2 pb-5'>
              <FloatLabel className='font-jaldi'>
                <InputText
                  id='tittle'
                  value={form.tittle}
                  onChange={(e) => handleChange('tittle', e.target.value)}
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
                  value={form.date}
                  onChange={(e) => handleChange('date', e.value)}
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
                value={form.description}
                onChange={(e) => handleChange('description', e.target.value)}
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
                value={form.question}
                onChange={(e) => handleChange('question', e.target.value)}
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
                  value={form.type}
                  onChange={(e) => handleChange('type', e.target.value)}
                  className='w-[200px]'
                />
                <label htmlFor='type-question'>Tipo</label>
              </FloatLabel>
              <div className='flex align-items-center w-[40%]'>
                <Checkbox
                  inputId='required'
                  name='pizza'
                  value='Obligatoria'
                  onChange={(e) => handleChange('required', e.target.checked)}
                  checked={form.required || false}
                />
                <label htmlFor='required' className='ml-2'>
                  Obligatoria
                </label>
              </div>
            </div>
            {form.type == 'Multiple' ? (
              <MultipleForm onChange={handlePushOptions} id={1}></MultipleForm>
            ) : (
              <></>
            )}
          </div>
        </section>
        <div className='h-96  border border-solid border-gray-300'></div>
        <Additionals></Additionals>
        {/* <section className={cn('flex w-1/3 hfull bg-white')}></section> */}
      {/* <Button label='Agregar' outlined /> */}
      </div>
    </section>
  );
}
