import React, { useEffect, useState } from 'react';
import { Checkbox } from 'primereact/checkbox';

interface MultipleChoiceQuestionProps {
  question: string;
  correctAnswers?: boolean;
  onChange: (selected: string[]) => void;
  invalid?: boolean;
  required?: boolean;
}

export default function BooleanQuestion({
  question,
  correctAnswers,
  onChange,
  invalid = false,
  required = false
}: MultipleChoiceQuestionProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const options = ['Verdadero', 'Falso'];

  useEffect(() => {
    if (correctAnswers) {
    }
  }, []);

  const handleOptionChange = (option: string) => {
    let updatedSelectedOptions = [...selectedOptions];

    if (selectedOptions.includes(option)) {
      updatedSelectedOptions = updatedSelectedOptions.filter(
        (item) => item !== option
      );
    }

    setSelectedOptions(updatedSelectedOptions);
    onChange(updatedSelectedOptions);
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
              checked={selectedOptions.includes(option)}
              invalid={invalid}
            />
            <label htmlFor={`option-${index}`} className='ml-2'>
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
