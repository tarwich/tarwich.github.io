import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

export default function PrinterPaper({
  className,
  children,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-slate-200 w-[8.5in] max-w-[8.5in] relative',
        'p-[0.5in] mt-4 mx-auto shadow-black shadow-2xl',
        'print:border-none print:p-0 print:m-0 print:w-full print:h-full',
        'print:rounded-none print:bg-transparent print:shadow-none',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
