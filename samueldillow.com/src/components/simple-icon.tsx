import { ComponentProps } from 'react';
import { SimpleIcon } from 'simple-icons';

export const Icon = ({
  icon,
  ...props
}: { icon: SimpleIcon } & ComponentProps<'svg'>) => {
  const { width = 24, height = 24 } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="currentColor"
      {...props}
    >
      <path d={icon.path} />
    </svg>
  );
};
