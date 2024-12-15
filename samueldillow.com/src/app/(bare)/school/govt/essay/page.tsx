import PrinterPaper from '@/components/printer-paper';
import { Fragment } from 'react';
import Background from '../../_components/background';

export default function Essay() {
  return (
    <Fragment>
      <Background />
      <PrinterPaper>
        <h1 className="text-4xl font-bold">Essay</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </PrinterPaper>
    </Fragment>
  );
}
