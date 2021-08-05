import React, { useRef } from 'react'
import { Paper } from '@material-ui/core';
import waldo from '../assets/wheres-waldo.jpg'




function Picture() {
    const inputRef = useRef();
    const cord = e => {
        let elem = inputRef.current.getBoundingClientRect();

        let olyCordX = 346 - elem.left
        let olyCordY = 859 - elem.top
        let waldoCordX = 1300
        let waldoCordY = 98
        let x = 1617
        let y = 997.65

        let Rx = elem.width / x
        let Ry = elem.height / y


        console.log(elem)
        console.log(e.pageX - elem.left, e.pageY - elem.top)
        console.log((Rx * olyCordX).toFixed(), (Ry * olyCordY).toFixed())
        console.log((Rx * waldoCordX).toFixed(), (Ry * waldoCordY).toFixed())
        if (e.pageX - elem.left >= (Rx * olyCordX - 4).toFixed() && e.pageX - elem.left <= (Rx * olyCordX + 10).toFixed()) {

        }


    }

    return (
        <Paper  >
            <img ref={inputRef} onClick={cord} src={waldo} alt='waldo img' style={{ width: '100%' }} />

        </Paper>
    )
}

export default Picture;
