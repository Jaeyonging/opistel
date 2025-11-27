import React from 'react'

interface Props {
    selectedType: string;
    setSelectedType: (type: string) => void;
}

const TypePicker = ({ selectedType, setSelectedType }: Props) => {
    const types = ["오피스텔", "아파트", "연립다세대", "단독다가구주택"];
    return (
        <div className='bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6'>
            <h2 className='text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 text-center'>
                타입 선택
            </h2>
            <div className='flex justify-center flex-wrap gap-2 sm:gap-2 overflow-x-auto pb-2'>
                {types.map((type) => (
                    <button
                        key={type}
                        className={`px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm md:text-base rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95
                            ${selectedType === type
                                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
                            }
                        `}
                        onClick={() => setSelectedType(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default TypePicker
