import React from 'react'
import { TodayTradeCard } from '../components/TodayTradeCard'
import { ToTop } from '../components/ToTop'

export const Home = () => {
  return (
    <>
      <div className='flex w-[100vw] flex-col'>
        <TodayTradeCard />
      </div>
      <ToTop />
    </>
  )
}