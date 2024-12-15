import { cn } from '@/lib/utils';
import { Fragment } from 'react';

const LINES = Array.from({ length: 15 }, (_, i) => i);

export default function Background({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={cn(
        'w-full h-full',
        'fixed top-0 left-0 w-full h-full',
        '-z-10',
        'print:hidden',
        className
      )}
    >
      <defs>
        <pattern
          id="grid"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <rect width="100" height="100" className="fill-sky-950" />
          {LINES.map((i) => {
            return (
              <Fragment key={i}>
                <RandomLine orientation="horizontal" />
                <RandomLine orientation="vertical" />
              </Fragment>
            );
          })}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

const RandomLine = ({
  orientation,
}: {
  orientation: 'horizontal' | 'vertical';
}) => {
  const x1 = 0;
  const x2 = 100;
  const y1 = Math.random() * 100;
  const y2 = y1;
  const opacity = Math.random() * 0.5;

  return (
    <line
      x1={orientation === 'horizontal' ? x1 : y1}
      x2={orientation === 'horizontal' ? x2 : y2}
      y1={orientation === 'horizontal' ? y1 : x1}
      y2={orientation === 'horizontal' ? y2 : x2}
      width="1"
      className="stroke-slate-400"
      opacity={opacity}
    />
  );
};
