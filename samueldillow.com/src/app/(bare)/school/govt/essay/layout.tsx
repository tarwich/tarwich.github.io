import PrinterPaper from '@/components/printer-paper';
import { cn } from '@/lib/utils';
import pageCss from './page.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PrinterPaper className={cn(pageCss.page)}>{children}</PrinterPaper>;
}
