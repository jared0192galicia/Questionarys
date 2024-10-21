import React, { useEffect, useState } from 'react';
import { Checkbox } from 'primereact/checkbox';

interface BooleanQuestionProps {
  question: string;
  correctAnswer?: boolean;
  onChange: (selected: boolean) => void;
  invalid?: boolean;
  required?: boolean;
}

export default function BooleanQuestion({
  question,
  correctAnswer,
  onChange,
  invalid = false,
  required = false
}: BooleanQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const options = ['Verdadero', 'Falso'];

  useEffect(() => {
    if (correctAnswer != null) {
      setSelectedOption(correctAnswer ? 'Verdadero' : 'Falso');
    }
  }, []);

  const handleOptionChange = (option: string) => {
    const newSelectedOption = selectedOption === option ? null : option;
    setSelectedOption(newSelectedOption);
    onChange(newSelectedOption === 'Verdadero');
  };

  return (
    <div className='mb-4'>
      <label className='block mb-2 font-semibold'>
        {question}
        {required && (
          <span className='text-red-700 text-2xl text-right'>*</span>
        )}
      </label>
      <div className='flex gap-5'>
        {options.map((option, index) => (
          <div key={index} className='mb-2'>
            <Checkbox
              inputId={`option-${index}`}
              value={option}
              onChange={() => handleOptionChange(option)}
              checked={selectedOption === option}
              className={invalid ? 'p-invalid' : ''}
            />
            <label htmlFor={`option-${index}`} className='ml-2'>
              {option}
            </label>
          </div>
        ))}
      </div>
      {invalid && (
        <p className='text-red-700 text-sm'>Por favor selecciona una opción.</p>
      )}
    </div>
  );
}
