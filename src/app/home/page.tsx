'use client';
import Header from '@/components/header';
import { useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import cn from '@/utils/cn';
import { useRouter } from 'next/navigation';
import HomeStudent from '@/components/homeStudent';
import HomeAdmin from '@/components/homeAdmin';

export default function Home() {
  useEffect(() => {
    document.title = 'Encuestas - Home';
  }, []);

  return (
    <>
      {/* <HomeStudent></HomeStudent> */}
      <HomeAdmin></HomeAdmin>
    </>
  );
}
