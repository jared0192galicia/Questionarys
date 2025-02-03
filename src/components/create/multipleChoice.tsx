import { InputText } from 'primereact/inputtext';
import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { InputNumber } from 'primereact/inputnumber';
import { FloatLabel } from 'primereact/floatlabel';

export default function MultipleForm({ onChange, id }: any) {
  const [options, setOptions] = useState<string[]>([]);
  const [newOption, setNewOption] = useState<string>('');
  const [maxSelections, setMaxSelections] = useState<number>(1);

  useEffect(() => {
    const question = {
      options,
      maxSelections
    };
    onChange(question);
  }, [options]);

  const addOption = () => {
    if (newOption.trim()) {
      setOptions([...options, newOption]);
      setNewOption('');
    }
  };

  const deleteOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const editOption = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const moveOption = (index: number, direction: 'up' | 'down') => {
    const updatedOptions = [...options];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex >= 0 && targetIndex < options.length) {
      [updatedOptions[index], updatedOptions[targetIndex]] = [
        updatedOptions[targetIndex],
        updatedOptions[index]
      ];
      setOptions(updatedOptions);
    }
  };
  return (
    <section className='space-y-4 p-4 font-jaldi h-[210px] overflow-y-scroll overflow-x-hidden w-full md:w-auto'>
      <div className='flex items-center gap-2'>
        <InputText
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          placeholder='Nueva opción'
          className='flex-grow'
        />
        <Button
          icon='pi pi-plus'
          className='p-button-rounded p-button-success'
          onClick={addOption}
          disabled={!newOption.trim()}
        />
      </div>

      <div className='space-y-2'>
        {options.map((option, index) => (
          <div key={index} className='flex items-center gap-2'>
            <InputText
              value={option}
              onChange={(e) => editOption(index, e.target.value)}
              className='flex-grow'
            />
            <Button
              icon='pi pi-arrow-up'
              className='p-button-rounded p-button-secondary'
              onClick={() => moveOption(index, 'up')}
              disabled={index === 0}
            />
            <Button
              icon='pi pi-arrow-down'
              className='p-button-rounded p-button-secondary'
              onClick={() => moveOption(index, 'down')}
              disabled={index === options.length - 1}
            />
            <Button
              icon='pi pi-trash'
              className='p-button-rounded p-button-danger'
              onClick={() => deleteOption(index)}
            />
          </div>
        ))}
      </div>

      <div className='p-1'></div>

      <FloatLabel className='font-jaldi'>
        <InputNumber
          id='maxSelections'
          value={maxSelections}
          onValueChange={(e) => setMaxSelections(e.value || 1)}
          min={1}
          max={options.length}
          showButtons
          className='w-20'
        />
        <label htmlFor='maxSelections'>Opciones seleccionables</label>
      </FloatLabel>
    </section>
  );
}
