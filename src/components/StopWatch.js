import React, { useState, useEffect } from 'react'

function StopWatch({ items, getScore }) {
    const [isActive, setIsActive] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [scoreTime, setScoreTime] = useState('')
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };

    }, [isActive, isPaused]);


    let milliseconds = ("0" + ((time / 10) % 100)).slice(-2)
    let seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2)

    useEffect(() => {
        setScoreTime(`${minutes}:${seconds}:${milliseconds}`)

        if (items.length >= 2) {
            setIsPaused(true)
            getScore(scoreTime)
        } else {
            setIsPaused(false)
        }
    }, [time])
    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <div>
            <span className="digits">
                {minutes}:
            </span>
            <span className="digits">
                {seconds}:
            </span>
            <span className="digits mili-sec">
                {milliseconds}
            </span>
        </div>
    )
}

export default StopWatch;
