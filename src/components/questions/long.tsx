import React from 'react';
import { InputTextarea } from 'primereact/inputtextarea';

interface ShortAnswerQuestionProps {
  question: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  invalid?: boolean;
  required?: boolean;
}

export default function LongAnswerQuestion({
  question,
  value,
  onChange,
  invalid = false,
  required = false
}: ShortAnswerQuestionProps) {
  return (
    <div className='mb-4'>
      <label className='block mb-2 font-semibold'>
        {question}
        {required && (
          <span className='text-red-700 text-2xl text-right'>*</span>
        )}
      </label>
      <InputTextarea
        rows={5}
        cols={30}
        invalid={invalid}
        value={value}
        onChange={onChange}
        placeholder='Escribe tu respuesta'
        className='w-full max-w-screen-sm md:max-w-[450px]'
      />
    </div>
  );
}
