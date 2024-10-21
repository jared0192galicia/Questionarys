import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';

interface MultipleChoiceQuestionProps {
  question: string;
  options: string[];
  correctAnswers?: string[];
  maxSelections: number;
  minSelections: number;
  onChange: (selected: string[]) => void;
  invalid?: boolean;
  required?: boolean;
}

export default function MultipleChoiceQuestion({
  question,
  options,
  maxSelections,
  minSelections,
  onChange,
  invalid = false,
  required = false
}: MultipleChoiceQuestionProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (option: string) => {
    let updatedSelectedOptions = [...selectedOptions];

    if (selectedOptions.includes(option)) {
      updatedSelectedOptions = updatedSelectedOptions.filter(
        (item) => item !== option
      );
    } else {
      if (selectedOptions.length < maxSelections) {
        updatedSelectedOptions.push(option);
      }
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
      <div className='flex flex-col'>
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
      {/* {isInvalid && ( */}
        <p className='text-cyan-700 text-sm'>
          Selecciona entre {minSelections} y {maxSelections} opciones.
        </p>
      {/* )} */}
    </div>
  );
}
