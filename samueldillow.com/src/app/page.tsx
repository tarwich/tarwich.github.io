import { cn } from '@/lib/utils';
import BootSequence from './_components/boot-sequence';
import {
  DirectoryListing,
  DirectoryListingItem,
} from './_components/tui/directory-listing';
import { TuiBox } from './_components/tui/tui-box';

export default function Home() {
  return (
    <div
      className={cn(
        'grid grid-rows-[20px_1fr_20px] items-center justify-items-center',
        'min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]',
        'bg-amber-100 dark:bg-black'
      )}
    >
      <BootSequence className="absolute inset-0 opacity-50 pointer-events-none" />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <TuiBox className="bg-white">
          <DirectoryListing directory="/">
            <DirectoryListingItem type="file" name="resume" extra="My resume" />
          </DirectoryListing>
        </TuiBox>
      </main>
    </div>
  );
}
