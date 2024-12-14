import { ComponentProps } from 'react';

export const BottomLeftCharacter = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      width="6"
      height="12"
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1.5 0V7.5H6M4.5 0V4.5H6" stroke="black" />
    </svg>
  );
};
