import { ComponentProps } from 'react';

export const TopLeftCharacter = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      width="6"
      height="12"
      viewBox="0 0 6 12"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 4.5H1.5V12M6 7.5H4.5V12" stroke="black" />
    </svg>
  );
};
