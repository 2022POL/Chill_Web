/* eslint-disable jsx-a11y/alt-text */
import React, { useState }  from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MyButton from '../Components/button';
import Image from "../Components/Image";

import spring from "./../img/spring.png";
import summer from "./../img/summer.png";
import autum from "./../img/autum.png";
import winter from "./../img/winter.png";

const ColorPalette = () => {
    const [imageSrc, setImageSrc] = useState('');

    const paletteSrc = (season) => {
        setImageSrc(season)
    }

    return (
        <Wrapper>
            <img className="palette" src={spring} onClick={()=>paletteSrc(spring)}/>
            <img className="palette" src={summer} onClick={()=>paletteSrc(summer)}/>
            <img className="palette" src={autum} onClick={()=>paletteSrc(autum)}/>
            <img className="palette" src={winter} onClick={()=>paletteSrc(winter)}/>
            <h4>팔레트를 선택하거나 업로드해주세요</h4>
            <Image imageSrc={imageSrc} setImageSrc={setImageSrc}/>
            <Link to = {"/coloring"}>
                <MyButton
                    disabled={!(imageSrc.length > 0)}
                    text={"CHOOSE_SKETCH"}
                />
            </Link>
        </Wrapper>
    );
};

export default ColorPalette;

const Wrapper = styled.div` 
    button {
        margin-top: 10px;
    }
    & > img {
        margin-right: 20px;
    }

`