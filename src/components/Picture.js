import React, { useState, useRef } from 'react'
import { Paper } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import waldo from '../assets/wheres-waldo.jpg'




function Picture({ handleGame }) {
    const inputRef = useRef();

    const [anchorEl, setAnchorEl] = useState(null);
    const [position, setPosition] = useState({ x: '', y: '' });
    const [odlawPosition, setOdlawPosition] = useState({ x: '', y: '' });
    const [waldoPosition, setWaldoPosition] = useState({ x: '', y: '' });
    const [isMenuOpenOdlaw, setMenuOdlaw] = useState(false);
    const [isMenuOpenWaldo, setMenuWaldo] = useState(false);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);

    };

    const handleClose = () => {
        setAnchorEl(null);
        setTimeout(() => {
            setMenuOdlaw(false);
            setMenuWaldo(false);
        }, 200)

    }

    const cord = e => {
        let elem = inputRef.current.getBoundingClientRect();
        let olyCordX = 346 - elem.left
        let olyCordY = 859 - elem.top

        let waldoCordX = 1565 - elem.left
        let waldoCordY = 184 - elem.top

        let mouseX = e.pageX - elem.left
        let mouseY = e.pageY - elem.top

        let Rx = elem.width / 1617
        let Ry = elem.height / 997.65

        let odlawX = (Rx * olyCordX)
        let odlawY = (Ry * olyCordY)
        let waldoX = Rx * waldoCordX
        let waldoY = Rx * waldoCordY

        handleClick(e)
        setPosition({ x: mouseX, y: mouseY })
        setOdlawPosition({ x: odlawX, y: odlawY })
        setWaldoPosition({ x: waldoX, y: waldoY })

    }
    const handleOdlaw = () => {

        let odlaw = document.querySelector('#Odlow');
        if (odlaw.textContent === 'Odlaw') handleGame('Odlaw');

        handleClose();
        setTimeout(() => {
            setMenuOdlaw(false);
        }, 200)


    }
    const handleWaldo = () => {

        let waldo = document.querySelector('#Waldo');
        if (waldo.textContent === 'Waldo') handleGame('Waldo');

        handleClose();
        setTimeout(() => {
            setMenuWaldo(false);
        }, 200)


    }
    const handleMenuOdlow = (e) => {
        setMenuOdlaw(true);
        handleClick(e);
    }
    const handleMenuWaldo = (e) => {
        setMenuWaldo(true);
        handleClick(e);
    }


    let menu;
    if (isMenuOpenOdlaw) {
        menu = <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleOdlaw}>Odlaw</MenuItem>
            <MenuItem onClick={handleClose}>Waldo</MenuItem>
        </Menu>
    } else if (isMenuOpenWaldo) {
        menu = <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Odlaw</MenuItem>
            <MenuItem onClick={handleWaldo}>Waldo</MenuItem>
        </Menu>
    } else {
        menu = <Menu
            getContentAnchorEl={null}
            id="simple-menu"
            style={{ left: position.x, top: position.y }}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Odlaw</MenuItem>
            <MenuItem onClick={handleClose}>Waldo</MenuItem>
        </Menu>

    }

    return (

        <Paper style={{ position: 'absolute' }}  >
            <div>
                <img ref={inputRef} onClick={cord} src={waldo} alt='waldo img' style={{ width: '100%' }} />

                <span
                    id='Odlow' onClick={handleMenuOdlow} style={{ position: 'absolute', left: odlawPosition.x - 10, top: odlawPosition.y - 25, width: '30px', height: '30px', fontSize: 0 }}>
                    Odlaw

                </span>
                <span
                    id='Waldo' onClick={handleMenuWaldo} style={{ position: 'absolute', left: waldoPosition.x, top: waldoPosition.y - 5, width: '30px', height: '30px', background: 'blue' }}>
                    Waldo
                </span>

            </div>
            {menu}

        </Paper>

    )
}

export default Picture;
