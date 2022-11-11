import React from "react";
import styled from "styled-components";
import MyButton from './../Components/button';
import Image from "./../Components/Image";

const Coloring = () => {

    return (
        <Wrapper>
            <h4>인공지능을 통해 자동으로 채색된 그림입니다.</h4>
            <img className="ai_completed" src={require("./../img/chill.png")}/>            
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