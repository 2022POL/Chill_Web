import React from "react";
import styled from "styled-components";
import MyButton from './../Components/button';
import Image from "./../Components/Image";
import Upload_ment from "./../Components/upload_ment";
import { Link } from "react-router-dom";

const Coloring = () => {

    return (
        <Wrapper>
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
& > button {
    margin-top: 10px;
}
`