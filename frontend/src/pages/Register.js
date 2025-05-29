// src/pages/Register.js
import React, { useContext, useState } from 'react';
import {
  Avatar, Button, TextField, Box, Typography, Container, CssBaseline, Snackbar
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { AuthContext } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { handleRegister } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const router = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await handleRegister(name, username, password);
      setMessage(res);
      setOpen(true);
      setError('');
      setName('');
      setUsername('');
      setPassword('');
      setTimeout(() => router('/login'), 1500); // Redirect to login after success
    } catch (err) {
      setError(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Register</Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required fullWidth
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography color="error">{error}</Typography>
          <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
            Register
          </Button>
          <Typography align="center" style={{cursor:'pointer'}}>
            Already have an account? <a onClick={() => router('/login')}>Login</a>
          </Typography>
        </Box>
      </Box>
      <Snackbar open={open} autoHideDuration={3000} message={message} />
    </Container>
  );
};

export default Register;
