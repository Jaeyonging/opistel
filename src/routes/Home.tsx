import React from 'react'
import { TodayTradeCard } from '../components/TodayTradeCard'
import { ToTop } from '../components/ToTop'

export const Home = () => {
  return (
    <>
      <div className='flex w-full flex-col overflow-x-hidden'>
        <TodayTradeCard />
      </div>
      <ToTop />
    </>
  )
}