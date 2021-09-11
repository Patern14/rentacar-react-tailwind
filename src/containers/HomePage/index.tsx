import React from "react"
import styled from "styled-components"
import tw from "twin.macro";
import { BookCArd } from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
/* import { TopSection } from "../../containers/HomePage/topSection"; */
import { TopSection } from "./topSection";
import { TopCars } from "./topCars";
import { Footer } from "../../components/footer";

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function HomePage() {
    return (
        <PageContainer>
            <Navbar/>
            <TopSection/>
            <Marginer direction="vertical" margin="4em" />
            <BookCArd/>
            <Marginer direction="vertical" margin="10em" />
            <BookingSteps/>
            <Marginer direction="vertical" margin="5em" />
            <AboutUs/>
            <Marginer direction="vertical" margin="5em" />
            <TopCars/>
            <Footer/>
        </PageContainer>
    )
}