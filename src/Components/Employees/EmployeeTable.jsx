import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../Styles/Employee/employee.scss";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchEmployee } from "../../Redux/Actions/EmployeeActions";
import { Box, Button } from "@mui/material";

import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";
const EmployeeTable = () => {
  const dispatch = useDispatch();
  // const fetchedData = useSelector((state) => state.employees.details);
  const fetchedData = useSelector((state) => state.reducer.employees);

  const [modalToOpen, setModalToOpen] = useState(null);
  const [currentID, setCurrentId] = useState(null);

  const modalCloseHandler = () => {
    setModalToOpen(null);
  };
  useEffect(() => {
    dispatch(fetchEmployee());
  }, [dispatch]);

  const EditModalHandler = (id) => {
    setCurrentId(id);
    setModalToOpen("EDIT");
  };
  const deleteModalHandler = (id) => {
    setCurrentId(id);
    setModalToOpen("DELETE");
  };
  console.log(fetchedData);

  return (
    <Box sx={{ width: "90vw", margin: "auto",pt:"2vh" }}>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setModalToOpen("ADD")}
       size='large'
      >
        ADD
      </Button>
      <TableContainer component={Paper} className="table__container">
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
          <TableHead className="table__container-head">
            <TableRow>
              <TableCell className="table__container-head-text">Name</TableCell>
              <TableCell className="table__container-head-text">Email</TableCell>
              <TableCell className="table__container-head-text">D.O.B</TableCell>
              <TableCell className="table__container-head-text">Salary</TableCell>
              <TableCell className="table__container-head-text">Gender</TableCell>
              <TableCell className="table__container-head-text" align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fetchedData.length !== 0
              ? fetchedData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.dob}</TableCell>
                    <TableCell>{row.salary}</TableCell>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => EditModalHandler(row.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ marginLeft: "2vw" }}
                        onClick={() => deleteModalHandler(row.id)}
                      >
                        delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
      <AddModal
        open={modalToOpen === "ADD"}
        close={() => modalCloseHandler()}
      />
      <DeleteModal
        open={modalToOpen === "DELETE"}
        close={() => modalCloseHandler()}
        targetID={currentID}
      />
      <UpdateModal
        open={modalToOpen === "EDIT"}
        close={() => modalCloseHandler()}
        targetID={currentID}
      />
    </Box>
  );
};

export default EmployeeTable;
