import React from "react";
import CarCard from "./CarCard";

function CarsList(props: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {props.carsList?.map((car: any, index: number) => (
        <div key={index}>
            <CarCard car={car}/>

        </div>
      ))}
    </div>
  );
}

export default CarsList;
