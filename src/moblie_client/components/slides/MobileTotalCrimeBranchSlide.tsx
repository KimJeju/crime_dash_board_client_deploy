import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { makeStyles } from 'tss-react/mui';
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

    }
  };
});

function MobileTotalCrimeBranchSlide() {
  const [index, setIndex] = useState(0);
  const { classes } = useStyles();

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={classes.root}
      touch={true}
      controls={false}
      data-bs-theme="dark"
    >
      <Carousel.Item className={classes.single_data}>
        {/* {
          Object.entries(total_data_args.args.average["총 계"]).map((el, index) => (
            <SingDataBox key={index} data={el[1] as string} avg_title={el[0]} />
          ))
        } */}
      </Carousel.Item>
      <Carousel.Item>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>
    </Carousel>
  );
}

export default MobileTotalCrimeBranchSlide;