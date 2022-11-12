import styled from "styled-components";
import React, { useState } from "react";

import MyButton from './../Components/button';
import Image from "./../Components/Image";
import Upload_ment from "./../Components/upload_ment";
import { Link } from "react-router-dom";

const Ai = () => {

    const [imageSrc, setImageSrc] = useState('');

    return (
        <Wrapper>
            <Upload_ment></Upload_ment>
            <Image imageSrc={imageSrc} setImageSrc={setImageSrc}/>

            <Link to = {"/Ai_complete"}>
                <MyButton
                    disabled={!(imageSrc.length > 0)}
                    text={"START"}
                />
            </Link>  

        </Wrapper>
    );
};

export default Ai;

const Wrapper = styled.div`
button {
    margin-top: 10px;
}

`