// import { BsXLg } from 'react-icons/bs';
// import Input from '@/components/checkout/input';
import cn from '@/utils/cn';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { useRef, useState } from 'react';
// import {
//   AiFillCheckCircle,
//   AiOutlineInfoCircle,
//   AiOutlineSend
// } from 'react-icons/ai';
// import api from '@/services/axios';

export default function ForgotPassword({ setVisible }: any) {
  const [form, setForm] = useState<any>({});
  const [bodyIndex, setBodyIndex] = useState<number>(1);

  const handleHidden = () => {
    setVisible(false);
  };

  const handleForm = (key: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [key]: value }));
  };

  const changeBody = () => {
    switch (bodyIndex) {
      case 1:
        return (
          <BodySendMail
            change={handleForm}
            next={() => setBodyIndex((prev) => prev + 1)}
            value={form.mail || ''}
          ></BodySendMail>
        );
      case 2:
        return;
    }
  };
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 font-jaldi'>
      <section className='relative w-full max-w-md rounded-lg bg-white p-8 shadow-2xl'>
        <h1 className='mb-6 text-center text-2xl font-semibold text-preslow-blue'>
          Restablece tu contraseña
        </h1>
        <button
          className={cn(
            'absolute right-4 top-7 w-10 h-10 cursor-pointer',
            'rounded-full border-none text-gray-500 hover:text-red-700'
          )}
          onClick={handleHidden}
        >
          X{/* <BsXLg className='text-2xl' /> */}
        </button>
        {changeBody()}
      </section>
    </div>
  );
}

function BodySendMail({ change, next, value }: any) {
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const mailExpression: RegExp =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  /**
   * Verifica la sintaxis de los correos.
   * @param mails Mails a verificar la sintaxis
   * @param regex Expreción o signo por el cual separar correos
   * @returns Booleano según el caso
   */
  const verifyMails = (mail: string) => {
    if (!mail) return false;

    if (!mailExpression.test(mail)) {
      return false;
    }
    return true;
  };

  const handleSendMail = () => {
    if (verifyMails(value)) {
      sendEmail();
      setMessage('Correo enviado!');
    } else {
      setMessage('El formato del correo es inválido.');
    }
    setShowWarning(true);
  };

  const sendEmail = async () => {
    try {
      const body = {
        correo: value
      };

      // await api.post(`/tienda/reiniciar`, body);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mt-8 flex flex-col gap-4'>
      <label htmlFor='email' className='text-gray-700'>
        Por favor ingrese su correo
      </label>

      <FloatLabel className='font-jaldi w-full'>
        <InputText id='username' value='' name='mail' onChange={change} className='w-full' />
        <label htmlFor='username'>Correo</label>
      </FloatLabel>
      {showWarning && (
        <span
          className={cn(
            'flex w-full items-center justify-end text-xs ',
            { 'text-green-600': message === 'Correo enviado!' },
            { 'text-red-600': message != 'Correo enviado!' }
          )}
        >
          {/* <AiOutlineInfoCircle className='text-red700 mr-2 text-sm' /> */}
          {/* {message} */}
        </span>
      )}

      <p className='flex text-sm text-gray-500'>
        {/* <AiOutlineInfoCircle className='mr-2 text-3xl text-blue-700' />  */}
        Se enviará un enlace a tu correo para restablecer tu contraseña. Sigue
        las instrucciones del correo para completar el proceso.
      </p>
      <button
        onClick={handleSendMail}
        className={cn(
          'transition-colors duration-200 hover:border-cyan-600 hover:bg-white hover:text-cyan-700',
          'flex h-12 w-full items-center justify-center rounded-md bg-cyan-700 text-white',
          'border border-solid cursor-pointer'
        )}
      >
        {/* <AiOutlineSend className='mr-2 text-2xl' /> */}
        Enviar
      </button>
    </div>
  );
}

function BodyInsertCode({ change }: any) {
  const inputBorderClass: string =
    'border border-solid border-preslow-blue rounded-md';
  const inputRefs = [
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null)
  ];
  const butttonRef = useRef<any>(null);

  // Método para mover el foco al siguiente componente
  const nextComponent = (currentIndex: number) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < inputRefs.length) {
      inputRefs[nextIndex].current?.focus();
    } else {
      butttonRef.current?.focus();
    }
  };
  return (
    <div className='mt-8 flex flex-col gap-5'>
      <section className='flex w-full gap-2'>
        {inputRefs.map((ref, index) => (
          <>
            <input
              className={cn(
                inputBorderClass,
                'h-10 w-5 flex-1',
                'text-center text-xl',
                'focus:border-2 focus:border-preslow-blue-dark focus:outline-none'
              )}
              ref={ref}
              onChange={({ target }: any) => {
                if (target.value) nextComponent(index);
              }}
              onFocus={({ target }: any) => {}}
              placeholder={(index + 1) as unknown as string}
              type='text'
              key={index}
            />
          </>
        ))}
      </section>
      <p className='text-sm text-gray-500'>
        Se ha enviado un código de verificación a tu correo. Por favor,
        ingrésalo para continuar con el proceso de restablecimiento de
        contraseña.
      </p>
      <button
        className={cn(
          'flex h-12 w-full items-center justify-center rounded-md bg-preslow-blue text-white',
          'border border-solid border-preslow-blue',
          'transition-colors duration-200 hover:border-preslow-blue hover:bg-white hover:text-preslow-blue',
          'focus:border-2 focus:border-preslow-blue-dark focus:outline-none'
        )}
        ref={butttonRef}
      >
        {/* <AiFillCheckCircle className='mr-2 text-2xl' /> */}
        Verificar
      </button>
    </div>
  );
}
