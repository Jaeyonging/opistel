import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Auction = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='flex w-[100vw] flex-col'>
                <div className='flex flex-row justify-around bg-[gray] rounded-[20px] p-2 mt-2 mb-2'>
                    <button className='bg-[yellow] p-2 rounded-[20px] w-[150px]' onClick={() => navigate("/")}>오늘의 실거래</button>
                    <button className='bg-[yellow] p-2 rounded-[20px] w-[150px]'>매매</button>
                    <button className='bg-[yellow] p-2 rounded-[20px] w-[150px]'>전/월세</button>
                    <button className='bg-[yellow] p-2 rounded-[20px] w-[150px]' onClick={() => navigate("/auction")}>경매</button>
                </div>
            </div>
        </>)
}
