import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export const Menu = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const isActive = (path: string) => location.pathname === path
    
    return (
        <div className='sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg'>
            <div className='container mx-auto px-4 py-3'>
                <div className='flex flex-row justify-around items-center gap-2 sm:gap-1'>
                    <button 
                        className={`px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl sm:text-sm sm:px-3 sm:py-2 ${
                            isActive("/") || isActive("/home") 
                                ? 'bg-white text-purple-600 shadow-lg' 
                                : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
                        }`}
                        onClick={() => navigate("/")}
                    >
                        오늘의 실거래
                    </button>
                    <button 
                        className={`px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl sm:text-sm sm:px-3 sm:py-2 ${
                            isActive("/sale") 
                                ? 'bg-white text-purple-600 shadow-lg' 
                                : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
                        }`}
                    >
                        매매
                    </button>
                    <button 
                        className={`px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl sm:text-sm sm:px-3 sm:py-2 ${
                            isActive("/rent") 
                                ? 'bg-white text-purple-600 shadow-lg' 
                                : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
                        }`}
                    >
                        전/월세
                    </button>
                    <button 
                        className={`px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl sm:text-sm sm:px-3 sm:py-2 ${
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
