'use client';

import { format } from 'date-fns';
import { useState } from 'react';

export const Prompt = ({
  children,
  user = 'visitor',
  directory,
}: {
  children?: React.ReactNode;
  user?: string;
  directory?: string;
}) => {
  const [date] = useState(new Date());

  return (
    <div className="font-jetbrains opacity-70">
      <span className="text-gray-600 dark:text-gray-500">
        {format(date, 'HH:mm')}
      </span>{' '}
      <span className="text-violet-900 dark:text-violet-500">
        {user}@samueldillow.com
      </span>
      {directory && (
        <span className="text-blue-600 dark:text-blue-500"> {directory}</span>
      )}
      &gt; {children}
    </div>
  );
};
