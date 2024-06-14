import styled from "styled-components";
import { useRouteError } from "react-router-dom";
import SideNav from "./SideNav";


const ErrorWrapper = styled.div`
    // margin:0;
    // padding:5px;
    width : 100vw;
    height : 100vh;

    display : flex;
    flex-direction : column;
    align-items : center;

    padding-top : 50vh;


 
`

export default function Sorry() {
    const error = useRouteError();
    console.error(error);

    return (
        <ErrorWrapper>
            <h1>개발중입니다.</h1>
            <SideNav />
        </ErrorWrapper>
    )
}