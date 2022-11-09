import React from "react";
import styled from "styled-components";
import MyButton from './../Components/button';
import Image from "./../Components/Image";

const Coloring = () => {

    return (
        <Wrapper>
            <h4>색칠할 스케치를 업로드해주세요</h4>
            <Image/>
            <MyButton 
                text={'START'} 
            />  
            <MyButton 
                text={'Download'} 
            />  
            
        </Wrapper>
    );
};

export default Coloring;

const Wrapper = styled.div`
& > button {
    margin-top: 10px;
}
`