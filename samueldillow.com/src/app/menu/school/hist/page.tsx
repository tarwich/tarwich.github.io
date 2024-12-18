import Link from 'next/link';
import {
  DirectoryListing,
  DirectoryListingItem,
} from '../../_components/tui/directory-listing';
import { TuiBox } from '../../_components/tui/tui-box';

export default function Hist() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <TuiBox className="bg-white w-[50vw] h-[50vh]">
        <DirectoryListing directory="/school/hist">
          <DirectoryListingItem type="directory">
            <Link href="./">..</Link>
          </DirectoryListingItem>

          <DirectoryListingItem type="file">
            <Link href="/school/hist/test1">test1</Link>
          </DirectoryListingItem>
          <DirectoryListingItem type="file">
            <Link href="/school/hist/ch7">ch7</Link>
          </DirectoryListingItem>
        </DirectoryListing>
      </TuiBox>
    </main>
  );
}
