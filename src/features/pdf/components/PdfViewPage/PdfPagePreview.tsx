import { Page } from 'react-pdf';

interface PdfPagePreviewProps {
  pageNumber: number;

  isSelected: boolean;

  selectionOrder: number | null;

  onSelect: (
    pageNumber: number,
  ) => void;
}

const PdfPagePreview = ({
  pageNumber,
  isSelected,
  selectionOrder,
  onSelect,
}: PdfPagePreviewProps) => {
  return (
    <div
      onClick={() =>
        onSelect(
          pageNumber,
        )
      }
      className={`cursor-pointer rounded-xl border-4 bg-white p-4 shadow transition ${isSelected
          ? 'border-blue-500'
          : 'border-transparent'
        }`}
    >

      {/* ORDER BADGE */}
      {isSelected && (
        <div className="mb-4 flex justify-end">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
            {selectionOrder}
          </div>
        </div>
      )}
      {/* PAGE */}
      <Page
        pageNumber={
          pageNumber
        }
        width={250}
      />

      {/* FOOTER */}
      <div className="mt-4 flex items-center justify-between">
        <p className="font-medium">
          Page {pageNumber}
        </p>

        {isSelected && (
          <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
            Selected
          </span>
        )}
      </div>
    </div>
  );
};

export default PdfPagePreview;