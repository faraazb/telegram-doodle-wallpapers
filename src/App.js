import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ColorPicker from "./ColorPicker";
import PatternPicker from "./PatternPicker";
import Wallpaper from "./Wallpaper";
import WallpaperPatternSwitch from "./SliderSwitch";
import PatternIntensitySlider from "./PatternIntensitySlider";

const saveSvgAsPng = require('save-svg-as-png');

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        // height: '30vh',
        // backgroundImage: 'url(https://source.unsplash.com/random)',
        // backgroundRepeat: 'no-repeat',
        // backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    paper: {
        margin: theme.spacing(0, 1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    board: {
        margin: theme.spacing(0, 1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: '#2a5a6e',
    },
    submit: {
        flex: 1,
    },
    wallpaper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}));
//remove all color from original svg, it should appear
// total white, then svg_optimizer and then do import for wallpaper studio
//for grid tile use a separate png maybe

function saveWallpaper(patternId) {
    // const patternId = '1'
    const name = 'wallpaper'+patternId+'.png'
    const imageOptions = {
        scale: 5,
        encoderOptions: 1,
    }

    saveSvgAsPng.saveSvgAsPng(document.getElementById('wallpaper-svg'), name, imageOptions);

}

function App() {
    const [color, setColor] = useState('#284555');
    const [pattern, setPattern] = useState({id: 1, patternColor: '#97B6C2', opacity:0.8});
    const [colorSwitchOn, setColorSwitchOn] = useState(false)
    // const [patternColor, setPatternColor] = useState('#fff')
    const classes = useStyles();
    // const save = saveWallpaper();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            {/*12|8|9*/}
            <Grid item xs={10} sm={10} md={8} className={classes.image} >
                <Grid item className={classes.wallpaper}>
                    <div className={classes.board}>
                        <Wallpaper color={color} pattern={pattern}/>
                        <PatternPicker color={color} pattern={pattern} setPattern={setPattern}/>
                    </div>
                    {/*<PatternPicker color={color} pattern={pattern} setPattern={setPattern}/>*/}
                </Grid>                {/*<Grid item xs={2} sm={2} md={2}>*/}
                {/*    */}
                {/*</Grid>*/}
            </Grid>
            <Grid item xs={2} sm={2} md={2} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    {/*<PatternPicker color={color} pattern={pattern} setPattern={setPattern}/>*/}
                    {/*<p>PATTERN INTENSITY</p>*/}
                    {/*<PatternIntensitySlider />*/}
                    <div className={classes.paper} >
                        <p>PATTERN OPACITY</p>
                        <PatternIntensitySlider pattern={pattern} setPattern={setPattern}/>
                    </div>
                    {/*<svg fill="current" stroke="current" />*/}
                    <WallpaperPatternSwitch colorSwitchOn={colorSwitchOn} setColorSwitchOn={setColorSwitchOn}/>
                    {/*<p>Color switch is on {colorSwitchOn ? 'pattern' : 'bg'}</p>*/}
                    <ColorPicker color={color} colorSwitchOn={colorSwitchOn} setColor={setColor}
                                 pattern={pattern} setPattern={setPattern}/>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={function () {
                            saveWallpaper(pattern.id);
                        }}
                    >
                        DOWNLOAD
                    </Button>
                </div>
            </Grid>
        </Grid>
    );

}

export default App
