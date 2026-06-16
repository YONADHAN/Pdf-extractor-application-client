import PdfCard from './PdfCard';

import type {
  ListPdfItem,
} from '../types/list_pdf_types';

interface PdfGridProps {
  pdfs: ListPdfItem[];

  onView: (
    pdf: ListPdfItem,
  ) => void;

  onDelete: (
    pdf: ListPdfItem,
  ) => void;

  onDownload: (
    pdf: ListPdfItem,
  ) => void;
}

const PdfGrid = ({
  pdfs,
  onView,
  onDelete,
  onDownload,
}: PdfGridProps) => {
  if (pdfs.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
        No PDFs found
      </div>
    );
  }


  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {pdfs.map((pdf) => (
        <PdfCard
          key={pdf.id}
          pdf={pdf}
          onView={onView}
          onDelete={onDelete}
 onDownload={
  onDownload
}
        />
      ))}
    </div>
  );
};

export default PdfGrid;