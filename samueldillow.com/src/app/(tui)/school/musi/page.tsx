import Link from 'next/link';
import {
  DirectoryListing,
  DirectoryListingItem,
} from '../../_components/tui/directory-listing';
import { TuiBox } from '../../_components/tui/tui-box';

export default function Musi() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <TuiBox className="bg-white w-[50vw] h-[50vh]">
        <DirectoryListing directory="/school/musi">
          <DirectoryListingItem type="directory">
            <Link href="./">..</Link>
          </DirectoryListingItem>

          <DirectoryListingItem type="file">
            <Link href="/school/musi/overview">overview</Link>
          </DirectoryListingItem>
        </DirectoryListing>
      </TuiBox>
    </main>
  );
}
