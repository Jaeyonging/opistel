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
                className={`p-2 m-2 border ${selectedRegion === region ? "bg-blue-500 text-white" : ""}`}
                onClick={() => setSelectedRegion(region)}
            >
                {region}
            </button>
        ));
    };

    return (
        <div className='flex flex-col bg-[#f9f9f9] text-[20px] text-center'>
            {selectedYear}년도 {selectedMonth}월 달의 실거래
            <div className='flex justify-center my-4'>
                <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                    className='p-2 m-2 border rounded'
                >
                    {years.map((year) => (
                        <option key={year} value={year}>{year}년</option>
                    ))}
                </select>
                <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                    className='p-2 m-2 border rounded'
                >
                    {months.map((month) => (
                        <option key={month} value={month}>{month}월</option>
                    ))}
                </select>
            </div>
            <div className='flex justify-center my-4 overflow-auto'>
                {renderRegionButtons()}
            </div>
            <div className='flex flex-row flex-wrap'>
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
            <input
                type="text"
                placeholder="주소 검색"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='p-2 m-2 border rounded'
            />
            {isLoading ? (
                <div>Loading...</div>
            ) : filteredHouseData.length > 0 ? (
                <div className='flex flex-col text-start'>
                    {filteredHouseData.map((item, index) => (
                        <div key={index} className='flex flex-col text-[black] rounded-[20px] bg-[#c1c0c0] p-2 m-2 sm:text-[15px]'>
                            <p>주소: {item.umdNm} {item.jibun} <b className='text-[red]'>{item.offiNm}오피스텔</b> {item.floor}층</p>
                            <p>평수: {calculateSize(item.excluUseAr)}평</p>
                            <p>보증금: {calculatePrice(item.deposit)}</p>
                            <p>월세: {item.monthlyRent ? `${item.monthlyRent}만원` : "전세"}</p>
                            <p>이전 보증금: {item.preDeposit ? calculatePrice(item.preDeposit) : "자료없음"}</p>
                            <p>
                                이전 월세: {item.preDeposit
                                    ? (item.preMonthlyRent ? `${item.preMonthlyRent}만원` : "전세")
                                    : "자료없음"}
                            </p>
                            <p>거래기간: {item.contractTerm}</p>
                            <p>거래일: {item.dealYear}년 {item.dealMonth}월 {item.dealDay}일</p>
                            <p>건축년도: {item.buildYear}년</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No Data</div>
            )}
        </div>
    );
}
