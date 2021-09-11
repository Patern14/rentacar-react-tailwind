import React from "react";
import styled, {css} from "styled-components";
import tw from 'twin.macro';
import { SCREENS } from "../../components/responsive"
import JeepImg from "../../assets/images/jeep.png"
import SUVFlipImg from "../../assets/images/SUV_flip.png"

const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center 
        pt-4 
        pb-4 
        pr-7 
        pl-7 
        md:pl-0 
        md:pr-0 
        bg-white
    `};
`;

const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -50px;

    img {
        width: auto;
        height: 100%;
    }

    @media (min-width: ${SCREENS.md}) {
        height: 23em;
    }

    @media (min-width: ${SCREENS.lg}) {
        height: 28em;
    }

    @media (min-width: ${SCREENS["2xl"]}) {
        height: 32em;
        margin-left: -100px;
    }
`;

const InfoContainer = styled.div`
    ${tw`
        md:w-1/2 
        flex 
        flex-col 
        md:ml-6 
        2xl:ml-16 
    `};
`;

const Title = styled.h1`
    ${tw`
        text-black 
        text-2xl 
        md:text-5xl 
        font-extrabold 
        md:font-black 
        md:leading-normal
    `};
`;

const InfoText = styled.p`
    ${tw`
        max-w-2xl
        text-sm 
        md:text-base 
        text-gray-500 
        font-normal
        mt-4
    `};
`;

export function AboutUs() {
    return <AboutUsContainer>
        <CarContainer>
            <img src={SUVFlipImg}/>
        </CarContainer>
        <InfoContainer>
            <Title>Rental deals</Title>
            <InfoText>We work with all the major international car hire brands (and lots of smaller local companies) to bring you a huge choice of cars at the very best prices. That's how we can find you cheap car hire deals at over 60,000 locations worldwide.
            </InfoText>
        </InfoContainer>
    </AboutUsContainer>
}