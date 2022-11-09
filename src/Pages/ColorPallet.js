import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MyButton from '../Components/button';
import Image from "./../Components/Image";

const ColorPallet = () => {

    return (
        <Wrapper>
            <img className="pallet" src={require("./../img/spring.png")}/>
            <img className="pallet" src={require("./../img/summer.png")}/>
            <img className="pallet" src={require("./../img/autum.png")}/>
            <img className="pallet" src={require("./../img/winter.png")}/>
            <h4>팔레트를 선택하거나 업로드해주세요</h4>
            <Image/>
            <Link to = {"/coloring"}>
                <MyButton
                    text={"START"}
                />
            </Link>
        </Wrapper>
    );
};

export default ColorPallet;

const Wrapper = styled.div` 
    & > button {
        margin-top: 10px;
    }
    & > img {
        margin-right: 20px;
    }
`