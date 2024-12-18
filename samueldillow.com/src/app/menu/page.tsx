'use client';

import Link from 'next/link';
import {
  DirectoryListing,
  DirectoryListingItem,
} from './_components/tui/directory-listing';
import { TuiBox } from './_components/tui/tui-box';

export default function Menu() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <TuiBox className="bg-white w-[50vw] h-[50vh]">
        <DirectoryListing directory="/">
          <DirectoryListingItem type="file" extra="My resume">
            <Link href="/resume">resume</Link>
          </DirectoryListingItem>
          <DirectoryListingItem type="directory" extra="Old school work">
            <Link href="menu/school">school</Link>
          </DirectoryListingItem>
        </DirectoryListing>
      </TuiBox>
    </main>
  );
}
