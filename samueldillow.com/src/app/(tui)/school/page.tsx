import Link from 'next/link';
import {
  DirectoryListing,
  DirectoryListingItem,
} from '../_components/tui/directory-listing';
import { TuiBox } from '../_components/tui/tui-box';

export default function School() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <TuiBox className="bg-white">
        <DirectoryListing directory="/school">
          <DirectoryListingItem type="directory">
            <Link href="/">..</Link>
          </DirectoryListingItem>

          <DirectoryListingItem type="directory" extra="Government 2305">
            <Link href="school/govt">govt</Link>
          </DirectoryListingItem>
        </DirectoryListing>
      </TuiBox>
    </main>
  );
}
