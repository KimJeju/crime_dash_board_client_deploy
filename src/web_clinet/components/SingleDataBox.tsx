import { BindingDataType } from "../pages/crime_branch/tab/TotalCrimeReport";
import { Grid } from "@mui/material";
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
    return {
        root: {
            padding: "10px",
            marginLeft: "1vw",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "1rem",
            transition: "0.5s",
            marginBottom : "10px",
            '&:hover': {
                backgroundColor: "white",
                boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px"
            }
        },
        title: {
            fontSize: "1.0rem",
            fontWeight: "bold"
        },
        content: {
            fontSize: "1.0rem",
            transition: "0.5s",
            '&:hover': {
                fontSize: "1.6rem"
            }
        }


    };
});


export default function SingDataBox({ avg_title, data }: BindingDataType) {

    const objectData: string = data as string;
    const { classes } = useStyles();

    if (objectData.toString() === "대분류") {
        return (<></>)
    } else {
        return (
            <Grid item xs={2} className={classes.root}>
                {objectData.toString() === "대분류" ? "" : <p className={classes.title}>{avg_title}</p>}

                {avg_title === "발생대비\n검거건수(%)" ?
                    <p className={classes.content}>{objectData} %</p>
                    :
                    <p className={classes.content}>{objectData} 건</p>
                }
            </Grid>
        )
    }


}