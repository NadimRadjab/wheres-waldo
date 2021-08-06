import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';


const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
});
function ScoreBoard({ record }) {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const classes = useStyles();
    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Button onClick={handleClickOpen('paper')}>
                Score Board <FormatListNumberedIcon style={{ margin: '0.5rem' }} />
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Score Board</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>

                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Time</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {record.map((row) => (
                                <TableRow key={row.playerName}>
                                    <TableCell component="th" scope="row">
                                        {row.playerName}
                                    </TableCell>
                                    <TableCell align="right">{row.time}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ScoreBoard
