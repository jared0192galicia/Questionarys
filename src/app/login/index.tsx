'use client';
import { Password } from 'primereact/password';
import {Button } from 'primereact/button';
import cn from '@/utils/cn';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Account {
  firstName?: string;
  secondName?: string;
  lastName?: string;
  lastNameMother?: string;
  email?: string;
  password?: string;
}

export default function Login() {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [form, setForm] = useState<Account>({});
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false);
  const [loadingPost, setLoadingPost] = useState<boolean>(false);

  const router = useRouter();


  const handleChange = (key: string, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [key]: value }));
  };

  return (
    <section
      className={cn(
        'w-screen h-[calc(100vh-135px)]',
        'bg-dirty-white font-jaldi font-light',
        'flex justify-center items-center gap-10'
      )}
    >
      <section
        className={cn(
          'w-72 h-96 rounded-lg bg-white',
          'flex flex-col items-center'
        )}
      >
        <h2 className="w-10/12 font-jaldi">Iniciar sesion</h2>
        <div className="h-7"></div>
        <FloatLabel className="font-jaldi">
          <InputText
            id="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <label htmlFor="username">Usuario</label>
        </FloatLabel>

        <div className="h-7"></div>

        <FloatLabel className="font-jaldi">
          <Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            toggleMask
            feedback={false}
            inputClassName="w-[247px]"
          />

          <label htmlFor="username">Contraseña</label>
        </FloatLabel>
        <p
          className={cn(
            'text-xs m-0 text-right w-10/12 mt-1',
            'cursor-pointer hover:text-cyan-800'
          )}
        >
          Olvidaste tu Contraseña?
        </p>
        <div className="my-7"></div>
        <Button
          label="Ingresar"
          className={cn(
            'w-10/12 bg-white text-gray-800 h-10',
            'border border-solid border-cyan-800',
            'rounded-md text-lg cursor-pointer',
            'hover:bg-cyan-900 hover:text-white',
            'transition-all duration-300'
          )}
          loading={loadingLogin}
          onClick={() => {
            setLoadingLogin(true);
            setTimeout(()=> router.push('/home'),5_000);
          }}
        />
      </section>
      <div className="h-1/2 border border-solid border-gray-200"></div>
      <section
        className={cn(
          'w-[500px] h-96 rounded-lg bg-white',
          'flex flex-col items-center'
        )}
      >
        <h2 className="w-10/12 font-jaldi">Crear una cuenta</h2>
        <div className="h-7"></div>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-6">
          <FloatLabel>
            <InputText
              id="firts-name"
              value={form.firstName}
              className="w-[210px]"
              onChange={(e) => handleChange('', e.target.value)}
            />
            <label htmlFor="firts-name">Primer Nombre</label>
          </FloatLabel>
          <FloatLabel>
            <InputText
              id="second-name"
              value={form.secondName}
              className="w-[210px]"
              onChange={(e) => handleChange('secondName', e.target.value)}
            />
            <label htmlFor="second-name">Segundo Nombre</label>
          </FloatLabel>
          <FloatLabel>
            <InputText
              id="last-name"
              value={form.lastName}
              className="w-[210px]"
              onChange={(e) => handleChange('lastName', e.target.value)}
            />
            <label htmlFor="last-name">Apellido Paterno</label>
          </FloatLabel>
          <FloatLabel>
            <InputText
              id="lastname"
              value={form.lastNameMother}
              className="w-[210px]"
              onChange={(e) => handleChange('lastNameMother', e.target.value)}
            />
            <label htmlFor="lastname">Apellido Materno</label>
          </FloatLabel>
          <FloatLabel>
            <InputText
              id="email"
              value={form.email}
              className="w-[210px]"
              onChange={(e) => handleChange('email', e.target.value)}
            />
            <label htmlFor="email">Correo</label>
          </FloatLabel>
          <FloatLabel>
            <Password
              name="enter-password"
              value={form.password}
              inputClassName="w-[210px]"
              onChange={(e) => handleChange('password', e.target.value)}
              toggleMask
            />
            <label htmlFor="enter-password">Contraseña</label>
          </FloatLabel>
        </div>
        <div className="my-2"></div>
        <Button
          label="Crear Cuenta"
          loading={loadingPost}
          className={cn(
            'w-10/12 bg-white text-gray-900 h-10',
            'border border-solid',
            'rounded-md text-lg cursor-pointer',
            'bg-cyan-900 text-white'
          )}
        />
      </section>
    </section>
  );
}
