import axios from 'axios'
let service_Key = import.meta.env.VITE_SERVICE_KEY
console.log(service_Key)
export async function GetHouseData(code: string, date: string) {
    return axios.get(`/api/1613000/RTMSDataSvcOffiRent/getRTMSDataSvcOffiRent?serviceKey=${service_Key}&LAWD_CD=${code}&DEAL_YMD=${date}&numOfRows=100`).then((response) => {
        console.log(response)
        return response.data.response.body.items.item
    }).catch((err) => {
        return err
    });
}
