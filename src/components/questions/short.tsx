import React from 'react';
import { InputText } from 'primereact/inputtext';

interface ShortAnswerQuestionProps {
  question: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  answer?: string;
  required: boolean;
}

export default function ShortAnswerQuestion({
  question,
  value,
  answer,
  onChange,
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
      <InputText
        value={answer != null ? answer : value}
        onChange={onChange}
        placeholder='Escribe tu respuesta'
        className='w-full max-w-[250px]'
      />
    </div>
  );
}
