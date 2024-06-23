import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { useRecoilValue } from 'recoil';
import { subDataSubjectState } from '../../../web_clinet/state/crime_branch/sub/SubDataState';
import { IArgumentType } from '../../../globals/interfaces/IPropsModel';
import { MobileSubPyramidChart } from '../../components/mobile_chart/sub/MobileSubPyramidChart';
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
    chart_title: {
      display: "flex",
      alignItems: "center",
      fontSize: "1.4rem",
      boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px",
      fontWeight: "400",
      height: "50px",
      padding: "1vw",
      paddingLeft: "20px"
    },
  };
});

function MobileSubCrimeBranchSlide() {
  const [index, setIndex] = useState(0);
  const { classes } = useStyles();

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };



  const subject_data: IArgumentType = {
    key: "소분류 분류별 통계",
    args: useRecoilValue(subDataSubjectState)
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
        <div className={classes.chart_title}>소분류 발생건수</div>
        <br />
        <Container style={{ height: "550px", marginBottom: "1.5vh" }}>
          <MobileSubPyramidChart data={subject_data}/>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

export default MobileSubCrimeBranchSlide;