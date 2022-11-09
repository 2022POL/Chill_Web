import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import MyButton from './../Components/button';

const Home = () => {

    return (
        <Wrapper>
            <Link to = {"/ai"}>
                <MyButton
                    text={"AI로 색칠하기"}
                />
            </Link>
            <Link to = {"/colorPallet"}>
                <MyButton
                    text={"직접 색칠하기"}
                />
            </Link>
        </Wrapper>
    );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`