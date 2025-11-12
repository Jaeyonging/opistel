import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Auction = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pb-20'>
            <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16 shadow-xl'>
                <div className='container mx-auto px-4 text-center'>
                    <h1 className='text-5xl font-bold mb-4 sm:text-3xl'>경매 정보</h1>
                    <p className='text-blue-100 text-xl sm:text-base'>오피스텔 경매 정보를 확인하세요</p>
                </div>
            </div>
            <div className='container mx-auto px-4 mt-12'>
                <div className='bg-white rounded-2xl shadow-lg p-12 text-center'>
                    <svg className="w-32 h-32 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h2 className='text-2xl font-bold text-gray-700 mb-4'>준비 중입니다</h2>
                    <p className='text-gray-500'>경매 정보 기능은 곧 제공될 예정입니다.</p>
                </div>
            </div>
        </div>
    )
}
