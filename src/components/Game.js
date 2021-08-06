import React, { useState, useEffect } from 'react'
import waldo from '../assets/waldo.png'
import odlaw from '../assets/odlaw.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TimerIcon from '@material-ui/icons/Timer';
import Picture from './Picture';
import StopWatch from './StopWatch';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100vh'
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: {
        display: 'flex',
        height: '80px',
        justifyContent: 'center',
        alignItems: 'flex-end',
        fontSize: '1.5rem',
        "& svg": {
            margin: '0.3rem'
        }
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    characters: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '5rem 3rem',
        '& img': {
            margin: '1rem',
            width: '100px',
            height: '100px',
            borderRadius: '50%'
        }
    },
    gameOver: {
        filter: 'grayscale(100%)'
    }
}));



function Game() {

    const classes = useStyles();
    const [items, setItems] = useState([]);
    const [time, setTime] = useState('');
    const [score, setScore] = useState('')
    let [arr, setArr] = useState([]);


    const handelName = charName => {
        let newChar = charName
        setArr([...arr, newChar])

    }
    useEffect(() => {

        let newArr = arr.filter((item, i) => {
            return arr.indexOf(item) === i
        });

        setItems(newArr)

    }, [arr])


    const getScore = (score) => {

        setScore(score)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Where's Waldo
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} >
                    <StopWatch items={items} getScore={getScore} />
                    <TimerIcon />

                </div>

                <Divider />
                <div className={classes.characters}>
                    <h2>Find:</h2>
                    <img src={waldo} alt='waldo' className={items.includes('Waldo') ? classes.gameOver : ''} />
                    <h3>Waldo</h3>
                    <img src={odlaw} alt='odlaw' className={items.includes('Odlaw') ? classes.gameOver : ''} />
                    <h3> Odlaw</h3>
                </div>

            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Picture handelName={handelName} />

            </main>
        </div>
    )
}

export default Game;
