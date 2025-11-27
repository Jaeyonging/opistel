import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from './components/common/Footer'

import './App.css'
import ReactGA from 'react-ga4';
import Home from "./routes/Home";

const TRACKING_ID = import.meta.env.VITE_GA_PROPERTYID;
ReactGA.initialize(TRACKING_ID);

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.send('pageview');
  }, [location]);

  return (
    <>
      <Suspense fallback={
        <div className='flex justify-center items-center min-h-screen'>
          <div className='text-center'>
            <div className='inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600 mb-4'></div>
            <p className='text-gray-600 text-xl font-semibold'>로딩 중...</p>
          </div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense >
      <Footer></Footer>

    </>
  );
}

export default App;
