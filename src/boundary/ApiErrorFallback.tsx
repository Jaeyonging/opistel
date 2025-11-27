import type { ComponentType } from "react";
import { IoIosRefresh } from "react-icons/io";

interface ApiError extends Error {
  response?: {
    status: number;
    data?: unknown;
  };
}

const RefreshIcon = IoIosRefresh as unknown as ComponentType<{
  className?: string;
  onClick?: () => void;
}>;

export const ApiErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void; }) => {
  const apiError = error as ApiError;
  const statusCode = apiError?.response?.status || null;
  
  if(error.message === 'Network Error') {
    return (
      <div role="alert" className="flex flex-col items-center justify-center w-[100%] h-[100%]">
        <span className="text-[24px] mb-4">네트워크 오류가 발생했습니다.</span>
        <span className="text-gray-600 mb-4">서버가 끊어졌거나 인터넷 연결이 끊어졌습니다.</span>
        <RefreshIcon className="text-[40px] text-gray-500 cursor-pointer hover:text-black" onClick={resetErrorBoundary} />
      </div>
    );
  }

  return (
    <div role="alert" className="flex flex-col items-center justify-center w-[100%] h-[100%]">
      <span>{error.message}</span>
      {statusCode && <span>{statusCode}</span>}
      <span className="text-[24px]">데이터를 불러오는데 에러가 발생하였습니다.</span>
      <RefreshIcon className="text-[40px] text-gray-500 cursor-pointer hover:text-black" onClick={resetErrorBoundary} />
    </div>
  );
};
