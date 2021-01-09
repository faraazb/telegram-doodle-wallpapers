import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '20vw',
        height: '100vh',
    },
    tile: {
        backgroundColor: "blue",
    },
}));


export default function PatternPicker(props) {
    const classes = useStyles();
    const currentPatternColor = props.pattern.patternColor;
    const currentPatternOpacity = props.pattern.opacity;

    return (
        <div className={classes.root}>
            {/*<p>Color is {props.color}</p>*/}
            <GridList cellHeight={100} className={classes.gridList} cols={1}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.id} cols={tile.cols || 1}
                                  onClick={event => props.setPattern(
                                      {id: tile.id, patternColor: currentPatternColor, opacity: currentPatternOpacity})}>
                        <img src={tile.img} alt={tile.id}/>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
