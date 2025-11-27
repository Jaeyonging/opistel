import React from 'react'
import loadingAnimation from '../lotties/loading.json';
import Lottie from 'lottie-react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100%]">
      <Lottie animationData={loadingAnimation} style={{ width: '10%', height: '10%' }} />
      <span className="text-[20px] font-bold">Loading...</span>
    </div>
  )
}

export default Loading;
