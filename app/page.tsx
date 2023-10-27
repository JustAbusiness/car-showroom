"use client";
import CarsFilterOptions from "@/components/Home/CarsFilterOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);

  useEffect(() => {
    getCarList();
  }, []);

  const getCarList= async () => {
    const result:any = await getCarsList();
    setCarsList(result?.carLists.sort((a: any, b: any) => a.carAvg - b.carAvg));
    setCarsOrgList(result?.carLists.sort((a: any, b: any) => a.carAvg - b.carAvg));
  };

  const filterCarList = (price: any) => {
      const filterList = carsOrgList.filter((car: any) => car.carAvg <= price);
      setCarsList(filterList);
  }

  
  return (
    <main className="p-5 sm:px-10 md:px-20 bg-white">
      <Hero />
      <SearchInput />
      <CarsFilterOptions carsList={carsOrgList} setAvgPrice={(value: any) => filterCarList(value)} />
      <CarsList carsList={carsList}/>
    </main>
  );
}
