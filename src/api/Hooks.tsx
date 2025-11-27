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

const FetchOpistelData = ({ children, page, code, date }: { children: React.ReactNode, page: number, code: string, date: string }) => {
    const { data, isLoading, isError, error } = useQuery(
        ["GetOpistelData", page, code, date],
        () => GetOpistelData(page, code, date),
        { keepPreviousData: true }
    );
    const { setData, resetData } = useDataStore();

    useEffect(() => {
        if (data) {
            setData(buildPayload(data));
        }
        return () => {
            resetData();
        };
    }, [data, setData, resetData]);

    if (isLoading) return <Loading />;
    if (isError) throw error;

    return <>{data && <>{children}</>}</>;
}

const FetchApartmentData = ({ children, page, code, date }: { children: React.ReactNode, page: number, code: string, date: string }) => {
    const { data, isLoading, isError, error } = useQuery(
        ["GetApartmentData", page, code, date],
        () => GetApartmentData(page, code, date),
        { keepPreviousData: true }
    );
    const { setData, resetData } = useDataStore();

    useEffect(() => {
        if (data) {
            setData(buildPayload(data));
        }
        return () => {
            resetData();
        };
    }, [data, setData, resetData]);

    if (isLoading) return <Loading />;
    if (isError) throw error;

    return <>{data && <>{children}</>}</>;
}

const FetchRowHouseData = ({ children, page, code, date }: { children: React.ReactNode, page: number, code: string, date: string }) => {
    const { data, isLoading, isError, error } = useQuery(
        ["GetRowHouseData", page, code, date],
        () => GetRowHouseData(page, code, date),
        { keepPreviousData: true }
    );
    const { setData, resetData } = useDataStore();

    useEffect(() => {
        if (data) {
            setData(buildPayload(data));
        }
        return () => {
            resetData();
        };
    }, [data, setData, resetData]);

    if (isLoading) return <Loading />;
    if (isError) throw error;

    return <>{data && <>{children}</>}</>;
}


const FetchSingleHouseData = ({ children, page, code, date }: { children: React.ReactNode, page: number, code: string, date: string }) => {
    const { data, isLoading, isError, error } = useQuery(
        ["GetSingleHouseData", page, code, date],
        () => GetSingleHouseData(page, code, date),
        { keepPreviousData: true }
    );
    const { setData, resetData } = useDataStore();

    useEffect(() => {
        if (data) {
            setData(buildPayload(data));
        }
        return () => {
            resetData();
        };
    }, [data, setData, resetData]);

    if (isLoading) return <Loading />;
    if (isError) throw error;

    return <>{data && <>{children}</>}</>;
}



export { FetchOpistelData, FetchApartmentData, FetchRowHouseData, FetchSingleHouseData };
