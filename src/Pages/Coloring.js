import React, { useState } from "react";
import styled from "styled-components";
import MyButton from './../Components/button';
import Image from "./../Components/Image";
import { Link } from "react-router-dom";

const Coloring = () => {
    const [imageSrc, setImageSrc] = useState('');

    return (
        <Wrapper>
            <h4>색칠할 스케치를 업로드해주세요</h4>
            <Image imageSrc={imageSrc} setImageSrc={setImageSrc}/>
            <Link to = {"/Palette_complete"}>
                <MyButton
                    disabled={!(imageSrc.length > 0)}
                    text={"START"}
                />
            </Link>            
        </Wrapper>
    );
};

export default Coloring;

const Wrapper = styled.div`
button {
    margin-top: 10px;
    margin-bottom: 10px;
}
& > img {
      width: 300px;
    }
`