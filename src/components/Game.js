import React, { useState, useEffect } from 'react'
import { useStopwatch } from 'react-timer-hook';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
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
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));



function Game() {

    const classes = useStyles();
    const [items, setItems] = useState([]);
    const [time, setTime] = useState('');
    const [score, setScore] = useState('')
    let [arr, setArr] = useState([]);


    const handelGame = charName => {
        let newChar = charName
        setArr([...arr, newChar])

    }
    useEffect(() => {

        let newArr = arr.filter((item, i) => {
            return arr.indexOf(item) === i
        });

        setItems(newArr)
        console.log(score)
        console.log(items)


    }, [arr])

    useEffect(() => {
        const interval = setInterval(() => {
            // setTime(` ${hours} ${minutes} ${seconds} ${new Date().getMilliseconds()}`);

        }, 100);

        return () => clearInterval(interval);

    }, [])
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
                <div className={classes.toolbar} />
                <StopWatch items={items} getScore={getScore} />


                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Picture handleGame={handelGame} />

            </main>
        </div>
    )
}

export default Game;
