import React from 'react';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';


function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

function PatternIntensitySlider(props) {
    const id = props.pattern.id;
    const color = props.pattern.patternColor;

    return (
            // <div >
            //     <Slider
            //         ValueLabelComponent={ValueLabelComponent}
            //         // aria-label="custom thumb label"
            //         defaultValue={0.8}
            //         min={0.0}
            //         step={0.05}
            //         max={1.0}
            //         // track={}
            //     />
            // </div>
            // <p>
            //     <div className={classes.margin} />
            //     <Typography gutterBottom>Pattern Intensity</Typography>
                <Slider
                    ValueLabelComponent={ValueLabelComponent}
                    // aria-label="custom thumb label"
                    defaultValue={0.8}
                    min={0.0}
                    step={0.05}
                    max={1.0}
                    onChange={(event, value) =>
                        props.setPattern({id:id, patternColor:color, opacity: value})}
                />
    )
}

export default PatternIntensitySlider