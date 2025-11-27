import React from "react";
import errorAnimation from '../lotties/error.json';
import Lottie from "lottie-react";

interface ApiError extends Error {
  response?: {
    status: number;
    data?: unknown;
  };
}

export const GlobalErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void; }) => {
  const apiError = error as ApiError;
  const statusCode = apiError?.response?.status || null;
  
  return (
    <div role="alert" className="flex flex-col items-center justify-center w-[100vw] h-[100vh] p-2">
      <Lottie animationData={errorAnimation} width={'100%'} height={'auto'} />
      {error.message !== 'Network Error' ? (
        <>
          <span className="text-white text-center">데이터를 불러오는데 에러가 발생하였습니다.</span>
          {statusCode && <span className="text-white text-center">상태 코드: {statusCode}</span>}
          <button className="px-4 py-2 bg-blue-500 text-white rounded-sm mt-4" onClick={resetErrorBoundary}>
            홈으로 돌아가기
          </button>
        </>
      ) : (
        <>
          <span className="text-white text-center">현재 서버가 다운되어있습니다.</span>
          <span className="text-white text-center mb-[10px]">잠시후 다시 시도해주세요.</span>
        </>
      )}
    </div>
  );
};
