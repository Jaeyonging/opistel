import { useEffect } from "react";
import { useQuery } from 'react-query';
import { useDataStore } from "../store/data";
import { GetRowHouseData, GetApartmentData, GetOpistelData, GetSingleHouseData } from ".";
import Loading from "../lotties/Loading";

const DEFAULT_PAGE_SIZE = 20;

const normalizeItems = (items: any) => {
    if (!items) return [];
    return Array.isArray(items) ? items : [items];
};

const buildPayload = (data: any) => {
    const items = normalizeItems(data?.items?.item);
    const totalCountRaw = Number(data?.totalCount);
    const numOfRowsRaw = Number(data?.numOfRows);

    return {
        items,
        totalCount: Number.isFinite(totalCountRaw) ? totalCountRaw : items.length,
        numOfRows: Number.isFinite(numOfRowsRaw) && numOfRowsRaw > 0 ? numOfRowsRaw : DEFAULT_PAGE_SIZE,
    };
};

const fetchAllPages = async (fetchPage: (page: number) => Promise<any>) => {
    const firstPageData = await fetchPage(1);
    const aggregated = buildPayload(firstPageData);
    const totalPages = Math.max(1, Math.ceil(aggregated.totalCount / aggregated.numOfRows));

    if (totalPages === 1) {
        aggregated.totalCount = aggregated.items.length;
        return aggregated;
    }

    const remainingResponses = await Promise.all(
        Array.from({ length: totalPages - 1 }, (_, idx) => fetchPage(idx + 2))
    );

    remainingResponses.forEach((pageData) => {
        const pagePayload = buildPayload(pageData);
        aggregated.items.push(...pagePayload.items);
    });

    aggregated.totalCount = aggregated.items.length;
    return aggregated;
};

const FetchOpistelData = ({ children, code, date }: { children: React.ReactNode, code: string, date: string }) => {
    const { data, isLoading, isFetching, isError, error } = useQuery(
        ["GetOpistelData", code, date],
        () => fetchAllPages((page) => GetOpistelData(page, code, date)),
        { keepPreviousData: true }
    );
    const { setData, resetData } = useDataStore();

    useEffect(() => {
        if (data) {
            setData(data);
        }
        return () => {
            resetData();
        };
    }, [data, setData, resetData]);

    if (isLoading || isFetching) return <Loading />;
    if (isError) throw error;

    return <>{data && <>{children}</>}</>;
}

const FetchApartmentData = ({ children, code, date }: { children: React.ReactNode, code: string, date: string }) => {
    const { data, isLoading, isFetching, isError, error } = useQuery(
        ["GetApartmentData", code, date],
        () => fetchAllPages((page) => GetApartmentData(page, code, date)),
        { keepPreviousData: true }
    );
    const { setData, resetData } = useDataStore();

    useEffect(() => {
        if (data) {
            setData(data);
        }
        return () => {
            resetData();
        };
    }, [data, setData, resetData]);

    if (isLoading || isFetching) return <Loading />;
    if (isError) throw error;

    return <>{data && <>{children}</>}</>;
}

const FetchRowHouseData = ({ children, code, date }: { children: React.ReactNode, code: string, date: string }) => {
    const { data, isLoading, isFetching, isError, error } = useQuery(
        ["GetRowHouseData", code, date],
        () => fetchAllPages((page) => GetRowHouseData(page, code, date)),
        { keepPreviousData: true }
    );
    const { setData, resetData } = useDataStore();

    useEffect(() => {
        if (data) {
            setData(data);
        }
        return () => {
            resetData();
        };
    }, [data, setData, resetData]);

    if (isLoading || isFetching) return <Loading />;
    if (isError) throw error;

    return <>{data && <>{children}</>}</>;
}


const FetchSingleHouseData = ({ children, code, date }: { children: React.ReactNode, code: string, date: string }) => {
    const { data, isLoading, isFetching, isError, error } = useQuery(
        ["GetSingleHouseData", code, date],
        () => fetchAllPages((page) => GetSingleHouseData(page, code, date)),
        { keepPreviousData: true }
    );
    const { setData, resetData } = useDataStore();

    useEffect(() => {
        if (data) {
            setData(data);
        }
        return () => {
            resetData();
        };
    }, [data, setData, resetData]);

    if (isLoading || isFetching) return <Loading />;
    if (isError) throw error;

    return <>{data && <>{children}</>}</>;
}



export { FetchOpistelData, FetchApartmentData, FetchRowHouseData, FetchSingleHouseData };
