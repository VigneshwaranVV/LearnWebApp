import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function CustomInputField(props) {
    const classes = useStyles();
    const { isDisabled, value, onChange} = props;
    return (
        <div>
            <TextField
                value={value && value}
                disabled={isDisabled && isDisabled}
                id="outlined-basic"
                className={classes.textField}
                label="Outlined"
                margin="normal"
                variant="outlined"
                onChange={onChange}
                {...props}
            />
        </div>
    )
}

CustomInputField.propTypes = {
    isDisabled: PropTypes.bool,
    value: PropTypes.string,
    onChange :PropTypes.func.isRequired
}