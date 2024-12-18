import { cn } from '@/lib/utils';
import BootSequence from './_components/boot-sequence';

export default function TuiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'grid grid-rows-[20px_1fr_20px] items-center justify-items-center',
        'min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]',
        'bg-amber-100 dark:bg-black'
      )}
    >
      <BootSequence className="absolute inset-0 opacity-50 pointer-events-none" />

      {children}
    </div>
  );
}
