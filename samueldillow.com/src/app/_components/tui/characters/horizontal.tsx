import { ComponentProps } from 'react';

export const HorizontalCharacter = (props: ComponentProps<'svg'>) => {
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
      <path d="M6 7.5H0M6 4.5H0" stroke="black" />
    </svg>
  );
};
