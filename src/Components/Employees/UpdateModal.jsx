import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";

import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleEmployee,
  updateEmployee,
} from "../../Redux/Actions/EmployeeActions";
// import { updateEmployee } from "../../Redux/Actions/EmployeeActions";
import "../../Styles/Employee/modals.scss";

const UpdateModal = (props) => {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.reducer.employee);
  const { open, close, targetID } = props;
  const initialInputData = {
    name: "",
    email: "",
    dob: "",
    salary: "",
    gender: "",
  };
  useEffect(() => {
    if (open) dispatch(getSingleEmployee(targetID));
  }, [open, dispatch, targetID]);

  const [inputData, setInputData] = useState(initialInputData);
  useEffect(() => {
    if (employee) {
      setInputData({ ...employee });
    }
  }, [employee]);
  const closeHandler = () => {
    close();
    setInputData("");
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const UpdateHandler = (e) => {
    e.preventDefault();
    const finalData = { ...inputData };
    dispatch(updateEmployee({ data: finalData, id: targetID }));
    close();
  };
  // console.log(employee);

  return (
    <>
      {
        <Modal open={open} onClose={closeHandler}>
          <Grid container className="modal-add">
            <Grid item sm={6}>
              <InputLabel className="modal-add__label">Name</InputLabel>
            </Grid>
            <Grid item sm={6}>
              <TextField
                className="modal-add__input"
                variant="outlined"
                value={inputData.name || ""}
                onChange={changeHandler}
                name="name"
              />
            </Grid>
            <Grid item sm={6}>
              <InputLabel className="modal-add__label">Email</InputLabel>
            </Grid>
            <Grid item sm={6}>
              <TextField
                className="modal-add__input"
                variant="outlined"
                value={inputData.email || ""}
                onChange={changeHandler}
                name="email"
                type={"email"}
              />
            </Grid>
            <Grid item sm={6}>
              <InputLabel className="modal-add__label">D.O.B</InputLabel>
            </Grid>
            <Grid item sm={6}>
              <TextField
                className="modal-add__input"
                variant="outlined"
                value={inputData.dob || ""}
                onChange={changeHandler}
                name="dob"
                type={"date"}
              />
            </Grid>
            <Grid item sm={6}>
              <InputLabel className="modal-add__label"> Salary</InputLabel>
            </Grid>
            <Grid item sm={6}>
              <TextField
                className="modal-add__input"
                variant="outlined"
                value={inputData.salary || ""}
                onChange={changeHandler}
                name="salary"
                type={"number"}
              />
            </Grid>
            <Grid item sm={6}>
              <InputLabel className="modal-add__label">Gender</InputLabel>
            </Grid>
            <Grid item sm={6}>
              <Select
                className="modal-add__input"
                variant="outlined"
                value={inputData.gender || ""}
                onChange={changeHandler}
                name="gender"
                autoWidth
                sx={{ minWidth: "8vw" }}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </Grid>

            <Box className="modal-add__button-container">
              <Button
                size="large"
                color="success"
                variant="contained"
                onClick={UpdateHandler}
              >
                Update
              </Button>
              <Button
                variant="contained"
                color="error"
                size="large"
                className="modal-add__button"
                onClick={closeHandler}
              >
                Cancel
              </Button>
            </Box>
          </Grid>
        </Modal>
      }
    </>
  );
};

export default UpdateModal;
