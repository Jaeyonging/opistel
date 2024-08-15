import React, { useEffect, useState } from 'react'
import { GetHouseData } from '../api'
import axios from 'axios'
import { TodayTradeCard } from '../components/TodayTradeCard'
import { ToTop } from '../components/ToTop'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const [data, setData] = useState("")
  const navigate = useNavigate()
  return (
    <>
      <div className='flex w-[100vw] flex-col'>
        <div className='flex flex-row justify-around bg-[gray] rounded-[20px] p-2 mt-2 mb-2'>
          <button className='bg-[yellow] p-2 rounded-[20px] w-[150px] sm:text-[10px] sm:w-[120px]' onClick={() => navigate("/")}>오늘의 실거래</button>
          <button className='bg-[yellow] p-2 rounded-[20px] w-[150px] sm:text-[10px] sm:w-[100px]'>매매</button>
          <button className='bg-[yellow] p-2 rounded-[20px] w-[150px] sm:text-[10px] sm:w-[100px]'>전/월세</button>
          <button className='bg-[yellow] p-2 rounded-[20px] w-[150px] sm:text-[10px] sm:w-[100px]' onClick={() => navigate("/auction")}>경매</button>
        </div>
        <TodayTradeCard />
      </div>
      <ToTop />
    </>
  )
}