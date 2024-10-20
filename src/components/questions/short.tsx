import React from 'react';
import { InputText } from 'primereact/inputtext';

interface ShortAnswerQuestionProps {
  question: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ShortAnswerQuestion({
  question,
  value,
  onChange
}: ShortAnswerQuestionProps) {
  return (
    <div className='mb-4'>
      <label className='block mb-2 font-semibold'>{question}</label>
      <InputText
        value={value}
        onChange={onChange}
        placeholder='Escribe tu respuesta'
        className='w-full'
      />
    </div>
  );
}
