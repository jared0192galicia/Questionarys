import { Checkbox } from 'primereact/checkbox';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';

export default function SortAnsware({handleChange, question}: any) {
  return (
    <>
      <FloatLabel className='font-jaldi'>
        <InputText
          id='question'
          value={question.answare}
          onChange={(e) => handleChange('answare', e.target.value)}
          className='w-full'
        />
        <label htmlFor='question'>Respuesta</label>
      </FloatLabel>

      <div className='flex align-items-center mt-4 w-full'>
        <Checkbox
          inputId='required'
          name='pizza'
          value='Obligatoria'
          onChange={(e) => handleChange('ignoreCase', e.target.checked)}
          checked={question.ignoreCase || false}
        />
        <label htmlFor='required' className='ml-2'>
          Ignorar mayúsculas y minúsculas
        </label>
      </div>
    </>
  );
}
