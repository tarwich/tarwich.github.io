import Link from 'next/link';
import {
  DirectoryListing,
  DirectoryListingItem,
} from '../../_components/tui/directory-listing';
import { TuiBox } from '../../_components/tui/tui-box';

export default function School() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <TuiBox className="bg-white">
        <DirectoryListing directory="/school">
          <DirectoryListingItem type="directory">
            <Link href="/school">..</Link>
          </DirectoryListingItem>

          <DirectoryListingItem type="file">
            <Link href="/school/govt/essay">essay</Link>
          </DirectoryListingItem>

          <DirectoryListingItem type="file" extra="Classroom notes">
            <Link href="/school/govt/notes">notes</Link>
          </DirectoryListingItem>
        </DirectoryListing>
      </TuiBox>
    </main>
  );
}
