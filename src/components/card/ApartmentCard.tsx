import React from 'react';
import { calculatePrice, calculateSize } from '../../types/types';

interface Props {
    data: any;
}

const ApartmentCard = ({ data }: Props) => {
    const {
        aptNm,
        umdNm,
        excluUseAr,
        floor,
        dealAmount,
        dealYear,
        dealMonth,
        dealDay,
        buildYear,
        dealingGbn,  
        estateAgentSggNm
    } = data;

    const clickAddress = (umdNm: string, aptNm: string) => {
        window.open(`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${umdNm} ${aptNm}&ackey=qcs716nm`, '_blank');
    }

    return (
        <div className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:scale-[1.01] transition-all duration-300 cursor-pointer" onClick={() => clickAddress(umdNm, aptNm)}>
            <div className="text-xl font-bold text-gray-800 mb-1">
                {aptNm}
            </div>

            <div className="text-sm text-gray-500 mb-3">
                {umdNm} · {floor}층 · {excluUseAr}㎡ ({calculateSize(excluUseAr)}평)
            </div>

            <div className="flex items-center gap-3 mb-3">
                <span className="text-blue-600 font-bold text-2xl">
                    {calculatePrice(dealAmount)}
                </span>
            </div>

            <div className="flex items-center gap-2 mb-3">
                <span
                    className={`px-2 py-1 text-xs rounded-md font-semibold 
            ${dealingGbn === "직거래"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-green-100 text-green-700"
                        }`}
                >
                    {dealingGbn}
                </span>

                {estateAgentSggNm && estateAgentSggNm.trim() !== "" && (
                    <span className="text-xs text-gray-500">
                        {estateAgentSggNm}
                    </span>
                )}
            </div>

            <div className="flex justify-between text-sm text-gray-500">
                <span>거래일 · {dealYear}-{dealMonth}-{dealDay}</span>
                <span>준공 {buildYear}년</span>
            </div>
        </div>
    );
};

export default ApartmentCard;
