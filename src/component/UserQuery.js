import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Typography } from "@mui/material";
import { get, ref } from "firebase/database";
import { db } from "../firebase.config";

const columns = [
    { id: "name", label: "Name", minWidth: 0, align: "center" },
    { id: "email", label: "Email", minWidth: 0, align: "center" },
    { id: "message", label: "Message", minWidth: 0, align: "center" },
    { id: "timeStamp", label: "Date & Time", minWidth: 0, align: "center" },
];

export default function UsersQuery() {
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    React.useEffect(() => {
        const fetchData = async () => {
            const queryref = ref(db, 'Querys')
            try {
                const snapshot = await get(queryref)
                const temp = Object.values(snapshot.val());
                console.log(temp)
                setData(temp)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [])
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            {/* <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
          width: "95%",
          py: 2,
        }}
      >
        {" "}
        <Button variant="contained" onClick={logOut}>
          Log out
        </Button>
      </Box> */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    my: 2,
                }}
            >
                <Typography variant="h5" my={2} color="initial">
                    Visitores Querys
                    {/* <br />
          <img src="Vector.png" alt="image" /> */}
                </Typography>
                <Paper sx={{ width: "90%" }}>
                    <TableContainer sx={{ height: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={`row.code${index}`}
                                            >
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {value ? value : "-"}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 100]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Box>
        </>
    );
}
