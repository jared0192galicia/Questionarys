import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { InputNumber } from 'primereact/inputnumber';
import cn from '@/utils/cn';
import { Checkbox } from 'primereact/checkbox';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FloatLabel } from 'primereact/floatlabel';

export default function Additionals() {
  const editTemplate = () => {
    return (
      <div className='flex gap-2'>
        <Button icon='pi pi-trash' rounded aria-label='Filter' />
        <Button icon='pi pi-pencil' rounded aria-label='Filter' />
      </div>
    );
  };

  return (
    <section
      className={cn(
        'space-y-4 font-jaldi h-[600px] w-2/6 rounded-md',
        'overflowy-scroll overflowx-hidden bg-white px-5'
      )}
    >
      <h2 className=''>Adicionales</h2>

      <section className='flex gap-5 items-center'>
        <div className='flex align-items-center'>
          <Checkbox
            inputId='required'
            name='pizza'
            value='Obligatoria'
            // onChange={(e) => handleChange('required', e.target.checked)}
            // checked={form.required || false}
            checked={false}
          />
          <label htmlFor='required' className='ml-2'>
            Anonimo
          </label>
        </div>
        <FloatLabel className='font-jaldi'>
          <InputNumber
            id='maxSelections'
            value={0}
            // onValueChange={(e) => setMaxSelections(e.value || 1)}
            min={1}
            className='w-full'
          />
          <label htmlFor='maxSelections'>Limite de intentos</label>
        </FloatLabel>
      </section>
      <div className='py-12'></div>
      <h2 className=''>Gestion</h2>
      <DataTable
        emptyMessage='Sin preguntas'
        value={[{}, {}, {}, {}]}
        stripedRows
        size='small'
        height='100px'
      >
        <Column field='name' header='Pregunta'></Column>
        <Column field='category' header='Orden'></Column>
        <Column field='quantity' header='Opciones' body={editTemplate}></Column>
      </DataTable>
    </section>
  );
}
