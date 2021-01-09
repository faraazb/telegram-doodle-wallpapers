import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const AntSwitch = withStyles((theme) => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: theme.palette.common.white,
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid #BD542C`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: '#BD542C'
    },
    checked: {},
}))(Switch);

export default function WallpaperPatternSwitch(props) {
    const [state, setState] = React.useState({
        checked: false,
    });
    //
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        props.setColorSwitchOn(event.target.checked);
    };

    return (
        <FormGroup>
            <Typography component="div">
                <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>BACKGROUND</Grid>
                    <Grid item>
                        <AntSwitch checked={state.checked} onChange={handleChange} name="checked" />
                    </Grid>
                    <Grid item>PATTERN</Grid>
                </Grid>
            </Typography>
        </FormGroup>
    );
}