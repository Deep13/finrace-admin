import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useMediaQuery, useTheme, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

  const handleEdit = (event, row) => {
    event.stopPropagation();  // Prevent row selection
    console.log("Editing row: ", row);
  };

  const handleDelete = (event, id) => {
    event.stopPropagation();  // Prevent row selection
    console.log("Deleting row with ID: ", id);
  };

const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'firstName', headerName: 'First name', flex: 1 },
  { field: 'lastName', headerName: 'Last name', flex: 1 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    flex: 1,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'Full name of the person.',
    flex: 2,  // This column will take more space compared to others
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  // Edit Column
  {
    field: 'edit',
    headerName: 'Edit',
    flex: 1,  // Make sure this takes its share of space
    renderCell: (params) => (
      <IconButton 
        color="primary" 
        onClick={(event) => handleEdit(event, params.row)}  // Added event parameter
      >
        <EditIcon />
      </IconButton>
    ),
  },
  // Delete Column
  {
    field: 'delete',
    headerName: 'Delete',
    flex: 1,  // Make sure this takes its share of space
    renderCell: (params) => (
      <IconButton 
        color="secondary" 
        onClick={(event) => handleDelete(event, params.row.id)}  // Added event parameter
      >
        <DeleteIcon />
      </IconButton>
    ),
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper sx={{ 
      height: 400, 
      width: '95%',  // Ensures full width
      margin: "auto", 
      padding: isSmallScreen ? 1 : 2, 
      boxShadow: isSmallScreen ? "none" : theme.shadows[2], 
      borderRadius: theme.shape.borderRadius,
    }}>
      <p>Latest Data</p>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          border: 0,
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.primary.main,
            fontSize: "1rem",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-cell": {
            padding: theme.spacing(1),
            fontSize: "0.9rem",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
          },
          width: '100%',
        }}
      />
    </Paper>
  );
}
