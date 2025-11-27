import React from "react";
import { calculatePrice, calculateSize } from "../../types/types";

interface Props {
    data: any;
}

const OpistelCard = ({ data }: Props) => {
    const {
        offiNm,
        sggNm,
        umdNm,
        excluUseAr,
        floor,
        dealYear,
        dealMonth,
        dealDay,
        deposit,
        monthlyRent,
        buildYear
    } = data;

    return (
        <div className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all">

            <div className="text-lg font-bold text-gray-800 mb-1">
                {offiNm}
            </div>

            <div className="text-sm text-gray-500 mb-3">
                {sggNm} {umdNm} · {floor}층 · {calculateSize(excluUseAr)}평
            </div>

            <div className="flex items-center gap-3 mb-3">
                <span className="text-blue-600 font-bold text-xl">
                    보증금 {calculatePrice(deposit)}
                </span>
                <span className="text-gray-700 font-semibold text-xl">
                    / 월세 {calculatePrice(monthlyRent)}
                </span>
            </div>

            <div className="flex justify-between text-sm text-gray-500">
                <span>계약일 · {dealYear}-{dealMonth}-{dealDay}</span>
                <span>준공 {buildYear}년</span>
            </div>
        </div>
    );
};

export default OpistelCard;
