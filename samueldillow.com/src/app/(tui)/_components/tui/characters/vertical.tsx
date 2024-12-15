import { ComponentProps } from 'react';

export const VerticalCharacter = (props: ComponentProps<'svg'>) => {
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
      <path d="M4.5 12V0M1.5 12V0" stroke="black" />
    </svg>
  );
};
