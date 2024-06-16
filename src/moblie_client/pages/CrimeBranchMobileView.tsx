import { MobileSideNav } from "../components/mobile_global/MobileSideNav";
import { makeStyles } from "tss-react/mui";
const useStyles = makeStyles()(() => {
    return {
      root: {
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
    };
  });

export function CrimeBranchMobileView(){
    return(
    <>
    <MobileSideNav />
    </>)
}