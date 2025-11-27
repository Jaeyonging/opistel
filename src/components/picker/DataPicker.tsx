import React from 'react'

interface Props {
    selectedYear: number;
    setSelectedYear: (year: number) => void;
    selectedMonth: number;
    setSelectedMonth: (month: number) => void;
    years: number[];
    months: number[];
}
const DataPicker = ({ selectedYear, setSelectedYear, selectedMonth, setSelectedMonth, years, months }: Props) => {
    return (
        <div className='container mx-auto px-3 sm:px-4 mt-4 sm:mt-6 md:mt-8'>
            <div className='bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6'>
                <div className='flex justify-center items-center gap-3 sm:gap-4 flex-wrap'>
                    <div className='flex items-center gap-2'>
                        <label className='text-gray-700 font-semibold text-sm sm:text-base'>연도:</label>
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                            className='px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all bg-white text-gray-800 font-medium'
                        >
                            {years.map((year) => (
                                <option key={year} value={year}>{year}년</option>
                            ))}
                        </select>
                    </div>

                    <div className='flex items-center gap-2'>
                        <label className='text-gray-700 font-semibold text-sm sm:text-base'>월:</label>
                        <select
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                            className='px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all bg-white text-gray-800 font-medium'
                        >
                            {months.map((month) => (
                                <option key={month} value={month}>{month}월</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataPicker
