import styled from "styled-components";
import React from "react";

import MyButton from './../Components/button';

import Image from "./../Components/Image";

const Ai = () => {

    return (
        <Wrapper>
            <h4>색칠할 스케치를 업로드해주세요</h4>
            <Image/>
            <MyButton 
                text={'Download'} 
            />  
        </Wrapper>
    );
};

export default Ai;

const Wrapper = styled.div`
& > button {
    margin-top: 10px;
}
`