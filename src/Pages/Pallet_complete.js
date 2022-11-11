import React from "react";
import styled from "styled-components";
import MyButton from './../Components/button';
import Image from "./../Components/Image";

const Coloring = () => {

    return (
        <Wrapper>
            <img className="c_completed" src={require("./../img/chill_result.png")}/>            

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