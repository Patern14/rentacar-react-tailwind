import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import { SCREENS } from "../../components/responsive"
import { Button } from "../../components/button"

import McLarenImg from "../../assets/images/mclaren-orange-big.png"
import BugattiImg from "../../assets/images/bugatti.png"
import FiveCarsImg from "../../assets/images/five_cars_upfront.png"
import BlobImg from "../../assets/images/blob.svg"

const TopSectionContainer = styled.div`
    /* min-height: 450px; */
    margin-top: 6em;

    @media (max-width: ${SCREENS.sm}) {
        flex-direction: column;
    }

    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3 
        pr-3
        lg:pl-12 
        lg:pr-12 
    `};
`;

const LeftContainer = styled.div`
    @media (max-width: ${SCREENS.sm}) {
        width: 100%;
        margin-bottom: 2em;
    }
    ${tw`
        w-1/2 
        flex 
        flex-col
    `};
`;

const RightContainer = styled.div`
    @media (max-width: ${SCREENS.sm}) {
        margin-bottom: 2em;
    }
    ${tw`
        w-1/2
        flex 
        flex-col
        relative
        mt-20
    `};
`;

const Slogan = styled.h1`
    ${tw`
        font-bold
        text-2xl 
        xl:text-6xl 
        sm:text-3xl 
        md:text-5xl 
        lg:font-black 
        md:font-extrabold 
        text-black
        mb-4 
        sm:leading-snug     /* line-height: 1.375; */
        lg:leading-normal 
        xl:leading-relaxed
    `};
`;

const Description = styled.p`
    ${tw`
        text-xs 
        lg:text-sm 
        xl:text-lg 
        sm:max-h-full 
        overflow-hidden
        max-h-12 
        text-gray-800
    `};
`;

const BlobContainer = styled.div`

    width: 20em;
    height: 10em;
    position: absolute;
    right: -5em;
    top: -9em;
    z-index: -1;
    transform: rotate(-30deg);

    img {
        width: 100%;
        height: auto;
        max-height: max-content;
    }

    @media (min-width: ${SCREENS.sm}) {
        width: 40em;
        max-height: 10em;
        right: -9em;
        top: -16em;
        transform: rotate(-25deg);
    }

    @media (min-width: ${SCREENS.lg}) {
        width: 50em;
        max-height: 30em;
        right: -7em;
        top: -15em;
        transform: rotate(-30deg);
    }

    @media (min-width: ${SCREENS.xl}) {
        width: 70em;
        max-height: 30em;
        right: -15em;
        top: -25em;
        transform: rotate(-20deg);
    }
`;

const StandaloneCar = styled.div`
    width: auto;
    height: 10em;
    right: -11em;
    top: -5em;
    position: absolute;

    img {
        width: auto;
        height: 100%;
        max-width: fit-content;
    }

    @media (min-width: ${SCREENS.sm}) {
        height: 14em;
        right: -7em;
        top: -4em;
    }

    @media (min-width: ${SCREENS.md}) {
        height: 16em;
        right: -9em;
        top: -4em;
    }

    @media (min-width: ${SCREENS.lg}) {
        height: 20em;
        right: -8em;
        top: -3em;
    }

    @media (min-width: ${SCREENS.xl}) {
        height: 27em;
        right: -15em;
        top: -7em;
    }
`;

const ButtonsContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        mt-4
    `}
`;

export function TopSection() {
    return <TopSectionContainer>
        <LeftContainer>
            <Slogan>Rent the perfect car for your next trip</Slogan>
            <Description>
                Holidays, a weekend, for a try, or just for pleasure?
            </Description>
            <Description>
                We have the car you want.
            </Description>
            <ButtonsContainer>
                <Button text="Rent a car" />
                <Button text="Sell your car" theme="filled" />
            </ButtonsContainer>
        </LeftContainer>
        <RightContainer>
            <BlobContainer>
                <img src={BlobImg} alt="" />
            </BlobContainer>
            <StandaloneCar>
                <img src={BugattiImg} alt="" />
                {/* <img src={FiveCarsImg} alt="" /> */}
            </StandaloneCar>
        </RightContainer>
    </TopSectionContainer>
};