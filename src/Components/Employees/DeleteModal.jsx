import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import "../../Styles/Employee/modals.scss";
import  {deleteEmployee}  from "../../Redux/Actions/EmployeeActions";
const DeleteModal = (props) => {
  const dispatch = useDispatch();
  const { open, close, targetID } = props;
  const deleteHandler = () => {
    dispatch(deleteEmployee( targetID ));
   
    closeHandler();
  };
  const closeHandler = () => {
    close();
  };
  return (
    <Modal open={open} onClose={closeHandler}>
      <Box className="modal-delete">
        <Typography variant="h5" className="modal-delete__header">
          Confirm Delete
        </Typography>
        <Box className="modal-delete__button-container">
          <Button
            variant="contained"
            color="error"
            size="large"
            className="modal-delete__button"
            onClick={deleteHandler}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="success"
            size="large"
            className="modal-delete__button"
            onClick={closeHandler}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
