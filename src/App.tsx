import { useEffect, useState } from 'react';
import './App.css'
import { debounce } from '@mui/material';
import CrimeBranchWebView from './web_clinet/pages/crime_branch/CrimeBranchWebView';
import { MobileTest } from './moblie_client/MobileTest';

export function App() {

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
  console.log(browerWid);


  if(browerWid <= 800){
    return(
      <>
      <MobileTest />
      </>
    )
  }else {
    return (
      <>
        <CrimeBranchWebView />
      </>
    )
  }

 
}

export default App



