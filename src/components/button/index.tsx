import React from "react";
import styled from "styled-components";
import tw from 'twin.macro';

interface IButtonProps {
    theme?: "filled" | "outlined";
    text: string;
    className?: string;
}

const BaseButton = styled.button`
    ${tw`
        pl-5 
        pr-5 
        pt-3 
        pb-3 
        outline-none
        text-white
        text-xs 
        font-semibold
        border-transparent
        border-2 
        border-solid 
        rounded-md
        focus:outline-none 
        transition-all
        duration-200 
        ease-in-out
        m-1
    `};
`;

const OutlinedButton = styled(BaseButton)`
    ${tw`
        bg-red-700 
        hover:bg-transparent 
        hover:text-red-700
        hover:border-red-700
    `};
`;

const FilledButton = styled(BaseButton)`
    ${tw`
        border-red-700 
        text-red-700 
        bg-transparent 
        hover:bg-red-700 
        hover:text-white 
        hover:border-transparent
    `};
`;

export function Button(props: IButtonProps) {
    const {theme, text, className} = props;

    if (theme === "filled") 
        return <FilledButton className={className}>{text} </FilledButton>
    else
        return <OutlinedButton className={className}>{text} </OutlinedButton>
};