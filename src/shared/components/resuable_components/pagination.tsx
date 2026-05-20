interface PaginationProps {
  currentPage: number;

  totalPages: number;

  onPageChange: (
    page: number,
  ) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      {/* PREVIOUS */}
      <button
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(
            currentPage - 1,
          )
        }
        className="rounded-lg bg-white px-5 py-2 shadow-sm transition disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      {/* PAGE INFO */}
      <span className="font-medium">
        Page {currentPage} of{' '}
        {totalPages}
      </span>

      {/* NEXT */}
      <button
        disabled={
          currentPage ===
          totalPages
        }
        onClick={() =>
          onPageChange(
            currentPage + 1,
          )
        }
        className="rounded-lg bg-white px-5 py-2 shadow-sm transition disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;