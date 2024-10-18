import Header from '@/components/header';
import Image from 'next/image';
import Login from './pages/login/page';

export default function Home() {
  return (
    <section>
      <Header></Header>
      <Login></Login>
    </section>
  );
}
