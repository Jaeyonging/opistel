import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export const Menu = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const isActive = (path: string) => location.pathname === path
    
    return (
        <div className='sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg'>
            <div className='container mx-auto px-2 sm:px-4 py-2 sm:py-3'>
                <div className='flex flex-row justify-around items-center gap-1 sm:gap-2 md:gap-3'>
                    <button 
                        className={`px-2 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-base rounded-lg sm:rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 ${
                            isActive("/") || isActive("/home") 
                                ? 'bg-white text-purple-600 shadow-lg' 
                                : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
                        }`}
                        onClick={() => navigate("/")}
                    >
                        <span className="hidden sm:inline">오늘의 실거래</span>
                        <span className="sm:hidden">실거래</span>
                    </button>
                    <button 
                        className={`px-2 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-base rounded-lg sm:rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 ${
                            isActive("/sale") 
                                ? 'bg-white text-purple-600 shadow-lg' 
                                : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
                        }`}
                    >
                        매매
                    </button>
                    <button 
                        className={`px-2 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-base rounded-lg sm:rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 ${
                            isActive("/rent") 
                                ? 'bg-white text-purple-600 shadow-lg' 
                                : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
                        }`}
                    >
                        전/월세
                    </button>
                    <button 
                        className={`px-2 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-base rounded-lg sm:rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 ${
                            isActive("/auction") 
                                ? 'bg-white text-purple-600 shadow-lg' 
                                : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
                        }`}
                        onClick={() => navigate("/auction")}
                    >
                        경매
                    </button>
                </div>
            </div>
        </div>)
}
