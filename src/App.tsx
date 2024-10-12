import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./routes/Home";
import { Auction } from "./routes/Auction";
import { Menu } from '../src/components/Menu'
import { Footer } from '../src/components/Footer'

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
    <>
      {/* <Menu /> */}
      < Suspense fallback={< div > 로딩중</div >}>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/auction" element={<Auction></Auction>} />
          <Route path="/detail/:id" element={<Home></Home>} />
          <Route path="/cart" element={<Home></Home>} />
        </Routes>
      </Suspense >
      <Footer></Footer>

    </>
  );
}

export default App;
