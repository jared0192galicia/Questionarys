import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import cn from '@/utils/cn';
import { Checkbox } from 'primereact/checkbox';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FloatLabel } from 'primereact/floatlabel';
import { SelectButton } from 'primereact/selectbutton';
import { FileUpload } from 'primereact/fileupload';
import useQuestionaryStore from '@/stores/questionary';
import axios, { AxiosResponse } from 'axios';
import { Toast } from 'primereact/toast';
import UIMessages from '@/models/messages';

export default function Additionals({}: any) {
  const scopeOptions = [{ value: 'Público' }, { value: 'Privado' }];
  const toast = useRef<Toast>(null);

  const { questionary, handleQuestionary } = useQuestionaryStore();

  // Función para mover la pregunta de posición
  const moveOption = (index: number, direction: 'up' | 'down') => {
    const questions = [...questionary.questions];

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    [questions[index], questions[newIndex]] = [
      questions[newIndex],
      questions[index]
    ]; // Intercambio

    handleQuestionary('questions', questions);
  };

  // Función para eliminar la pregunta
  const deleteOption = (index: number) => {
    const questions = questionary.questions.filter((_, i) => i !== index);
    handleQuestionary('questions', questions);
  };

  // Template de botones para la columna "Orden"
  const orderTemplate = (_rowData: any, { rowIndex }: { rowIndex: number }) => (
    <div className='flex gap-2'>
      <Button
        icon='pi pi-arrow-up'
        className='p-button-rounded p-button-secondary'
        onClick={() => moveOption(rowIndex, 'up')}
        disabled={rowIndex === 0}
      />
      <Button
        icon='pi pi-arrow-down'
        className='p-button-rounded p-button-secondary'
        onClick={() => moveOption(rowIndex, 'down')}
        disabled={rowIndex === questionary.questions.length - 1}
      />
    </div>
  );

  const editTemplate = (_rowData: any, { rowIndex }: { rowIndex: number }) => {
    return (
      <div className='flex gap-2'>
        <Button
          icon='pi pi-trash'
          rounded
          aria-label='Filter'
          onClick={() => deleteOption(rowIndex)}
          className='p-button-rounded p-button-danger'
        />
        <Button icon='pi pi-pencil' rounded aria-label='Filter' />
      </div>
    );
  };

  /**
   * @function
   * @param params Tipo de mensaje que se debe de mostrar
   * Muestra un mensaje del tipo y contenido indicado en los parametros.
   */
  const show = (params: any): void => {
    toast.current?.show(params);
  };

  const create = async () => {
    try {
      const response: AxiosResponse = await axios.post(
        'http://localhost:8000/routes/surveys.php',
        questionary
      );

      console.log('Respuesta del servidor:', response.data);
      if (response.data) show(UIMessages.createSuccess);
    } catch (error: any) {
      if (error.response) {
        console.error('Error del servidor:', error.response.data);
      } else {
        console.error('Error en la petición:', error.message);
      }
    }
  };

  return (
    <>
      <Toast ref={toast} />
      <section
        className={cn(
          'space-y-4 font-jaldi h-[600px] md:w-2/6 rounded-md',
          'overflowy-scroll overflowx-hidden bg-white px-5'
        )}
      >
        <h2 className=''>Adicionales</h2>

        <section className='flex gap-5 items-center'>
          <div className='flex align-items-center'>
            <Checkbox
              inputId='anonymous'
              name='anonymous'
              value='Obligatoria'
              onChange={(e) =>
                handleQuestionary('isAnonymous', e.target.checked)
              }
              checked={questionary.isAnonymous}
            />
            <label htmlFor='required' className='ml-2'>
              Anonimo
            </label>
          </div>
          <FloatLabel className='font-jaldi'>
            <InputNumber
              id='maxSelections'
              value={questionary.attempts}
              onValueChange={(e) => handleQuestionary('attempts', e.value || 1)}
              min={1}
              className='w-full'
            />
            <label htmlFor='maxSelections'>Limite de intentos</label>
          </FloatLabel>
        </section>
        <div className='card flex justify-content-center gap-4'>
          <SelectButton
            value={questionary.public}
            onChange={(e) => handleQuestionary('public', e.value)}
            optionLabel='value'
            options={scopeOptions}
          />
          <FileUpload
            mode='basic'
            chooseLabel='Imagen'
            name='demo[]'
            url='/api/upload'
            accept='image/*'
            maxFileSize={1000000}
          />
        </div>
        <div className='py-4'></div>
        <h2 className=''>Gestion</h2>
        <DataTable
          emptyMessage='Sin preguntas'
          value={questionary.questions}
          stripedRows
          size='small'
          height='100px'
        >
          <Column field='question' header='Pregunta'></Column>
          <Column header='Orden' body={orderTemplate}></Column>
          <Column
            field='quantity'
            header='Opciones'
            body={editTemplate}
          ></Column>
        </DataTable>
        <Button
          label='Guardar'
          severity='success'
          className='bg-green-700'
          icon='pi pi-check'
          onClick={create}
        ></Button>
      </section>
    </>
  );
}
