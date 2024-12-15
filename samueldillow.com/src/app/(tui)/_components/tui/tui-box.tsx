import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';
import { BottomLeftCharacter } from './characters/bottom-left';
import { BottomRightCharacter } from './characters/bottom-right';
import { HorizontalCharacter } from './characters/horizontal';
import { TopLeftCharacter } from './characters/top-left';
import { TopRightCharacter } from './characters/top-right';
import { VerticalCharacter } from './characters/vertical';

export const TuiBox = ({ children, ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props} className={cn('relative p-4', props.className)}>
      <div
        className="grid absolute inset-0 pointer-events-none"
        style={{
          gridTemplateColumns: 'auto 1fr auto',
          gridTemplateRows: 'auto 1fr auto',
        }}
      >
        <TopLeftCharacter />
        <HorizontalCharacter className="w-full" />
        <TopRightCharacter />
        <VerticalCharacter className="h-full" />
        <span className="w-full h-full" />
        <VerticalCharacter className="h-full" />
        <BottomLeftCharacter />
        <HorizontalCharacter className="w-full" />
        <BottomRightCharacter />
      </div>
      {children}
    </div>
  );
};
