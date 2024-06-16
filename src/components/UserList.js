import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUsers from "../store/action";
import {
  CircularProgress,
  Typography,
  Box,
  Avatar,
  Button,
  Divider,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (status === "loading")
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  if (status === "failed")
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h6" color="error">
          Error loading users: {error}
        </Typography>
      </Box>
    );

  const columns = [
    {
      field: "avatar",
      headerName: "Avatar",
      width: 90,
      renderCell: (params) => <Avatar src={params.value} />,
    },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "details",
      headerName: "Details",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`/user/${params.id}`)}
        >
          View Details
        </Button>
      ),
    },
  ];

  const rows = users.map((user, index) => ({
    id: index,
    avatar: user.picture.medium,
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
  }));

  return (
    <Box padding={4}>
      <Typography variant="h6" gutterBottom>
        Users List
      </Typography>
      <Divider />
      <Box marginTop={4}>
        <div style={{ height: 600, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} pageSize={10} />
        </div>
      </Box>
    </Box>
  );
};

export default UserList;
