import React, { useEffect, useState } from 'react'
import { LocationButton } from './LocationButton'
import { GetHouseData } from '../api'
import { calculatePrice, calculateSize, SeoulLocationToNumber } from '../types/types';

interface HouseData {
    deposit: string;
    buildYear: number;
    dealYear: number;
    jibun: string,
    dealMonth: string,
    dealDay: string,
    offiNm: string,
    excluUseAr: number,
    floor: string,
    umdNm: string,
    monthlyRent: string,
    preMonthlyRent: string,
    preDeposit: string,
    contractTerm: string
}

export const TodayTradeCard = () => {
    const [houseData, setHouseData] = useState<HouseData[]>([])
    const [currCityNumber, setCurrCityNumber] = useState("11680")
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        GetHouseData(currCityNumber, "202406").then((response) => {
            setHouseData(response)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
        })
    }, [currCityNumber])

    const today = new Date()

    return (
        <div className='flex flex-col bg-[#f9f9f9] text-[20px] text-center'>
            이번 {today.getMonth() + 1}월 달의 실거래
            <div className='flex flex-row flex-wrap'>
                {SeoulLocationToNumber.map(([title, cityNumber], index) => (
                    <LocationButton
                        key={`${cityNumber}-${index}`}
                        title={title}
                        setCurrCityNumber={setCurrCityNumber}
                        cityNumber={cityNumber}
                        currentNumber={currCityNumber}
                    />
                ))}
            </div>
            {isLoading ? <div>Loading...</div> :
                houseData.length > 0 ? (
                    <div className='flex flex-col text-start'>
                        {houseData.map((item, index) => (
                            <div key={index} className=' flex flex-col text-[black] rounded-[20px]  bg-[#c1c0c0] p-2 m-2 sm:text-[15px]'>
                                <p>주소: {item.umdNm} {item.jibun} <b className='sm:text-[red]'>{item.offiNm}오피스텔</b> {item.floor}층</p>
                                <p>평수: {calculateSize(item.excluUseAr)}평</p>
                                <p>보증금: {calculatePrice(item.deposit)}</p>
                                <p>월세: {item.monthlyRent ? item.monthlyRent + "만원" : "전세"}</p>
                                <p>이전 보증금: {item.preDeposit ? calculatePrice(item.preDeposit) : "자료없음"}</p>
                                <p>
                                    이전 월세:
                                    {item.preDeposit
                                        ? (item.preMonthlyRent
                                            ? item.preMonthlyRent + "만원"
                                            : "전세")
                                        : "자료없음"}
                                </p>
                                <p>거래기간: {item.contractTerm} </p>
                                <p>거래일: {item.dealYear}년 {item.dealMonth}월 {item.dealDay}일</p>
                                <p>건축년도: {item.buildYear}년</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No Data</div>
                )
            }
        </div>
    )
}
