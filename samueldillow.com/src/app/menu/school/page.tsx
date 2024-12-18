import Link from 'next/link';
import {
  DirectoryListing,
  DirectoryListingItem,
} from '../_components/tui/directory-listing';
import { TuiBox } from '../_components/tui/tui-box';

export default function School() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <TuiBox className="bg-white w-[50vw] h-[50vh]">
        <DirectoryListing directory="/school">
          <DirectoryListingItem type="directory">
            <Link href="./">..</Link>
          </DirectoryListingItem>

          <DirectoryListingItem type="directory" extra="Government 2305">
            <Link href="school/govt">govt</Link>
          </DirectoryListingItem>

          <DirectoryListingItem type="directory" extra="History 2305">
            <Link href="school/hist">hist</Link>
          </DirectoryListingItem>

          <DirectoryListingItem type="directory" extra="Humanities 2305">
            <Link href="school/huma">huma</Link>
          </DirectoryListingItem>

          <DirectoryListingItem
            type="directory"
            extra="Music Appreciation 2305"
          >
            <Link href="school/musi">musi</Link>
          </DirectoryListingItem>
        </DirectoryListing>
      </TuiBox>
    </main>
  );
}
