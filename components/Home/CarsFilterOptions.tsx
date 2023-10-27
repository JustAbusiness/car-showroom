import React, { useEffect, useState } from "react";

function CarsFilterOptions({ carsList, setAvgPrice }: any) {
  const [brandList, setBrandList] = useState<any>();
  const BrandSet = new Set();

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    carsList.forEach((element: any) => {
      BrandSet.add(element.carAvg);
    });
  
    setBrandList(Array.from(BrandSet));
  };

  

  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore our cars you might likes</h2>
      </div>

      <div className="mt-5 flex gap-5">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Price
          </option>
          <option>45</option>
          <option>70</option>
        </select>

        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setAvgPrice(e.target.value)}
        >
          <option disabled selected>
            Manufacturer
          </option>
          {brandList?.map((item: string, index: number) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CarsFilterOptions;
