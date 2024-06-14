import { ResponsiveCirclePackingCanvas } from '@nivo/circle-packing'
import { get_swarm_chart_data_key_pair_value } from '../../../utils/ChartDataUtil'
import { Grid, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { IArgumentType } from '../../../interfaces/IPropsModel'

const useStyles = makeStyles()(() => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            height: "calc(40.5%)",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "1rem",
            transition: "0.2s",
            "&:hover": {
                backgroundColor: "white",
                boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px",

            }
        },
    };
});

export default function SwarmPlotChart({data}: {data: IArgumentType}) {

    const { classes } = useStyles();
    const tuple_data = get_swarm_chart_data_key_pair_value(data.args);
    
    return (
        <Grid item xs={12} className={classes.root}>
            <Typography>{data.key}</Typography>
            <ResponsiveCirclePackingCanvas
                data={tuple_data}
                margin={{ top: 5, right: 20, bottom: 20, left: 20 }}
                id="name"
                colors={{ scheme: 'spectral' }}
                colorBy="id"
                childColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'brighter',
                            0.4
                        ]
                    ]
                }}
                padding={20}
                leavesOnly={true}
                enableLabels={true}
                label="id"
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2.4
                        ]
                    ]
                }}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.3
                        ]
                    ]
                }}
                animate={true}
            />
        </Grid>
    )
}
