import { useState } from 'react'
import { ToTop } from '../components/common/ToTop'
import DataPicker from '../components/picker/DataPicker';
import RegionPicker from '../components/picker/RegionPicker';
import LocationPicker from '../components/picker/LocationPicker';
import SearchInput from '../components/common/SearchInput';
import TypePicker from '../components/picker/TypePicker';
import ApartmentContainer from '../components/container/ApartmentContainer';
import OpistelContainer from '../components/container/OpistelContainer';
import RowHouseContainer from '../components/container/RowHouseContainer';
import SingleHouseContainer from '../components/container/SingleHouseContainer';

const Home = () => {
  const [selectedType, setSelectedType] = useState("오피스텔");
  const [currCityNumber, setCurrCityNumber] = useState("11680");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedRegion, setSelectedRegion] = useState("서울");
  const [searchQuery, setSearchQuery] = useState("");

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <>
      <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-6 sm:py-8 shadow-xl'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2'>
            {selectedYear}년 {selectedMonth}월 실거래 정보
          </h1>
          <p className='text-blue-100 text-sm sm:text-base md:text-lg'>
            전국 오피스텔 실거래가를 확인하세요
          </p>
        </div>
      </div>

      <TypePicker selectedType={selectedType} setSelectedType={setSelectedType} />
      <DataPicker selectedYear={selectedYear} setSelectedYear={setSelectedYear} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} years={years} months={months} />
      <RegionPicker selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      <LocationPicker selectedRegion={selectedRegion} setCurrCityNumber={setCurrCityNumber} currCityNumber={currCityNumber} />
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ToTop />

      {selectedType === "오피스텔" && (
        <OpistelContainer currCityNumber={currCityNumber} selectedYear={selectedYear} selectedMonth={selectedMonth} />
      )}
      {selectedType === "아파트" && (
        <ApartmentContainer currCityNumber={currCityNumber} selectedYear={selectedYear} selectedMonth={selectedMonth} />
      )}
      {selectedType === "연립다세대" && (
        <RowHouseContainer currCityNumber={currCityNumber} selectedYear={selectedYear} selectedMonth={selectedMonth} />
      )}
      {selectedType === "단독다가구주택" && (
        <SingleHouseContainer currCityNumber={currCityNumber} selectedYear={selectedYear} selectedMonth={selectedMonth} />
      )}
    </>
  );
}

export default Home;