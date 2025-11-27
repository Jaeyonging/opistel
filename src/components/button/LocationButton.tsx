import React from 'react'

interface Props {
    title: string
    setCurrCityNumber: (value: string) => void
    cityNumber: string
    currentNumber: string
}

export const LocationButton = ({ title, setCurrCityNumber, cityNumber, currentNumber }: Props) => {
    const isActive = cityNumber === currentNumber
    return (
        <button
            className={`
                px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2 md:text-base rounded-md sm:rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md active:scale-95
                ${isActive 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105' 
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-purple-100 hover:to-pink-100 hover:text-purple-700'
                }
            `}
            onClick={() => setCurrCityNumber(cityNumber)}
        >
            {title}
        </button>
    )
}
