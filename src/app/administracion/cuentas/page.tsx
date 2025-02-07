'use client';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import cn from '@/utils/cn';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/navigation';
import UIMessages from '@/models/messages';
import ForgotPassword from '@/components/forgotPassword';
import { locale, addLocale } from 'primereact/api';
import { SelectButton } from 'primereact/selectbutton';
import { FileUpload } from 'primereact/fileupload';
import axios, { AxiosError, AxiosResponse } from 'axios';

interface Account {
  firstName?: string;
  secondName?: string;
  lastName?: string;
  lastNameMother?: string;
  email?: string;
  password?: string;
  typeAccount: 'usuario' | 'Administrador';
}

export default function CreateAccount() {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [form, setForm] = useState<Account>({ typeAccount: 'usuario' });
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false);
  const [loadingPost] = useState<boolean>(false);
  const [showForgotPassword, setForgotPassword] = useState<boolean>(false);

  const toast = useRef<Toast>(null);
  const router = useRouter();

  const scopeOptions = [{ value: 'Usuario' }, { value: 'Administrador' }];

  addLocale('es', {
    weak: 'Débil',
    medium: 'Media',
    strong: 'Fuerte',
    passwordPrompt: 'Introduce una contraseña'
  });

  locale('es');

  const create = async () => {
    try {
      const response: AxiosResponse = await axios.post(
        'http://localhost:8000/routes/auth.php?action=register',
        form
      );

      console.log('Respuesta del servidor:', response.data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.error('Error del servidor:', error.response.data);
      } else {
        console.error('Error en la petición:', error.message);
      }
    }
  };

  /**
   * @function
   * @param params Tipo de mensaje que se debe de mostrar
   * Muestra un mensaje del tipo y contenido indicado en los parametros.
   */
  const show = (params: any): void => {
    toast.current?.show(params);
  };

  const handleChange = (key: string, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [key]: value }));
  };

  const fetchLogin = () => {
    setLoadingLogin(true);
    setTimeout(() => {
      if (user == 'user' && password == 'user') {
        router.push('/cuestionarios');
      } else if (user == 'admin' && password == 'admin') {
        router.push('/home');
      } else {
        setLoadingLogin(false);
        show(UIMessages.innvalidUser);
      }
    }, 2_000);
  };

  return (
    <>
      <Toast ref={toast} />
      {showForgotPassword && <ForgotPassword setVisible={setForgotPassword} />}
      <section
        className={cn(
          'w-screen md:h-screen',
          'bg-dirty-white font-jaldi font-light',
          'flex justify-center items-center gap-10 flex-col md:flex-row',
          { 'blur-sm': showForgotPassword }
        )}
      >
        <section
          className={cn(
            'w-screen md:w-[500px] pb-10 md:pb-0 md:h-96 rounded-lg bg-white',
            'flex flex-col items-center'
          )}
        >
          <h2 className='w-10/12 font-jaldi'>Crear una cuenta</h2>
          <div className='h-7'></div>
          <div className='flex flex-wrap justify-center gap-x-5 gap-y-6'>
            <FloatLabel>
              <InputText
                id='firts-name'
                value={form.firstName || ''}
                className='w-full md:w-[210px]'
                onChange={(e) => handleChange('firstName', e.target.value)}
              />
              <label htmlFor='firts-name'>Primer Nombre</label>
            </FloatLabel>
            <FloatLabel>
              <InputText
                id='second-name'
                value={form.secondName || ''}
                className='w-full md:w-[210px]'
                onChange={(e) => handleChange('secondName', e.target.value)}
              />
              <label htmlFor='second-name'>Segundo Nombre</label>
            </FloatLabel>
            <FloatLabel>
              <InputText
                id='last-name'
                value={form.lastName || ''}
                className='w-full md:w-[210px]'
                onChange={(e) => handleChange('lastName', e.target.value)}
              />
              <label htmlFor='last-name'>Apellido Paterno</label>
            </FloatLabel>
            <FloatLabel>
              <InputText
                id='lastname'
                value={form.lastNameMother || ''}
                className='w-full md:w-[210px]'
                onChange={(e) => handleChange('lastNameMother', e.target.value)}
              />
              <label htmlFor='lastname'>Apellido Materno</label>
            </FloatLabel>
            <FloatLabel>
              <InputText
                id='email'
                value={form.email || ''}
                className='w-full md:w-[210px]'
                onChange={(e) => handleChange('email', e.target.value)}
              />
              <label htmlFor='email'>Correo</label>
            </FloatLabel>
            <FloatLabel>
              <Password
                name='enter-password'
                value={form.password || ''}
                inputClassName='w-[248px] md:w-[210px]'
                onChange={(e) => handleChange('password', e.target.value)}
                toggleMask
              />
              <label htmlFor='enter-password'>Contraseña</label>
            </FloatLabel>
          </div>
          <div className='my-5 md:my-2'></div>
          <div className='card flex justify-content-center gap-4'>
            <SelectButton
              value={form.typeAccount}
              onChange={(e) => handleChange('typeAccount', e.value)}
              optionLabel='value'
              options={scopeOptions}
            />
          </div>
          <div className='my-5 md:my-2'></div>
          <Button
            label='Crear Cuenta'
            loading={loadingPost}
            className={cn(
              'w-10/12 bg-white text-gray-900 h-10',
              'border border-solid',
              'rounded-md text-lg cursor-pointer',
              'bg-cyan-900 text-white'
            )}
            onClick={create}
          />
        </section>
        <div className='my-5 md:m-0'></div>
      </section>
    </>
  );
}
