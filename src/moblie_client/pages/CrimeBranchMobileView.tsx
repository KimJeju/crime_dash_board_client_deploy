import { NavBar } from "../../globals/Componenets/NavBar";


export function CrimeBranchMobileView(){

    const link_list : Array<string> = [
        "/mobile_crime_branch",
        "/mobile_public_data_portal",
        "/mobile_crime_db_and_analsys",
    ]

    return(
    <>
    <NavBar link_list={link_list}/>
    </>)
}