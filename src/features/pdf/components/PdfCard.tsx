import type {
  ListPdfItem,
} from '../types/list_pdf_types';

interface PdfCardProps {
  pdf: ListPdfItem;

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

const PdfCard = ({
  pdf,
  onView,
  onDelete,
  onDownload,
}: PdfCardProps) => {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="space-y-2">
        <h3 className="line-clamp-2 font-semibold">
          {
            pdf.original_file_name
          }
        </h3>

        <p className="text-sm text-gray-500">
          Pages:
          {' '}
          {pdf.total_pages}
        </p>

        <p className="text-sm text-gray-500">
          Type:
          {' '}
          {pdf.type}
        </p>
      </div>

      <div className="mt-5 flex gap-3">
        <button
          onClick={() =>
            onView(pdf)
          }
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          View
        </button>
<button
    onClick={() =>
      onDownload(pdf)
    }
    className="rounded-lg bg-blue-500 px-4 py-2 text-white"
  >
    Download
  </button>
        <button
          onClick={() =>
            onDelete(pdf)
          }
          className="rounded-lg bg-red-500 px-4 py-2 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PdfCard;