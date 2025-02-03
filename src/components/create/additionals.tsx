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
import { SelectButton } from 'primereact/selectbutton';
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';

export default function Additionals({ handleChange, form }: any) {
  const [value, setValue] = useState(null);
  const scopeOptions = [{ value: 'Público' }, { value: 'Privado' }];

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
        'space-y-4 font-jaldi h-[600px] md:w-2/6 rounded-md',
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
      <div className='card flex justify-content-center gap-4'>
        <SelectButton
          value={form.scope}
          onChange={(e) => handleChange('scope', e.value)}
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
          // onUpload={onUpload}
        />
      </div>
      <div className='py-4'></div>
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
