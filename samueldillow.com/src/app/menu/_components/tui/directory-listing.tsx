import { cn } from '@/lib/utils';
import { Prompt } from './prompt';

export const DirectoryListing = ({
  children,
  directory,
}: {
  children: React.ReactNode;
  directory?: string;
}) => {
  return (
    <div className="flex flex-col gap-4 font-jetbrains">
      <Prompt>ls -la {directory}</Prompt>
      <dl
        className="grid gap-2"
        style={{
          gridTemplateColumns: 'auto auto',
        }}
      >
        {children}
      </dl>
    </div>
  );
};

export const DirectoryListingItem = ({
  type,
  extra,
  children,
}: {
  type: 'file' | 'directory';
  extra?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const permissions = type === 'file' ? `-rw-r--r--` : `drwxr-xr-x`;

  return (
    <>
      <dt>
        <span className="text-gray-600 dark:text-gray-500">{permissions}</span>{' '}
        <span
          className={cn(
            type === 'file'
              ? 'text-green-600 dark:text-green-500'
              : 'text-blue-600 dark:text-blue-500',
            type === 'file' ? 'underline underline-offset-2' : ''
          )}
        >
          {children}
        </span>
      </dt>
      <dd className="text-gray-600 dark:text-gray-500">{extra}</dd>
    </>
  );
};
