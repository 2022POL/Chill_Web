import {Link} from "react-router-dom";

const RouteTest = () => {
    return (
        <>
            <Link to = {"/"}>HOME</Link>
            <br/>
            <Link to = {"/ai"}>AI</Link>
            <br/>
            <Link to = {"/coloring"}>COLORING</Link>
            <br/>
            <Link to = {"/colorPallet"}>COLORPALLET</Link>
        </>
    );
};

export default RouteTest;