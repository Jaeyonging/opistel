import React from "react";
import { calculatePrice, calculateSize } from "../../types/types";

interface Props {
    data: any;
}

const RowHouseCard = ({ data }: Props) => {
    const {
        mhouseNm,
        umdNm,
        excluUseAr,
        floor,
        deposit,
        monthlyRent,
        buildYear,
        dealYear,
        dealMonth,
        dealDay,
        contractType,
        contractTerm,
        houseType
    } = data;

    const isJeonse = monthlyRent === 0;

    return (
        <div className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all">

            {/* 이름 */}
            <div className="text-lg font-bold text-gray-900 mb-1">
                {mhouseNm || "연립/다세대"}
            </div>

            {/* 위치 + 층 + 면적 */}
            <div className="text-sm text-gray-500 mb-3">
                {umdNm} · {floor}층 · {calculateSize(excluUseAr)}평
            </div>

            {/* 보증금/월세 */}
            <div className="flex items-baseline gap-2 mb-3">
                {isJeonse ? (
                    <span className="text-blue-600 font-bold text-xl">
                        전세 {calculatePrice(deposit)}
                    </span>
                ) : (
                    <>
                        <span className="text-blue-600 font-bold text-xl">
                            보증금 {calculatePrice(deposit)}
                        </span>
                        <span className="text-gray-700 font-semibold text-xl">
                            / 월세 {calculatePrice(monthlyRent)}
                        </span>
                    </>
                )}
            </div>

            {/* 뱃지 */}
            <div className="flex items-center gap-2 mb-3">
                <span
                    className={`px-2 py-1 text-xs rounded-md font-semibold
            ${contractType === "신규" ? "bg-purple-100 text-purple-700" : "bg-green-100 text-green-700"}
          `}
                >
                    {contractType || "계약"}
                </span>

                {contractTerm && contractTerm.trim() !== "" && (
                    <span className="text-xs text-gray-500">{contractTerm}</span>
                )}

                <span className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-600">
                    {houseType}
                </span>
            </div>

            {/* 하단 정보 */}
            <div className="flex justify-between text-sm text-gray-500">
                <span>계약일 · {dealYear}-{dealMonth}-{dealDay}</span>
                <span>준공 {buildYear}년</span>
            </div>
        </div>
    );
};

export default RowHouseCard;
