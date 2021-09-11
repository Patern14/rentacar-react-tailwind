import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../typings/car";
import { Car } from "../../components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import carService from "../../app/services/carService/index";
import { Dispatch } from "redux";
import { GetCars_cars } from "../../app/services/carService/__generated__/GetCars";
import { setTopCars } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectTopCars } from "./selectors";
import MoonLoader from "react-spinners/MoonLoader";

import Chevrolet from "../../assets/images/Chevrolet_Suburban.jpg";
import Dodge from "../../assets/images/Dodge_Challenger.jpg";
import Cherokee from "../../assets/images/Grand_Cherokee.jpg";


const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));

const wait = (timeout: number) => new Promise((rs) => setTimeout(rs, timeout));

export function TopCars() {
  const [current, setCurrent] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { topCars } = useSelector(stateSelector);
  const { setTopCars } = actionDispatch(useDispatch());

  console.log("Cars", topCars);

  const fetchTopCars = async () => {
    setLoading(true);
    const cars = await carService.getCars().catch((err) => {
      console.log("Error: ", err);
    });

    //await wait(1000);   //TEST Spinner

    console.log("Cars: ", cars);
    if (cars) setTopCars(cars);
    setLoading(false);
  };

  const testCar1: ICar = {
    name: "Audi S3",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: ICar = {
    name: "HONDA CITY 5",
    mileage: "20k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1400,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar3: ICar = {
    name: "Chevrolet Suburban",
    mileage: "15k",
    thumbnailSrc: Chevrolet,
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar4: ICar = {
    name: "Dodge Challenger",
    mileage: "20k",
    thumbnailSrc: Dodge,
    dailyPrice: 65,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar5: ICar = {
    name: "Jeep Grand Cherokee",
    mileage: "40k",
    thumbnailSrc: Cherokee,
    dailyPrice: 60,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  useEffect(() => {
    fetchTopCars();
  }, []);

  

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={50} />
        </LoadingContainer>
      )}
      
        <CarsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            
            slides={[
              <Car {...testCar1} />,
              <Car {...testCar2} />,
              <Car {...testCar3} />,
              <Car {...testCar4} />,
              <Car {...testCar5} />
            ]}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots value={current} onChange={setCurrent}  />
        </CarsContainer>
      
    </TopCarsContainer>
  );
}