import { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import WcIcon from "@mui/icons-material/Wc";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SearchIcon from "@mui/icons-material/Search";
import { FormControlLabel } from "@mui/material";
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { DataGrid } from "@mui/x-data-grid";

import {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../../services/UserService";

const roles = ["admin", "editor", "viewer"];
const genders = ["male", "female", "other"];

const blankForm = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  contactNumber: "",
  email: "",
  role: "editor",
  username: "",
  password: "",
  address: "",
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : "";

const UsersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // 🔍 NEW
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const resetForm = () => {
    setForm({ ...blankForm });
    setErrors({});
  };
  const loadUsers = async () => {
    try {
      setLoading(true);

      const { data } = await fetchUsers();

      setUsers(data.users || []);
    } catch (error) {
      console.error("Error loading users:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadUsers();
  }, []);
  const openModal = (user) => {
    setModal({ open: true, id: user?._id ?? null });
    setForm(user ? { ...blankForm, ...user } : { ...blankForm });
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
    resetForm();
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const err = {};

    // Basic
    if (!form.firstName.trim()) err.firstName = "First name is required";
    if (!form.lastName.trim()) err.lastName = "Last name is required";

    // Email
    if (!form.email.includes("@")) err.email = "Invalid email";

    // Password
    if (!modal.id && form.password.length < 8) {
      err.password = "Password must be at least 8 characters";
    }

    // Contact Number
    if (!/^\d{11}$/.test(form.contactNumber)) {
      err.contactNumber = "Contact number must be exactly 11 digits";
    }

    // Age
    if (!/^\d+$/.test(form.age)) {
      err.age = "Age must be a number only";
    }

    // Username
    if (/\s/.test(form.username)) {
      err.username = "Username must not contain spaces";
    }

    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();

    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }

    try {
      if (modal.id) {
        // EDIT USER

        const updatedUser = { ...form };

        // Prevent empty password overwrite
        if (!updatedUser.password) {
          delete updatedUser.password;
        }

        await updateUser(modal.id, updatedUser);
      } else {
        // CREATE USER
        await createUser(form);
      }

      await loadUsers();

      closeModal();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);

      loadUsers();
    } catch (error) {
      console.error(error);
    }
  };
  const toggleStatus = async (id, currentStatus) => {
    try {
      await updateUser(id, {
        isActive: !currentStatus,
      });

      loadUsers();
    } catch (error) {
      console.error(error);
    }
  };

  // 🔍 FILTER LOGIC
  const filteredUsers = users.filter((user) => {
    const searchMatch =
      `${user.firstName} ${user.lastName} ${user.email} ${user.username}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const roleMatch = filterRole ? user.role === filterRole : true;
    const genderMatch = filterGender ? user.gender === filterGender : true;
    const statusMatch =
      filterStatus === ""
        ? true
        : filterStatus === "active"
          ? user.isActive
          : !user.isActive;

    return searchMatch && roleMatch && genderMatch && statusMatch;
  });

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 220,
    },
    {
      field: "fullName",
      headerName: "Full Name",
      flex: 1,
      valueGetter: (_, row) => `${row.firstName} ${row.lastName}`,
    },
    { field: "username", headerName: "Username", flex: 1 },
    {
      field: "role",
      headerName: "Role",
      width: 120,
      valueGetter: (_, row) => labelize(row.role),
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? "Active" : "Inactive"}
          color={row.isActive ? "success" : "default"}
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1}>
          <Button size="small" onClick={() => openModal(row)}>
            Edit
          </Button>
          <Button
            size="small"
            color="warning"
            onClick={() => toggleStatus(row._id, row.isActive)}
          >
            {row.isActive ? "Disable" : "Activate"}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      {/* HEADER */}
      <Box
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">Users</Typography>

        <Button variant="contained" onClick={() => openModal()}>
          Add User
        </Button>
      </Box>

      {/* 🔍 SEARCH + FILTER */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ mb: 3 }}
        alignItems="center"
      >
        {/* SEARCH */}
        <TextField
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* ROLE */}
        <TextField
          select
          label="Filter by Role"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          sx={{ minWidth: 180 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BadgeIcon />
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value="">All Roles</MenuItem>
          {roles.map((r) => (
            <MenuItem key={r} value={r}>
              {labelize(r)}
            </MenuItem>
          ))}
        </TextField>

        {/* GENDER */}
        <TextField
          select
          label="Filter by Gender"
          value={filterGender}
          onChange={(e) => setFilterGender(e.target.value)}
          sx={{ minWidth: 180 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <WcIcon />
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value="">All Genders</MenuItem>
          {genders.map((g) => (
            <MenuItem key={g} value={g}>
              {labelize(g)}
            </MenuItem>
          ))}
        </TextField>

        {/* STATUS */}
        <TextField
          select
          label="Filter by Status"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          sx={{ minWidth: 180 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CheckCircleIcon />
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value="">All Status</MenuItem>
          <MenuItem value="active">Active Users</MenuItem>
          <MenuItem value="inactive">Inactive Users</MenuItem>
        </TextField>

        {/* RESET */}
        <Button
          variant="outlined"
          onClick={() => {
            setSearch("");
            setFilterRole("");
            setFilterGender("");
            setFilterStatus("");
          }}
        >
          Reset
        </Button>
      </Stack>

      {/* TABLE */}
      <Paper sx={{ p: 2 }}>
        <DataGrid
          rows={filteredUsers}
          getRowId={(row) => row._id}
          columns={columns}
          autoHeight
          pageSizeOptions={[5, 10]}
        />
      </Paper>

      {/* MODAL */}
      <Dialog open={modal.open} onClose={closeModal} fullWidth>
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle>{modal.id ? "Edit User" : "Add User"}</DialogTitle>

          <DialogContent dividers>
            <Stack spacing={2} sx={{ mt: 1 }}>
              {/* Row 1 */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  fullWidth
                />

                <TextField
                  label="Last Name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  fullWidth
                />
              </Stack>

              {/* Row 2 */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  label="Age"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  error={!!errors.age}
                  helperText={errors.age}
                  fullWidth
                />

                <TextField
                  select
                  label="Gender"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  fullWidth
                >
                  {genders.map((g) => (
                    <MenuItem key={g} value={g}>
                      {labelize(g)}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              {/* Row 3 */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  label="Contact Number"
                  name="contactNumber"
                  value={form.contactNumber}
                  onChange={handleChange}
                  error={!!errors.contactNumber}
                  helperText={errors.contactNumber}
                  fullWidth
                />

                <TextField
                  label="Email Address"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  fullWidth
                />
              </Stack>

              {/* Row 4 */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  select
                  label="Role"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  fullWidth
                >
                  {roles.map((r) => (
                    <MenuItem key={r} value={r}>
                      {labelize(r)}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  label="Username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  error={!!errors.username}
                  helperText={errors.username}
                  fullWidth
                />
              </Stack>

              {/* Password (full width) */}
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword((p) => !p)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Address */}
              <TextField
                label="Address"
                name="address"
                value={form.address}
                onChange={handleChange}
                fullWidth
                multiline
                rows={3}
              />

              {/* Status toggle */}
              <FormControlLabel
                control={
                  <Switch
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                  />
                }
                label={
                  form.isActive
                    ? "User status: Active"
                    : "User status: Inactive"
                }
              />
            </Stack>
          </DialogContent>

          <DialogActions>
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default UsersPage;
