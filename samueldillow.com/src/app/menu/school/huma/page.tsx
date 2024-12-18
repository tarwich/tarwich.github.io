import Link from 'next/link';
import {
  DirectoryListing,
  DirectoryListingItem,
} from '../../_components/tui/directory-listing';
import { TuiBox } from '../../_components/tui/tui-box';

export default function Huma() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <TuiBox className="bg-white w-[50vw] h-[50vh]">
        <DirectoryListing directory="/school/huma">
          <DirectoryListingItem type="directory">
            <Link href="./">..</Link>
          </DirectoryListingItem>

          <DirectoryListingItem type="file" extra="Chapter 3 notes">
            <Link href="/school/huma/ch3">ch3</Link>
          </DirectoryListingItem>

          <DirectoryListingItem type="file" extra="Chapter 3 notes (India)">
            <Link href="/school/huma/ch3.india">ch3.india</Link>
          </DirectoryListingItem>

          <DirectoryListingItem type="file" extra="Chapter 4 notes (Rome)">
            <Link href="/school/huma/ch4">ch4</Link>
          </DirectoryListingItem>
        </DirectoryListing>
      </TuiBox>
    </main>
  );
}
