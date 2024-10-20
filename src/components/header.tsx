import cn from '@/utils/cn';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/lara-light-blue/theme.css';

export default function Header() {
  return (
    <header
      className={cn('border border-solid border-cyan-800', 'w-screen h-32')}
    >
    </header>
  );
}
