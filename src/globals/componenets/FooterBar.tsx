import { makeStyles } from "tss-react/mui";
const useStyles = makeStyles()(() => {
  return {
    root: {
      width: "100%",
      height: "50px",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center ",
      flexDirection : "column",
      fontSize : "0.8rem",
    
    },
  };
});

export function FooterBar() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      Copyright 2024. Kunhwi Kim All rights reserved.
      <a href="mailto:h.hwi9367@gmail.com?subject=안녕하세요.">Contact : h.hwi9367@gmail.com</a>
    </div>
  )
}