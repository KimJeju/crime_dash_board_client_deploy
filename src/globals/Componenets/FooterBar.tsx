import { makeStyles } from "tss-react/mui";
const useStyles = makeStyles()(() => {
  return {
    root: {
      // width: "100%",
      // height: "50px",
    },
  };
});

export function FooterBar() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      aaaa
    </div>
  )
}