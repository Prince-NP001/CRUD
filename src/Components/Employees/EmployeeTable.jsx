import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../Styles/Employee/employee.scss";
import { useEffect } from "react";
import { http } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployee } from "../../Redux/Actions/EmployeeActions";

const EmployeeTable = () => {
  const dispatch = useDispatch();
  const fetchedData = useSelector((state) => state.GetReducerEmployee);
  console.log(fetchedData);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await http.get("/employee");
    const data = res.data.data;

    dispatch(fetchEmployee(data));
  };

  return (
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
              <TableCell>{row.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
