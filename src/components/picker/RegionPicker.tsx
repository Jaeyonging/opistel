import React from 'react'

interface Props {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}

const RegionPicker = ({ selectedRegion, setSelectedRegion }: Props) => {
  const regions = [
    "서울", "경기", "부산", "대구", "인천", "광주", "대전", "울산",
    "강원", "세종", "충북", "충남", "전북", "전남", "경북", "경남", "제주"
  ];

  return (
    <div className='bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6'>
      <h2 className='text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 text-center'>
        지역 선택
      </h2>

      <div className='flex justify-center flex-wrap gap-2 sm:gap-2 overflow-x-auto pb-2'>
        {regions.map(region => (
          <button
            key={region}
            className={`
              px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm md:text-base rounded-lg font-medium 
              transition-all duration-300 transform hover:scale-105 active:scale-95
              ${selectedRegion === region
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
              }
            `}
            onClick={() => setSelectedRegion(region)}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RegionPicker;
