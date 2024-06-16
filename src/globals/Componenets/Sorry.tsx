import styled from "styled-components";
import { useRouteError } from "react-router-dom";
import { NavBar } from "./NavBar";
import { useEffect, useState } from "react";
import { debounce } from "@mui/material";


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

    const [browerWid, setBrowserWid] = useState(window.innerWidth);

    const handleResize = debounce(() => {
        setBrowserWid(window.innerWidth);
    })

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            // cleanup
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (browerWid <= 800) {
        const mobile_link_list: Array<string> = [
            "/mobile_crime_branch",
            "/mobile_public_data_portal",
            "/mobile_crime_db_and_analsys",
        ]
        return (
            <>
                <NavBar link_list={mobile_link_list} />
                <ErrorWrapper>
                    <h1>개발중입니다.</h1>
                </ErrorWrapper>
            </>
        )
    } else {
        const web_link_list: Array<string> = [
            "/web_crime_branch",
            "/web_public_data_portal",
            "/web_crime_db_and_analsys",
        ]

        return (
            <>
                <NavBar link_list={web_link_list} />
                <ErrorWrapper>
                    <h1>개발중입니다.</h1>
                </ErrorWrapper>
            </>
        )

    }


}