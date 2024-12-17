import PrinterPaper from '@/components/printer-paper';
import { Fragment } from 'react';
import Background from './_components/background';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Background />
      <PrinterPaper className="prose">{children}</PrinterPaper>
    </Fragment>
  );
}
