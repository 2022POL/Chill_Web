/* eslint-disable jsx-a11y/alt-text */
import React, { useState }  from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MyButton from '../Components/button';
import Image from "./../Components/Image";

import spring from "./../img/spring.png";
import summer from "./../img/summer.png";
import autum from "./../img/autum.png";
import winter from "./../img/winter.png";

const ColorPallet = () => {
    const [imageSrc, setImageSrc] = useState('');

    const palletSrc = (season) => {
        setImageSrc(season)
    }

    return (
        <Wrapper>
            <img className="pallet" src={spring} onClick={()=>palletSrc(spring)}/>
            <img className="pallet" src={summer} onClick={()=>palletSrc(summer)}/>
            <img className="pallet" src={autum} onClick={()=>palletSrc(autum)}/>
            <img className="pallet" src={winter} onClick={()=>palletSrc(winter)}/>
            <h4>팔레트를 선택하거나 업로드해주세요</h4>
            <Image imageSrc={imageSrc} setImageSrc={setImageSrc}/>
            <Link to = {"/coloring"}>
                <MyButton
<<<<<<< HEAD
                    text={"NEXT"}
                    disabled={!(imageSrc.length > 0)}
=======
                    text={"CHOOSE_SKETCH"}
>>>>>>> 15e067e474f812b447fe9c729f272cc8e045b745
                />
            </Link>
        </Wrapper>
    );
};

export default ColorPallet;

const Wrapper = styled.div` 
    button {
        margin-top: 10px;
    }
    & > img {
        margin-right: 20px;
    }

`