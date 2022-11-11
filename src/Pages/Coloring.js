import React, { useState } from "react";
import styled from "styled-components";
import MyButton from './../Components/button';
import Image from "./../Components/Image";
import Upload_ment from "./../Components/upload_ment";
import { Link } from "react-router-dom";

const Coloring = () => {
    const [imageSrc, setImageSrc] = useState('');

    const download = () => {
        const link = document.createElement("a");
        link.download = "aaa.png";
        link.href = imageSrc;
        link.click();
    };

    return (
        <Wrapper>
            <h4>색칠할 스케치를 업로드해주세요</h4>
            <Image imageSrc={imageSrc} setImageSrc={setImageSrc}/>
            <MyButton text={'START'} onClick={download} disabled={!(imageSrc.length > 0)}/>
            <MyButton 
                text={'Download'} 
            />  

            <Upload_ment></Upload_ment>
            <Image/>
            <Link to = {"/Pallet_complete"}>
                <MyButton
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