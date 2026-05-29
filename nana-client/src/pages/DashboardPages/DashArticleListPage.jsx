import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import {
  fetchArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../../services/ArticleService";

const blankForm = {
  title: "",
  name: "",
  image: "",
  content: "",
};

function DashArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState({
    open: false,
    id: null,
  });

  const [form, setForm] = useState(blankForm);

  const loadArticles = async () => {
    try {
      setLoading(true);

      const { data } = await fetchArticles();

      setArticles(data.articles || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const openModal = (article) => {
    setModal({
      open: true,
      id: article?._id ?? null,
    });

    setForm(
      article
        ? {
            ...article,
            content: article.content.join("\n\n"),
          }
        : blankForm,
    );
  };

  const closeModal = () => {
    setModal({
      open: false,
      id: null,
    });

    setForm(blankForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...form,

        content: form.content.split("\n\n").filter(Boolean),

        createdBy: localStorage.getItem("userId"),

        authorName: localStorage.getItem("firstName"),
      };

      if (modal.id) {
        await updateArticle(modal.id, payload);
      } else {
        await createArticle(payload);
      }

      await loadArticles();

      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteArticle(id);

      loadArticles();
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },

    {
      field: "authorName",
      headerName: "Author",
      width: 180,
    },

    {
      field: "createdAt",
      headerName: "Created",
      width: 180,
      valueGetter: (_, row) => new Date(row.createdAt).toLocaleDateString(),
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 220,

      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1}>
          <Button size="small" onClick={() => openModal(row)}>
            Edit
          </Button>

          <Button
            size="small"
            color="error"
            onClick={() => handleDelete(row._id)}
          >
            Delete
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
        <Typography variant="h4">Articles</Typography>

        <Button variant="contained" onClick={() => openModal()}>
          Add Article
        </Button>
      </Box>

      {/* TABLE */}
      <Paper sx={{ p: 2 }}>
        <DataGrid
          rows={articles}
          columns={columns}
          loading={loading}
          autoHeight
          getRowId={(row) => row._id}
          pageSizeOptions={[5, 10, 25]}
        />
      </Paper>

      {/* MODAL */}
      <Dialog open={modal.open} onClose={closeModal} fullWidth maxWidth="md">
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle>{modal.id ? "Edit Article" : "Add Article"}</DialogTitle>

          <DialogContent dividers>
            <Stack spacing={2} sx={{ mt: 1 }}>
              <TextField
                label="Title"
                name="title"
                value={form.title}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Slug Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                helperText="example: my-first-article"
                fullWidth
              />

              <TextField
                label="Image URL"
                name="image"
                value={form.image}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Content"
                name="content"
                value={form.content}
                onChange={handleChange}
                multiline
                rows={12}
                helperText="Separate paragraphs with blank lines"
                fullWidth
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
}

export default DashArticles;
