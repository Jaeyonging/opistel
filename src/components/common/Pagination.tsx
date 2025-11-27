import React from 'react'

interface Props {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

const Pagination = ({ page, setPage, totalPages }: Props) => {
  const safeTotalPages = Math.max(1, totalPages);
  const canGoPrev = page > 1;
  const canGoNext = page < safeTotalPages;

  const buttonStyles =
    'px-4 py-2 rounded-lg border font-semibold transition-colors duration-150';

  const handleClick = () => {
    if (canGoNext) {
      setPage(page + 1);
    }
  };

  const handleClickPrev = () => {
    if (canGoPrev) {
      setPage(page - 1);
    }
  };

  return (
    <div className='flex items-center justify-center gap-4 mt-6'>
      <button
        type='button'
        onClick={handleClickPrev}
        disabled={!canGoPrev}
        className={`${buttonStyles} ${canGoPrev
          ? 'border-blue-500 text-blue-600 hover:bg-blue-50'
          : 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50'
          }`}
      >
        이전
      </button>
      <span className='text-sm text-gray-600 font-medium'>
        {page} / {safeTotalPages}
      </span>
      <button
        type='button'
        onClick={handleClick}
        disabled={!canGoNext}
        className={`${buttonStyles} ${canGoNext
          ? 'border-blue-500 text-blue-600 hover:bg-blue-50'
          : 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50'
          }`}
      >
        다음
      </button>
    </div>
  )
}

export default Pagination
