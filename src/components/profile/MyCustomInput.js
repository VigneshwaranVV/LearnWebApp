import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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

export default function MyCustomInput(props) {
    const {
        input: { onChange, name, label, value },
        meta: { error, touched }
    } = { ...props };
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
                value={value}
                {...props}
                {...props.input}
            />
            {touched && <p style={{ color: "red", fontWeight: "bold" }}>{error && error}</p>}
        </div>
    )
}