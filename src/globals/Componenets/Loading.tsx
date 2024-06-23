import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';


const LoadingContainer = styled.div`
    width:100%;
    height:100%;
    display : flex;
    align-items : center;
    justify-content : center;
    overflow:hidden;
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background-color: #F4F7FF;
    z-index:100;
`

function Loading() {
    return (
        <LoadingContainer>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" />
        </LoadingContainer>
    )
}

export default Loading;