import { ComponentProps } from 'react';

export const TopRightCharacter = (props: ComponentProps<'svg'>) => {
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
      <path d="M0 4.5H4.5V12M0 7.50001L1.5 7.5V12" stroke="black" />
    </svg>
  );
};
