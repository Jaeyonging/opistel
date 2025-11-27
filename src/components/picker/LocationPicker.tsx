import React from 'react'
import { getLocationList } from '../../types/types';
import { LocationButton } from '../button/LocationButton';

interface Props {
    selectedRegion: string;
    setCurrCityNumber: (cityNumber: string) => void;
    currCityNumber: string;
}

const LocationPicker = ({ selectedRegion, setCurrCityNumber, currCityNumber }: Props) => {
    const locationList = getLocationList(selectedRegion);
    return (
        <div className='bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6'>
            <h2 className='text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 text-center'>상세 지역</h2>
            <div className='flex flex-row flex-wrap justify-center gap-1 sm:gap-2'>
                {locationList.map(([title, cityNumber], index) => (
                    <LocationButton
                        key={`${cityNumber}-${index}`}
                        title={title}
                        setCurrCityNumber={setCurrCityNumber}
                        cityNumber={cityNumber}
                        currentNumber={currCityNumber}
                    />
                ))}
            </div>
        </div>
    )
}

export default LocationPicker
