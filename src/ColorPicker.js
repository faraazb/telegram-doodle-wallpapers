import React from "react";
import {SketchPicker} from "react-color";

function ColorPicker(props) {
    // const [color, setColor] = useState('#fff');
    // const onColorChange = onColorChange();
    // const colorSetter = {props.set || props.setPattern}
    let updatedPattern = Object.assign({}, props.pattern);
    const setColor = function (color) {
        if (props.colorSwitchOn===true) {
            updatedPattern.patternColor = color.hex;
            props.setPattern(updatedPattern);
        } else {
            props.setColor(color.hex);
        }
    };
    // let setColour;
    // setColour = {color => (props.setColor(color.hex) ? props.setPattern({patternColor: color.hex}))};
    return (
        <p>
            <SketchPicker
                disableAlpha={ true }
                presetColors ={ [] }
                color={ props.colorSwitchOn ? props.pattern.patternColor : props.color }
                onChange={(color) => setColor(color)}
                // onChange={(color) => {props.colorSwitchOn ? props.setPattern({patternColor: color.hex}) : props.setColor(color.hex)}}
            />
            {/*<p>Color is {props.color}</p>*/}
        </p>
    );

}

export default ColorPicker