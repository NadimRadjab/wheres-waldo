import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Button } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function Form({ handleRecord, items }) {
    const [playerName, setPlayerName] = useState('');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        items.length === 2
            ? setOpen(true)
            : setOpen(false)
    }, [items])
    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = e => {
        setPlayerName(e.target.value);
    }
    const handleSubmit = () => {
        handleRecord(playerName)
        setPlayerName('')
        setOpen(false);
    }
    return (
        <div>
            <Dialog

                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Set A Record!</DialogTitle>
                <ValidatorForm onSubmit={handleSubmit} >
                    <DialogContent>
                        <DialogContentText style={{ width: '400px' }}>
                            Type in your name to set up a record.
                        </DialogContentText>

                        <TextValidator
                            fullWidth
                            validators={['required']}
                            errorMessages={['Enter a Name']}
                            name='name'
                            label='Name'
                            value={playerName}
                            onChange={handleChange} />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button color='primary' type='Submit'>
                            Add Record
                        </Button>

                    </DialogActions>
                </ValidatorForm>
            </Dialog>

        </div>
    )
}

export default Form;
