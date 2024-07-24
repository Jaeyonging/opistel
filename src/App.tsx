import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./routes/Home";
import './App.css'
import ReactGA from 'react-ga4';

const TRACKING_ID = import.meta.env.VITE_GA_PROPERTYID;
ReactGA.initialize(TRACKING_ID);

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.send('pageview');
  }, [location]);
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/detail/:id" element={<Home></Home>} />
        <Route path="/cart" element={<Home></Home>} />
      </Routes>
    </Suspense>
  );
}

export default App;
