import {
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
import { updateEmployee } from "../../Redux/Reducer/Reducer";
// import { updateEmployee } from "../../Redux/Actions/EmployeeActions";
import "../../Styles/Employee/modals.scss";

const UpdateModal = (props) => {
  const dispatch = useDispatch();
  // const isResponse = useSelector((state) => state.ReducerEmployee.isResponse);
  const { open, close, targetID } = props;
  const initialInputData = {
    name: "",
    email: "",
    dob: "",
    salary: "",
    gender: "",
  };
  const [inputData, setInputData] = useState(initialInputData);
  const closeHandler = () => {
    close();
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  const UpdateHandler = (e) => {
    const finalData = { ...inputData };
    dispatch(updateEmployee({ id: targetID, employee: finalData }));

    close();
  };
  // console.log(targetID);

  return (
    <>
      <Modal open={open} onClose={closeHandler}>
        <Grid container className="modal-add">
          <Grid item sm={6}>
            <InputLabel className="modal-add__label">Name</InputLabel>
          </Grid>
          <Grid item sm={6}>
            <TextField
              className="modal-add__input"
              variant="outlined"
              value={inputData.name}
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
              value={inputData.email}
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
              value={inputData.dob}
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
              value={inputData.salary}
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
              value={inputData.gender}
              onChange={changeHandler}
              name="gender"
              autoWidth
              sx={{ minWidth: "8vw" }}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </Grid>

          <Button
            size="large"
            color="success"
            variant="contained"
            sx={{ margin: "auto", mt: "3vw" }}
            onClick={UpdateHandler}
          >
            Update
          </Button>
        </Grid>
      </Modal>
    </>
  );
};

export default UpdateModal;
