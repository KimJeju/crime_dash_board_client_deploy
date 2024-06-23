import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { IArgumentType } from '../../../globals/interfaces/IPropsModel';
import { totalCrimebranchState } from '../../../web_clinet/state/crime_branch/total/CrimeBranchState';
import { useRecoilValue } from 'recoil';
import { TotalBranchSubjectSelector } from '../../../globals/Componenets/selectors/TotalBranchSubjectSelector';
import { crime_branch_avg_subject_value } from '../../../globals/constants/CrimeBranch';
import { AvgSubjectOnChangeBtn } from '../../globals/AvgSubjectOnChangeBtn';
import { mobileCrimeBranchTotalAvgSubjectState } from '../../state/mobile_crime_branch/mobile_total/MobileTotalCrimeState';
// import { dynamicSubCategoryState } from '../../../web_clinet/state/crime_branch/total/DynamicSubjectState';
// import { arrestAverageState, occurrencesAverageState } from '../../../web_clinet/state/crime_branch/total/SubjectAverageState';
import SingDataBox from '../../../web_clinet/components/SingleDataBox';
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/esm/Stack';
import MobileToTalCrimeBarCharts from '../../components/mobile_chart/total/MobileToTalCrimeBarCharts';

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
      fontWeight : "300",
      paddingLeft : "5px",
      borderBottom : "1px dashed grey"
    },
    chart_title: {
      display: "flex",
      alignItems : "center",
      fontSize: "1.2rem",
      borderBottom : "1px dashed grey",
      fontWeight: "300",
      height: "50px",
    },
    chart_layout: {
      display: "flex",
      flexDirection: "column",
    },
    selector_layout: {
      display: "flex",
      flexDirection: "column",
      marginBottom : "3px",
      alignItems : "left"
    },
  };
});

function MobileTotalCrimeBranchSlide() {
  const [index, setIndex] = useState(0);
  const { classes } = useStyles();

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  //즉각적인 데이터 변동이 어려운 차트에 대하여 값을 직접 대입해준다.
  const total_data_args: IArgumentType = {
    key: "종합 총계",
    args: useRecoilValue(totalCrimebranchState)
  }

  const mobile_total_avg_catetory_args: IArgumentType = {
    key: "세부 항목별 총계",
    args: useRecoilValue(mobileCrimeBranchTotalAvgSubjectState)
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
          <Stack>
            <p className={classes.total_title}>총 계</p>
            {

              Object.entries(total_data_args.args.average["총 계"]).map((el, index) => (
                <SingDataBox key={index} data={el[1] as string} avg_title={el[0]} />
              ))
            }
          </Stack>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container style={{height : "613.5px"}}>
          <Stack className={classes.chart_layout}>
            <div className={classes.chart_title}>세부항목 별 총계</div>
            <br />
            <div className={classes.selector_layout}>
            <TotalBranchSubjectSelector args={crime_branch_avg_subject_value} />
            <AvgSubjectOnChangeBtn />
            </div>
          </Stack>
          <MobileToTalCrimeBarCharts data={mobile_total_avg_catetory_args}/>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

export default MobileTotalCrimeBranchSlide;