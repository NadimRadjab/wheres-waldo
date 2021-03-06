import React, { useState, useEffect } from 'react'
import waldo from '../assets/waldo.png'
import odlaw from '../assets/odlaw.jpeg'
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TimerIcon from '@material-ui/icons/Timer';
import Form from './Form';
import Picture from './Picture';
import StopWatch from './StopWatch';
import styles from '../styles/GameStyles';
import ScoreBoard from './ScoreBoard';
import { db } from '../firebase/config';



function Game({ classes }) {

    const [items, setItems] = useState([]);
    const [score, setScore] = useState('')
    const [record, setRecord] = useState([])
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


    }, [arr]);

    useEffect(() => {
        let newArr = []
        db.collection('Records')
            .limit(10)
            .get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    const newRecord = {
                        id: doc.id,
                        playerName: doc.data().name,
                        time: doc.data().time
                    };
                    newArr.push(newRecord)

                    //Sorts By Time
                    let sorted = newArr.sort((a, b) => {

                        return a.time - b.time
                    })
                    //Makes The time in a string.
                    let maped = sorted.map(item => {
                        let milliseconds = ("0" + ((item.time / 10) % 100)).slice(-2);
                        let seconds = ("0" + Math.floor((item.time / 1000) % 60)).slice(-2);
                        let minutes = ("0" + Math.floor((item.time / 60000) % 60)).slice(-2);
                        let fixedTime = `${minutes}:${seconds}:${milliseconds}`;
                        let obj = {
                            id: item.id,
                            name: item.playerName,
                            time: fixedTime
                        }
                        return obj

                    })

                    setRecord(maped)

                })

            })

    }, [arr])


    const getScore = (score) => {
        setScore(score)
    }

    const handleSubmit = playerName => {

        db.collection('Records').add({
            name: playerName,
            time: score
        })
        setScore('');
        setItems([]);
        setArr([]);
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
                <ScoreBoard record={record} />
                <Divider />
                <div className={classes.characters}>
                    <h2>Find</h2>
                    <img src={waldo} alt='waldo' className={items.includes('Waldo') ? classes.gameOver : ''} />
                    <h3>Waldo</h3>
                    <img src={odlaw} alt='odlaw' className={items.includes('Odlaw') ? classes.gameOver : ''} />
                    <h3> Odlaw</h3>

                </div>
                <Form items={items} handleRecord={handleSubmit} />

            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Picture handelName={handelName} />

            </main>
        </div>
    )
}

export default withStyles(styles)(Game);
