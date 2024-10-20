import type { Metadata } from 'next';
// import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import './globals.css';



export const metadata: Metadata = {
  title: 'Encuestas - Login',
  description: 'Generatnosepp',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='m-0'>
        {children}
      </body>
    </html>
  );
}
