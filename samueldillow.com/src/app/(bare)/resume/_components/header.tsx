import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

export const Header = (props: ComponentProps<'div'>) => {
  return (
    <div
      {...props}
      className={cn(
        'flex flex-col gap-1 p-10',
        'w-full bg-amber-950/20 relative',
        props.className
      )}
    >
      <Avatar className="absolute right-10 top-10 w-36 h-36">
        <AvatarImage src="/resume/avatar.jpg" className="object-cover" />
        <AvatarFallback>SD</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Samuel Dillow</h1>
        <h2 className="text-2xl font-medium text-slate-700">
          Technology Pioneer
        </h2>
      </div>
    </div>
  );
};
