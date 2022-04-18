import React from "react";
import { Link } from "react-router-dom";
import Car from "../components/Car"
import FeaturesGrid from "../components/HomeLayout";

function App() {
  return (
    <>
    {/*TODO: const carsData = 
    {
      {
        nrOfSeats: 'ad'; 
        speed: 'asfref'
      },
      {
        nrOfSeats: 'ad'; 
        speed: 'asfref'
      }
    }
    carsData.array.forEach(element => {
    }); */}

      {/* <Car nrOfSeats='4 passengers' speed='100 km/h in 4 seconds' gearbox='Automatic gearbox' type='Electric' imgSrc='https://images.unsplash.com/photo-1453491945771-a1e904948959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' carName='Tesla Model S' price='$168.00'/>
      <Car nrOfSeats='4 passengers' speed='100 km/h in 4 seconds' gearbox='Automatic gearbox' type='Electric' imgSrc='https://images.unsplash.com/photo-1453491945771-a1e904948959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' carName='Tesla Model S' price='$168.00'/> */}
      <FeaturesGrid />
    </>
  );
}

export default App;
