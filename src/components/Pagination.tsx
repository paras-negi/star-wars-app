import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="flex justify-center mt-8 space-x-2">
      {/* Previous Button */}
      {currentPage > 1 && (
        <Link
          href={`/?page=${currentPage - 1}`}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Previous
        </Link>
      )}

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`/?page=${page}`}
          className={`px-4 py-2 ${
            page === currentPage
              ? 'bg-green-700 text-white'
              : 'bg-green-500 text-white hover:bg-green-600'
          } rounded`}
        >
          {page}
        </Link>
      ))}

      {/* Next Button */}
      {currentPage < totalPages && (
        <Link
          href={`/?page=${currentPage + 1}`}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;