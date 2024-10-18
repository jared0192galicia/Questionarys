import cn from '@/utils/cn';

export default function Login() {
  return (
    <section
      className={cn(
        'w-screen h-[calc(100vh-128px)]',
        'bg-dirty-white',
        'flex justify-center items-center gap-10'
      )}
    >
      <section className={cn('w-72 h-96 rounded-lg bg-white')}></section>
      <section className={cn('w-96 h-96 rounded-lg bg-white')}></section>
    </section>
  );
}
