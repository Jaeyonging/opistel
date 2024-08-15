import React, { useEffect, useState } from 'react'
import { GetHouseData } from '../api'
import axios from 'axios'
import { TodayTradeCard } from '../components/TodayTradeCard'
import { Menu } from '../components/Menu'
import { ToTop } from '../components/ToTop'
import { Footer } from '../components/Footer'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const [data, setData] = useState("")
  const navigate = useNavigate()
  return (
    <>
      <div className='flex w-[100vw] flex-col'>
        <Menu></Menu>
        <TodayTradeCard />
      </div>
      <ToTop />
      <Footer></Footer>
    </>
  )
}