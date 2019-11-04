import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function MyCustomInput(props) {
    const {
        input: { value, onChange, name ,label}
    } = props
    const classes = useStyles();
    return (
        <div>
            <TextField
                name={name}
                id="standard-basic"
                className={classes.textField}
                label={label}
                margin="normal"
                onChange={onChange}
                {...props}
            />
        </div>
    )
}