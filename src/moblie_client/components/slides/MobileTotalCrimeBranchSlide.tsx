import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { makeStyles } from 'tss-react/mui';
import { IArgumentType } from '../../../web_clinet/interfaces/IPropsModel';
import { totalCrimebranchState } from '../../../web_clinet/state/crime_branch/total/CrimeBranchState';
import { useRecoilValue } from 'recoil';
// import { dynamicSubCategoryState } from '../../../web_clinet/state/crime_branch/total/DynamicSubjectState';
// import { arrestAverageState, occurrencesAverageState } from '../../../web_clinet/state/crime_branch/total/SubjectAverageState';
import SingDataBox from '../../../web_clinet/components/SingleDataBox';
const useStyles = makeStyles()(() => {
  return {
    root: {
      height: "calc(100%)",
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
    single_data : {
      display : "flex",
      flexDirection : "column",
      padding : "1%"

    }
  };
});

function MobileTotalCrimeBranchSlide() {
  const [index, setIndex] = useState(0);
  const { classes } = useStyles();

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

     //즉각적인 데이터 변동이 어려운 차트에 대하여 값을 직접 대입해준다.
     const total_data_args : IArgumentType = {
      key : "종합 총계",
      args : useRecoilValue(totalCrimebranchState)
  }

  // const sub_catetory_args : IArgumentType = {
  //     key : "소분류 범죄 발생비율 (%)",
  //     args : useRecoilValue(dynamicSubCategoryState)
  // }

  // const occucrrences_args : IArgumentType = {
  //     key : "대분류 범죄 발생건수 (건)",
  //     args : useRecoilValue(occurrencesAverageState)
  // } 

  // const arrest_args : IArgumentType = {
  //     key : "대분류 범죄 검거건수 (건)",
  //     args : useRecoilValue(arrestAverageState)
  // } 

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={classes.root}
      touch={true}
      controls={false}
      data-bs-theme="dark"
      interval={null}
    >
      <Carousel.Item className={classes.single_data}>
        {
          Object.entries(total_data_args.args.average["총 계"]).map((el, index) => (
            <SingDataBox key={index} data={el[1] as string} avg_title={el[0]} />
          ))
        }
      </Carousel.Item>
      <Carousel.Item>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>
    </Carousel>
  );
}

export default MobileTotalCrimeBranchSlide;