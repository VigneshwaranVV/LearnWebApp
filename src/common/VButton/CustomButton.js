import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

export default function CustomButton(props) {
    const { label, onClick, isDisabled } = { ...props }
    return (
        <Button variant="outlined"  onClick={onClick} disabled={isDisabled}
        color="primary" style={{margin:20,padding:10}}
        >
            {label}
        </Button>
    )
}

CustomButton.propTypes = {
    isDisabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
}
