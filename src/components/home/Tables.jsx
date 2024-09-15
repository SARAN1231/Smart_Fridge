import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { ref, onValue } from "firebase/database"; // Import Realtime Database functions
import { database } from "../../firebase/firebase"; // Import Firebase config
import SensorLineChart from "./SensorLineChart"; // Import the SensorLineChart component
import Chart from "./Chart";

import { useNavigate } from 'react-router-dom'; 
import { Button } from "@mui/material";
// Function to map Firebase data to rows
function mapFirebaseData(key, data) {
  return {
    id: key,
    name: "Sensor Data", // You can replace this with a unique identifier if available
    humidity: data.humidity || 0,
    mq135: data.mq135 || 0,
    mq4: data.mq4 || 0,
    temperature: data.temperature || 0,
  };
}

const headCells = [
  { id: "serial", numeric: true, disablePadding: false, label: "No." }, // Serial number column
  { id: "name", numeric: false, disablePadding: true, label: "Sensor" },
  {
    id: "humidity",
    numeric: true,
    disablePadding: false,
    label: "Humidity (%)",
  },
  { id: "mq135", numeric: true, disablePadding: false, label: "MQ135" },
  { id: "mq4", numeric: true, disablePadding: false, label: "MQ4" },
  {
    id: "temperature",
    numeric: true,
    disablePadding: false,
    label: "Temperature (°C)",
  },
];
const commonCellStyle = {
  padding: "16px", // Adjust padding as needed
};

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


EnhancedTableHead.propTypes = {
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Sensor Values
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};



// Function to get the comparator function for sorting
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("humidity");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    const sensorRef = ref(database, "history/sensor");
    const fetchData = () => {
      onValue(sensorRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const formattedData = Object.keys(data).map((key) =>
            mapFirebaseData(key, data[key])
          );
          setRows(formattedData);
        }
      });
    };
    fetchData();
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const navigate = useNavigate();
  const handleViewChart = () => {
    navigate("/chart", { state: { sensorData: rows } });
  };

  return (
    <>
      <Box
  sx={{
    width: "80%",
    padding: 6,
    mb: 4,
    display: "flex",
    justifyContent: "space-between", // Spread heading and button apart
    alignItems: "center", // Vertically center both elements
  }}
>
  <h1 className="text-4xl font-bold" style={{ color: '#4CAF50' }}>Sensor Data</h1>
  <Button variant="contained" color="primary" onClick={handleViewChart}>
    View Chart
  </Button>
</Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Paper sx={{ width: "80%", mb: 2 }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .sort(getComparator(order, orderBy))
                  .map((row, index) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell sx={commonCellStyle} align="right">{page * rowsPerPage + index + 1}</TableCell> {/* Serial number */}
                      <TableCell sx={commonCellStyle} component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell sx={commonCellStyle} align="right">{row.humidity}</TableCell>
                      <TableCell sx={commonCellStyle} align="right">{row.mq135}</TableCell>
                      <TableCell sx={commonCellStyle} align="right">{row.mq4}</TableCell>
                      <TableCell sx={commonCellStyle} align="right">{row.temperature}</TableCell>
                    </TableRow>
                  ))}
                {rows.length === 0 && (
                  <TableRow>
                    <TableCell sx={commonCellStyle} colSpan={headCells.length}>No data available</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
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
