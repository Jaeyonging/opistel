import axios from 'axios'
let service_Key = import.meta.env.VITE_SERVICE_KEY

const DEFAULT_PAGE_SIZE = 20;

async function requestWithMeta(url: string) {
    try {
        const response = await axios.get(url);
        return response.data.response.body;
    } catch (error) {
        throw error;
    }
}

//오피스텔
export async function GetOpistelData(page: number, code: string, date: string) {
    return requestWithMeta(`/api/1613000/RTMSDataSvcOffiRent/getRTMSDataSvcOffiRent?serviceKey=${service_Key}&LAWD_CD=${code}&DEAL_YMD=${date}&pageNo=${page}&numOfRows=${DEFAULT_PAGE_SIZE}`);
}

//아파트 
export async function GetApartmentData(page: number, code: string, date: string) {
    return requestWithMeta(`/api/1613000/RTMSDataSvcAptTrade/getRTMSDataSvcAptTrade?serviceKey=${service_Key}&LAWD_CD=${code}&DEAL_YMD=${date}&pageNo=${page}&numOfRows=${DEFAULT_PAGE_SIZE}`);
}

//연립다세대
export async function GetRowHouseData(page: number, code: string, date: string) {
    return requestWithMeta(`/api/1613000/RTMSDataSvcRHRent/getRTMSDataSvcRHRent?serviceKey=${service_Key}&LAWD_CD=${code}&DEAL_YMD=${date}&pageNo=${page}&numOfRows=${DEFAULT_PAGE_SIZE}`);
}

//단독다가구주택
export async function GetSingleHouseData(page: number, code: string, date: string) {
    return requestWithMeta(`/api/1613000/RTMSDataSvcSHRent/getRTMSDataSvcSHRent?serviceKey=${service_Key}&LAWD_CD=${code}&DEAL_YMD=${date}&pageNo=${page}&numOfRows=${DEFAULT_PAGE_SIZE}`);
}
