import React from 'react'

interface Props {
    title: string
    setCurrCityNumber: (value: string) => void
    cityNumber: string
    currentNumber: string
}

export const LocationButton = ({ title, setCurrCityNumber, cityNumber, currentNumber }: Props) => {
    return (
        <button
            className={`bg-[#c46767a1] p-2 rounded-[10px] m-[10px] sm:text-[15px] sm:m-[5px] hover:bg-[#b80c0cbc] ${cityNumber == currentNumber && "bg-[yellow]"}`}
            onClick={() => setCurrCityNumber(cityNumber)}
        >
            {title}
        </button>
    )
}
