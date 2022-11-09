import {Link} from "react-router-dom";
import styled from 'styled-components';

const MyButton = ({text, type, onClick}) => {

    const btnType = ['positive','negative'].includes(type)? type:'default'; // type이 있다면 type으로 아니라면 default로 강제 type설정

    return (
        <StyledButton
            className={["MyButton", `MyButton_${btnType}`].join(" ")}
            onClick = {onClick}
        >
            {text}
        </StyledButton>
    );
};

MyButton.defaultProps={
    type: "default",
}; 

const StyledButton = styled.button`
    display: block;
    padding: 6px 10px;
    color: #fff;
    font-size: 18px;
    border-radius: 3px;
    background-color: #3f186e;
    border: 0;
`

export default MyButton