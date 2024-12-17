'use client';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import {
  DirectoryListing,
  DirectoryListingItem,
} from './_components/tui/directory-listing';
import { TuiBox } from './_components/tui/tui-box';

const TEMPORARILY_REDIRECT_TO_RESUME = true;

export default function Home() {
  if (TEMPORARILY_REDIRECT_TO_RESUME) {
    return redirect('/resume');
  }

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <TuiBox className="bg-white w-[50vw] h-[50vh]">
        <DirectoryListing directory="/">
          <DirectoryListingItem type="file" extra="My resume">
            <Link href="/resume">resume</Link>
          </DirectoryListingItem>
          <DirectoryListingItem type="directory" extra="Old school work">
            <Link href="/school">school</Link>
          </DirectoryListingItem>
        </DirectoryListing>
      </TuiBox>
    </main>
  );
}
