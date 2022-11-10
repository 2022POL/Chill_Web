import styled from "styled-components";
import React from "react";

import MyButton from './../Components/button';
import Image from "./../Components/Image";
import Upload_ment from "./../Components/upload_ment";

const Ai = () => {

    return (
        <Wrapper>
            <Upload_ment></Upload_ment>
            <Image/>
            <h4>인공지능을 통해 자동으로 채색된 그림입니다.</h4>
            <img className="ai_completed" src={require("./../img/chill.png")}/>            
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