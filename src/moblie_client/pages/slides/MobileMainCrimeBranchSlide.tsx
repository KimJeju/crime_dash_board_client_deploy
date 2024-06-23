import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { IArgumentType } from '../../../globals/interfaces/IPropsModel';
import { useRecoilValue } from 'recoil';
import Container from 'react-bootstrap/esm/Container';
import { mainDataArrestPersentState, mainDataOccurrenceState } from '../../../web_clinet/state/crime_branch/main/MainDataState';
import { MainTreeMap } from '../../../web_clinet/components/data_chart/main_crime/MainTreeMap';
import MobileMainSubjectPieChart from '../../components/mobile_chart/main/MobileMainSubjectPieChart';
const useStyles = makeStyles()(() => {
  return {
    root: {
      width: "calc(100%)",
      display: "flex",
      borderRadius: "10px",
      flexDirection: "row",
      alignItems: "center",
      marginTop: "1%",
      transition: "0.5s",
      boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px",
      '&:hover': {
        backgroundColor: "white",
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
      }
    },
    total_title : {
      fontSize : "1.2rem",
      fontWeight : "400",
      paddingLeft : "5px",
      borderBottom : "1px dashed grey"
    },
    chart_title: {
      display: "flex",
      alignItems : "center",
      fontSize: "1.4rem",
      boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px",
      fontWeight: "400",
      height: "50px",
      padding : "1vw"
    },
    chart_layout: {
      display: "flex",
      flexDirection: "column",
      padding: "1%",
    },
    selector_layout: {
      display: "flex",
      flexDirection: "column",
      marginBottom : "3px",
      alignItems : "left"
    },
  };
});

function MobileMainCrimeBranchSlide() {
  const [index, setIndex] = useState(0);
  const { classes } = useStyles();

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  const arrest_persent_args: IArgumentType = {
    key: "발생대비 검거건수(%)",
    args: useRecoilValue(mainDataArrestPersentState)
}

const occurence_args: IArgumentType = {
  key: "발생 건수 (건)",
  args: useRecoilValue(mainDataOccurrenceState)
}

  
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={classes.root}
      // touch={true}
      controls={false}
      data-bs-theme="dark"
      interval={null}
      style={{
        height: "630px",
        marginBottom: "3%",
      }}
    >
      <Carousel.Item >
        <Container style={{ height : "600px", marginBottom : "1.5vh"}}>
          <MobileMainSubjectPieChart data={occurence_args}/>
          <br />
          <MainTreeMap data={arrest_persent_args}/>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

export default MobileMainCrimeBranchSlide;