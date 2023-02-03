import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Menu from '@mui/material/Menu';
import "../../Styles/Employee/employee.scss";
import { useEffect, useState } from "react";
import { http } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployee } from "../../Redux/Actions/EmployeeActions";
<<<<<<< HEAD
import { Container } from "@mui/system";

=======
import { Box, Button, IconButton, MenuItem, Select } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";
>>>>>>> 79534b8f546f8addf788efe4f88ea5984409d612
const EmployeeTable = () => {
  const dispatch = useDispatch();
  const fetchedData = useSelector((state) => state.ReducerEmployee.details);
  console.log(fetchedData);
    const [actionsMenu, setActionsMenu] = useState(null);
     const [modalToOpen, setModalToOpen] = useState(null);
  const handleClick = e => {
    setActionsMenu(e.currentTarget);
  };
  const handleClose = () => {
    setActionsMenu(null);
  };
  const modalCloseHandler=()=>{
    setModalToOpen(null)
  }
  useEffect(() => {
       dispatch(fetchEmployee())
  }, []);
  const EditModalHandler=()=>{
    handleClose();setModalToOpen("EDIT")
  }
  const deleteModalHandler=()=>{
    handleClose();setModalToOpen("DELETE")
  }
 

  return (
<<<<<<< HEAD
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>D.O.B</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fetchedData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.dob}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
=======
    <Box>  
        <Button color="error" variant="contained" onClick={()=>setModalToOpen("ADD")}>ADD</Button>
       <TableContainer component={Paper} className="table__container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>D.O.B</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fetchedData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{row.salary}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>
                    <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        aria-label="Open to show more"
        title="Open to show more"
      >
       <MoreVertIcon/>
      </IconButton> 
   <Menu
        id="simple-menu"
        anchorEl={actionsMenu}
        keepMounted
        open={Boolean(actionsMenu)}
        onClose={handleClose}
      >

    <MenuItem onClick={EditModalHandler}>EDIT</MenuItem>
    <MenuItem onClick={deleteModalHandler} >DELETE</MenuItem>
      </Menu>
  
  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <AddModal open={modalToOpen=="ADD"} close={()=>modalCloseHandler()}/>
     <DeleteModal open={modalToOpen=="DELETE"} close={()=>modalCloseHandler()}/>
    </Box>
 
>>>>>>> 79534b8f546f8addf788efe4f88ea5984409d612
  );
};

export default EmployeeTable;
