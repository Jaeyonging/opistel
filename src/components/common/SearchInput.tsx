import React from 'react'

interface Props {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const SearchInput = ({ searchQuery, setSearchQuery }: Props) => {
    return (
        <div className='bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6'>
            <div className='relative'>
                <input
                    type="text"
                    placeholder="주소, 지번, 오피스텔명으로 검색..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='w-full px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base border-2 border-purple-300 rounded-lg sm:rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-gray-800 placeholder-gray-400'
                />
                <svg className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>
    )
}

export default SearchInput
