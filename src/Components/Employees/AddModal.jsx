import { Button, Grid, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postEmployee } from "../../Redux/Actions/EmployeeActions";
import "../../Styles/Employee/modals.scss";

const AddModal = (props) => {
  const dispatch =useDispatch();
    const isResponse = useSelector((state) => state.ReducerEmployee.isResponse);
  const { open, close } = props;
  const [inputData ,setInputData]=useState({
  
      name: "",
      email: "",
      dob: "",
      salary: "",
      gender: "",
  });
  const closeHandler = () => {
    close();
  };
  const changeHandler=(e)=>{
        const { name, value } = e.target;
    setInputData({
          ...inputData,
      [name]: value,
    })
  }
  const postHandler=(e)=>{
    e.preventDefault();
    const finalData={...inputData}
    dispatch(postEmployee(finalData))
    console.log(finalData)
     close();
  }
  if(isResponse){
    alert("ADDED SUCCESSFULLY")
  }
  return (
    <>
      <Modal open={open} onClose={closeHandler}>
        <Grid container className="modal-add">
          <Grid item sm={6}>
            <InputLabel className="modal-add__label">Name</InputLabel>
          </Grid>
          <Grid item sm={6}>
            <TextField className="modal-add__input" variant="outlined"       value={inputData.name}
            onChange={changeHandler}
            name="name" />
          </Grid>
            <Grid item sm={6}>
            <InputLabel className="modal-add__label"  >Email</InputLabel>
          </Grid>
          <Grid item sm={6}>
            <TextField className="modal-add__input" variant="outlined" value={inputData.email}
            onChange={changeHandler}
            name="email" type={"email"} />
          </Grid>
            <Grid item sm={6}>
            <InputLabel className="modal-add__label" >D.O.B</InputLabel>
          </Grid>
          <Grid item sm={6}>
            <TextField className="modal-add__input" variant="outlined" value={inputData.dob}
            onChange={changeHandler}
            name="dob" type={"date"}/>
          </Grid>
            <Grid item sm={6}>
            <InputLabel className="modal-add__label" > Salary</InputLabel>
          </Grid>
          <Grid item sm={6}>
            <TextField className="modal-add__input" variant="outlined" value={inputData.salary}
            onChange={changeHandler}
            name="salary" type={"number"}/>
          </Grid>
            <Grid item sm={6}>
            <InputLabel className="modal-add__label">Gender</InputLabel>
          </Grid>
          <Grid item sm={6}>
            <Select
          className="modal-add__input" variant="outlined" value={inputData.gender}
            onChange={changeHandler}
            name="gender" 
            autoWidth
            sx={{minWidth:"8vw"}}

        >
          <MenuItem value={"Male"} >Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
         
        </Select>
          </Grid>
           
         
            <Button size="large" color="success" variant="contained" sx={{margin:"auto",mt:"3vw"}} onClick={postHandler}>Add</Button>
        
            
        </Grid>
      </Modal>
    </>
  );
};

export default AddModal;
