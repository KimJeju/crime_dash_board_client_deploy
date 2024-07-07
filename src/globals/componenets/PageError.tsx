import styled from "styled-components";
import { useRouteError } from "react-router-dom";


const ErrorWrapper = styled.div`
    margin:0;
    padding:5px;
    width : 100%;
    height : 100vh;

    display : flex;
    flex-direction : column;
    align-items : center;

    i {
        font-size : 24px;
        font-weight : bold;
    }
 
`

export default function PageError() {
    const error = useRouteError();
    console.error(error);

    return (
        <ErrorWrapper>
            <h1>404 NOT FOUND</h1>
        </ErrorWrapper>
    )
}