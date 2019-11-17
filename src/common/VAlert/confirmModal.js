// import React from 'react'

// export default function confirmModal() {
//     return (
//         <div>

//         </div>
//     )
// }




import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";

export default function ConfirmModal(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (onClick) => {
        setOpen(false);
        onClick&&onClick();
    };
    const { isDisabled, buttontext, dialogtitle, dialogcontent, dialogbuttons ,buttonstyle} = props;
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} disabled={isDisabled}
            style={buttonstyle}
            >
                {buttontext}
            </Button>
            <Dialog
                open={open}
                {...props}

                onClose={handleClose}
                // PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                {dialogtitle&&<DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
                    {dialogtitle}
                </DialogTitle>
                }
                <DialogContent>
                    <DialogContentText>
                        {dialogcontent}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {
                        dialogbuttons && dialogbuttons.map((buttonData, index) => {
                            return <Button key={index} autoFocus onClick={()=>handleClose(buttonData.onClick)} color="primary">
                                {buttonData.text}
                                  </Button>
                        })
                    }
                </DialogActions>
            </Dialog>
        </div>
    );
}

ConfirmModal.propTypes = {
    isDisabled: PropTypes.bool,
    buttontext: PropTypes.string,
    dialogbuttons:PropTypes.array.isRequired,
    dialogtitle:PropTypes.string,
    dialogcontent:PropTypes.string.isRequired,
    buttonstyle:PropTypes.object,
    dialogcontainerstyle:PropTypes.object,
}

