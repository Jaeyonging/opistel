import React, { useEffect, useMemo, useRef, useState } from 'react'
import ApiErrorBoundary from '../../boundary/ApiErrorBoundary'
import { FetchRowHouseData } from '../../api/Hooks'
import RowHouseCard from '../card/RowHouseCard';
import { useDataStore } from '../../store/data';
import Pagination from '../common/Pagination';
import { filterBySearchQuery } from '../../utils/search';

interface Props {
    currCityNumber: string;
    selectedYear: number;
    selectedMonth: number;
    searchQuery: string;
}

const RowHouseContainer = ({ currCityNumber, selectedYear, selectedMonth, searchQuery }: Props) => {
    const { newdata, numOfRows } = useDataStore();
    const [page, setPage] = useState(1);
    const listRef = useRef<HTMLDivElement | null>(null);
    const formattedDate = `${selectedYear}${selectedMonth.toString().padStart(2, '0')}`;
    const pageSize = Math.max(1, numOfRows);

    const filteredData = useMemo(
        () => filterBySearchQuery(newdata, searchQuery),
        [newdata, searchQuery]
    );

    const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
    const currentPage = Math.min(page, totalPages);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    useEffect(() => {
        setPage(1);
    }, [currCityNumber, selectedYear, selectedMonth, searchQuery]);

    useEffect(() => {
        setPage((prev) => Math.min(prev, totalPages));
    }, [totalPages]);

    const handlePageChange = (nextPage: number) => {
        const clampedPage = Math.min(Math.max(nextPage, 1), totalPages);
        if (clampedPage === page) return;
        setPage(clampedPage);
        listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
            <ApiErrorBoundary>
                <FetchRowHouseData code={currCityNumber} date={formattedDate}>
                    <div ref={listRef} className='flex flex-col gap-2'>
                        {paginatedData.map((item: any, index: number) => (
                            <RowHouseCard key={`${item?.rletNo || item?.mhouseNm || index}-${index}`} data={item} />
                        ))}
                    </div>
                    <Pagination page={currentPage} setPage={handlePageChange} totalPages={totalPages} />
                </FetchRowHouseData>
            </ApiErrorBoundary>
        </>
    )
}

export default RowHouseContainer
