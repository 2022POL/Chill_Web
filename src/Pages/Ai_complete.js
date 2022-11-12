import React from "react";
import styled from "styled-components";
import MyButton from './../Components/button';

const Coloring = () => {

    const [imageSrc] = "./../img/chill_result.png";

    const download = () => {
        const link = document.createElement("a");
        link.download = "aaa.png";
        link.href = imageSrc;
        link.click();
    };

    return (
        <Wrapper>
            <h4>인공지능을 통해 자동으로 채색된 그림입니다.</h4>
            <img className="ai_completed" src={require("./../img/chill_result.png")} alt="profile"/>      
            <MyButton text={'Download'} onClick={download} disabled={!(imageSrc.length > 0)}/>
            
        </Wrapper>
    );
};

export default Coloring;

const Wrapper = styled.div`
& > button {
    margin-top: 10px;
}
`