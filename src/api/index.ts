import axios from 'axios'
let service_Key = import.meta.env.VITE_SERVICE_KEY

export async function GetHouseData(code: string, date: string) {
    return axios.get(`/api/1613000/RTMSDataSvcOffiRent/getRTMSDataSvcOffiRent?serviceKey=${service_Key}&LAWD_CD=${code}&DEAL_YMD=${date}&numOfRows=100`).then((response) => {
        return response.data.response.body.items.item
    }).catch((err) => {
        return err
    });
}

export async function GetHouseMonthData(code: string, date: string) {
    return axios.get(`/monthapi/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptRent?LAWD_CD=${code}&DEAL_YMD=${date}&serviceKey=${service_Key}`).then((response) => {
        return response.data.response.body.items.item
    }).catch((err) => {
        console.log(err)
        return err
    });
}