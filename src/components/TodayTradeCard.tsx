import React, { useEffect, useState } from 'react'
import { LocationButton } from './LocationButton'
import { GetHouseData } from '../api'
import {
    BusanLocationToNumber, calculatePrice, calculateSize, ChungbukLocationToNumber, ChungnamLocationToNumber,
    DaeguLocationToNumber, DaejeonLocationToNumber, GangwonLocationToNumber,
    GwangjuLocationToNumber, GyeongbukLocationToNumber, GyeonggiLocationToNumber,
    GyeongnamLocationToNumber, IncheonLocationToNumber, JejuLocationToNumber,
    JeonbukLocationToNumber, JeonnamLocationToNumber, SejongLocationToNumber,
    SeoulLocationToNumber, UlsanLocationToNumber
} from '../types/types';

interface HouseData {
    deposit: string;
    buildYear: number;
    dealYear: number;
    jibun: string;
    dealMonth: string;
    dealDay: string;
    offiNm: string;
    excluUseAr: number;
    floor: string;
    umdNm: string;
    monthlyRent: string;
    preMonthlyRent: string;
    preDeposit: string;
    contractTerm: string;
}

export const TodayTradeCard = () => {
    const [houseData, setHouseData] = useState<HouseData[]>([]);
    const [currCityNumber, setCurrCityNumber] = useState("11680");
    const [isLoading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
    const [selectedRegion, setSelectedRegion] = useState("서울");

    const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);

    useEffect(() => {
        const formattedMonth = String(selectedMonth).padStart(2, '0');
        const formattedDate = `${selectedYear}${formattedMonth}`;

        setLoading(true);
        GetHouseData(currCityNumber, formattedDate).then((response) => {
            setHouseData(response);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, [currCityNumber, selectedYear, selectedMonth]);

    const getLocationList = (region: string) => {
        switch (region) {
            case "서울": return SeoulLocationToNumber;
            case "경기": return GyeonggiLocationToNumber;
            case "부산": return BusanLocationToNumber;
            case "대구": return DaeguLocationToNumber;
            case "인천": return IncheonLocationToNumber;
            case "광주": return GwangjuLocationToNumber;
            case "대전": return DaejeonLocationToNumber;
            case "울산": return UlsanLocationToNumber;
            case "강원": return GangwonLocationToNumber;
            case "세종": return SejongLocationToNumber;
            case "충북": return ChungbukLocationToNumber;
            case "충남": return ChungnamLocationToNumber;
            case "전북": return JeonbukLocationToNumber;
            case "전남": return JeonnamLocationToNumber;
            case "경북": return GyeongbukLocationToNumber;
            case "경남": return GyeongnamLocationToNumber;
            case "제주": return JejuLocationToNumber;
            default: return SeoulLocationToNumber;
        }
    };

    const locationList = getLocationList(selectedRegion);

    const filteredHouseData = Array.isArray(houseData) ? houseData.filter(item =>
        `${item.umdNm} ${item.jibun} ${item.offiNm}오피스텔 ${item.floor}층`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    ) : [];

    const renderRegionButtons = () => {
        const regions = ["서울", "경기", "부산", "대구", "인천", "광주", "대전", "울산", "강원", "세종", "충북", "충남", "전북", "전남", "경북", "경남", "제주"];

        return regions.map(region => (
            <button
                key={region}
                className={`
                    px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105
                    sm:text-sm sm:px-3 sm:py-1.5
                    ${selectedRegion === region 
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
                    }
                `}
                onClick={() => setSelectedRegion(region)}
            >
                {region}
            </button>
        ));
    };

    return (
        <div className='flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pb-20'>
            {/* Header Section */}
            <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-8 shadow-xl'>
                <div className='container mx-auto px-4 text-center'>
                    <h1 className='text-4xl font-bold mb-2 sm:text-2xl'>
                        {selectedYear}년 {selectedMonth}월 실거래 정보
                    </h1>
                    <p className='text-blue-100 text-lg sm:text-sm'>전국 오피스텔 실거래가를 확인하세요</p>
                </div>
            </div>

            {/* Date Selection */}
            <div className='container mx-auto px-4 mt-8'>
                <div className='bg-white rounded-2xl shadow-lg p-6 mb-6'>
                    <div className='flex justify-center items-center gap-4 flex-wrap'>
                        <div className='flex items-center gap-2'>
                            <label className='text-gray-700 font-semibold sm:text-sm'>연도:</label>
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                                className='px-4 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all bg-white text-gray-800 font-medium sm:text-sm'
                            >
                                {years.map((year) => (
                                    <option key={year} value={year}>{year}년</option>
                                ))}
                            </select>
                        </div>
                        <div className='flex items-center gap-2'>
                            <label className='text-gray-700 font-semibold sm:text-sm'>월:</label>
                            <select
                                value={selectedMonth}
                                onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                                className='px-4 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all bg-white text-gray-800 font-medium sm:text-sm'
                            >
                                {months.map((month) => (
                                    <option key={month} value={month}>{month}월</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Region Buttons */}
                <div className='bg-white rounded-2xl shadow-lg p-6 mb-6'>
                    <h2 className='text-xl font-bold text-gray-800 mb-4 text-center sm:text-lg'>지역 선택</h2>
                    <div className='flex justify-center flex-wrap gap-2 overflow-x-auto pb-2'>
                        {renderRegionButtons()}
                    </div>
                </div>

                {/* Location Buttons */}
                <div className='bg-white rounded-2xl shadow-lg p-6 mb-6'>
                    <h2 className='text-xl font-bold text-gray-800 mb-4 text-center sm:text-lg'>상세 지역</h2>
                    <div className='flex flex-row flex-wrap justify-center'>
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

                {/* Search Input */}
                <div className='bg-white rounded-2xl shadow-lg p-6 mb-6'>
                    <div className='relative'>
                        <input
                            type="text"
                            placeholder="주소, 지번, 오피스텔명으로 검색..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='w-full px-6 py-4 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-gray-800 placeholder-gray-400 sm:text-sm'
                        />
                        <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Results */}
                {isLoading ? (
                    <div className='flex justify-center items-center py-20'>
                        <div className='text-center'>
                            <div className='inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600 mb-4'></div>
                            <p className='text-gray-600 text-xl font-semibold'>데이터를 불러오는 중...</p>
                        </div>
                    </div>
                ) : filteredHouseData.length > 0 ? (
                    <div className='grid grid-cols-1 gap-6'>
                        {filteredHouseData.map((item, index) => (
                            <div 
                                key={index} 
                                className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100'
                            >
                                <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-4'>
                                    <h3 className='text-white font-bold text-xl sm:text-lg flex items-center gap-2'>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        {item.umdNm} {item.jibun} <span className='text-yellow-300'>{item.offiNm}오피스텔</span> {item.floor}층
                                    </h3>
                                </div>
                                <div className='p-6 grid grid-cols-2 gap-4 sm:grid-cols-1 sm:gap-3'>
                                    <div className='flex items-center gap-3 p-3 bg-blue-50 rounded-lg'>
                                        <div className='bg-blue-500 rounded-full p-2'>
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-sm'>평수</p>
                                            <p className='text-gray-800 font-bold text-lg'>{calculateSize(item.excluUseAr)}평</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 p-3 bg-purple-50 rounded-lg'>
                                        <div className='bg-purple-500 rounded-full p-2'>
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-sm'>보증금</p>
                                            <p className='text-gray-800 font-bold text-lg'>{calculatePrice(item.deposit)}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 p-3 bg-pink-50 rounded-lg'>
                                        <div className='bg-pink-500 rounded-full p-2'>
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-sm'>월세</p>
                                            <p className='text-gray-800 font-bold text-lg'>{item.monthlyRent ? `${item.monthlyRent}만원` : "전세"}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 p-3 bg-green-50 rounded-lg'>
                                        <div className='bg-green-500 rounded-full p-2'>
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-sm'>거래일</p>
                                            <p className='text-gray-800 font-bold text-lg'>{item.dealYear}.{item.dealMonth}.{item.dealDay}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-6 pb-6 space-y-2'>
                                    <div className='flex justify-between items-center py-2 border-t border-gray-200'>
                                        <span className='text-gray-600 text-sm'>이전 보증금:</span>
                                        <span className='text-gray-800 font-semibold'>{item.preDeposit ? calculatePrice(item.preDeposit) : "자료없음"}</span>
                                    </div>
                                    <div className='flex justify-between items-center py-2 border-t border-gray-200'>
                                        <span className='text-gray-600 text-sm'>이전 월세:</span>
                                        <span className='text-gray-800 font-semibold'>
                                            {item.preDeposit
                                                ? (item.preMonthlyRent ? `${item.preMonthlyRent}만원` : "전세")
                                                : "자료없음"}
                                        </span>
                                    </div>
                                    <div className='flex justify-between items-center py-2 border-t border-gray-200'>
                                        <span className='text-gray-600 text-sm'>거래기간:</span>
                                        <span className='text-gray-800 font-semibold'>{item.contractTerm}</span>
                                    </div>
                                    <div className='flex justify-between items-center py-2 border-t border-gray-200'>
                                        <span className='text-gray-600 text-sm'>건축년도:</span>
                                        <span className='text-gray-800 font-semibold'>{item.buildYear}년</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='bg-white rounded-2xl shadow-lg p-12 text-center'>
                        <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className='text-gray-600 text-xl font-semibold'>데이터가 없습니다</p>
                        <p className='text-gray-400 mt-2'>다른 조건으로 검색해보세요</p>
                    </div>
                )}
            </div>
        </div>
    );
}
