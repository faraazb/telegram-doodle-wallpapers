import React from "react";
import {ReactComponent as Pattern1} from './patterns/pattern-1.svg'
import {ReactComponent as Pattern2} from './patterns/pattern-2-none.svg'
import {ReactComponent as Pattern3} from './patterns/pattern-3.svg'
import {ReactComponent as Pattern4} from './patterns/pattern-4.svg'
import {ReactComponent as Pattern5} from './patterns/pattern-5.svg'
import {ReactComponent as Pattern6} from './patterns/pattern-6.svg'
import {ReactComponent as Pattern7} from './patterns/pattern-7.svg'
import {ReactComponent as Pattern8} from './patterns/pattern-8.svg'
import {ReactComponent as Pattern9} from './patterns/pattern-9.svg'
import {ReactComponent as Pattern10} from './patterns/pattern-10.svg'
import {ReactComponent as Pattern11} from './patterns/pattern-11.svg'
import {ReactComponent as Pattern12} from './patterns/pattern-12.svg'
import {ReactComponent as Pattern13} from './patterns/pattern-13.svg'
import {ReactComponent as Pattern14} from './patterns/pattern-14.svg'
import {ReactComponent as Pattern15} from './patterns/pattern-15.svg'
import {ReactComponent as Pattern16} from './patterns/pattern-16.svg'
import {ReactComponent as Pattern17} from './patterns/pattern-17.svg'
import {ReactComponent as Pattern18} from './patterns/pattern-18.svg'
import {ReactComponent as Pattern19} from './patterns/pattern-19.svg'
import {ReactComponent as Pattern20} from './patterns/pattern-20.svg'
import {ReactComponent as Pattern21} from './patterns/pattern-21.svg'
import {ReactComponent as Pattern22} from './patterns/pattern-22.svg'
import {ReactComponent as Pattern23} from './patterns/pattern-23.svg'
import {ReactComponent as Pattern24} from './patterns/pattern-24.svg'
import {ReactComponent as Pattern25} from './patterns/pattern-25.svg'
import {ReactComponent as Pattern26} from './patterns/pattern-26.svg'
import {ReactComponent as Pattern27} from './patterns/pattern-27.svg'
import {ReactComponent as Pattern28} from './patterns/pattern-28.svg'
import {ReactComponent as Pattern29} from './patterns/pattern-29.svg'
import {ReactComponent as Pattern30} from './patterns/pattern-30.svg'
import {ReactComponent as Pattern31} from './patterns/pattern-31.svg'

function PatternLoader(props) {
    switch (props.pattern) {
        case 1:
            return (<Pattern1  opacity={props.opacity} fill={props.color} stroke={props.color} stroke-width={3.5} height={'100vh'}/>);
            // return (<Pattern1 style={{fill:'#E0E03A', stroke:'#E0E03A', strokeMiterLimit:10}} />);
        case 2:
            return (<Pattern2 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={3.5} height={'100vh'} />);
        case 3:
            return (<Pattern3 opacity={props.opacity} stroke={props.color} fill={props.color} height={'100vh'} />);
        case 4:
            return (<Pattern4 opacity={props.opacity} stroke={props.color} fill={props.color} height={'100vh'} />);
        case 5:
            return (<Pattern5 opacity={props.opacity} stroke={props.color} stroke-width={1.5} fill={props.color} height={'100vh'} />);
        case 6:
            return (<Pattern6 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={0.5} height={'100vh'} />);
        case 7:
            return (<Pattern7 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={1.5} height={'100vh'} />);
        case 8:
            return (<Pattern8 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={4.5} height={'100vh'} />);
        case 9:
            return (<Pattern9 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={4.5} height={'100vh'} />);
        case 10:
            return (<Pattern10 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={4.5} height={'100vh'} />);
        case 11:
            return (<Pattern11 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={4.5} height={'100vh'} />);
        case 12:
            return (<Pattern12 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={4.5} height={'100vh'} />);
        case 13:
            return (<Pattern13 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={3.5} height={'100vh'} />);
        case 14:
            return (<Pattern14 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={3.5} height={'100vh'} />);
        case 15:
            return (<Pattern15 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={3.5} height={'100vh'} />);
        case 16:
            return (<Pattern16 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={3.5} height={'100vh'} />);
        case 17:
            return (<Pattern17 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={3.5} height={'100vh'} />);
        case 18:
            return (<Pattern18 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={0.5} height={'100vh'} />);
        case 19:
            return (<Pattern19 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={3.5} height={'100vh'} />);
        case 20:
            return (<Pattern20 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={1.5} height={'100vh'} />);
        case 21:
            return (<Pattern21 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={3.5} height={'100vh'} />);
        case 22:
            return (<Pattern22 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={4.5} height={'100vh'} />);
        case 23:
            return (<Pattern23 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={4.5} height={'100vh'} />);
        case 24:
            return (<Pattern24 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={4.5} height={'100vh'} />);
        case 25:
            return (<Pattern25 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={1.5} height={'100vh'} />);
        case 26:
            return (<Pattern26 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={2.5} height={'100vh'} />);
        case 27:
            return (<Pattern27 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={2.5} height={'100vh'} />);
        case 28:
            return (<Pattern28 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={1.5} height={'100vh'} />);
        case 29:
            return (<Pattern29 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={3.5} height={'100vh'} />);
        case 30:
            return (<Pattern30 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={3.5} height={'100vh'} />);
        case 31:
            return (<Pattern31 opacity={props.opacity} stroke={props.color} fill={props.color} stroke-width={3.5} height={'100vh'} />);
        default:
            return (<p>Pattern is null</p>)

    }
}

function Wallpaper(props) {
    return (
        <div>
            <p>Pattern is {props.pattern.id}. And color is {props.pattern.patternColor}.<br/>
                And opacity is {props.pattern.opacity}</p>
            <svg id={'wallpaper-svg'} height={609} width={281.25}>
                <rect height={609} width={281.25} preserveAspectRatio={'xMidYMid meet'} fill={props.color}/>
                <PatternLoader pattern={props.pattern.id} color={props.pattern.patternColor}
                               opacity={props.pattern.opacity}/>
            </svg>
        </div>

    );

}

export default Wallpaper