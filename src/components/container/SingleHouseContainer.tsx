import React, { useEffect, useRef, useState } from 'react'
import ApiErrorBoundary from '../../boundary/ApiErrorBoundary'
import { FetchSingleHouseData } from '../../api/Hooks'
import SingleHouseCard from '../card/SingleHouseCard';
import { useDataStore } from '../../store/data';
import Pagination from '../common/Pagination';

interface Props {
    currCityNumber: string;
    selectedYear: number;
    selectedMonth: number;
}

const SingleHouseContainer = ({ currCityNumber, selectedYear, selectedMonth }: Props) => {
    const { newdata, totalCount, numOfRows } = useDataStore();
    const [page, setPage] = useState(1);
    const listRef = useRef<HTMLDivElement | null>(null);
    const formattedDate = `${selectedYear}${selectedMonth.toString().padStart(2, '0')}`;
    const safePageSize = Math.max(1, numOfRows);
    const totalPages = totalCount > 0 ? Math.ceil(totalCount / safePageSize) : 1;

    useEffect(() => {
        setPage(1);
    }, [currCityNumber, selectedYear, selectedMonth]);

    const handlePageChange = (nextPage: number) => {
        setPage(nextPage);
        listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
            <ApiErrorBoundary>
                <FetchSingleHouseData page={page} code={currCityNumber} date={formattedDate}>
                    <div ref={listRef} className='flex flex-col gap-2'>
                        {newdata && newdata.map((item: any, index: number) => (
                            <SingleHouseCard key={index} data={item} />
                        ))}
                    </div>
                    <Pagination page={page} setPage={handlePageChange} totalPages={totalPages} />
                </FetchSingleHouseData>
            </ApiErrorBoundary>
        </>
    )
}

export default SingleHouseContainer
