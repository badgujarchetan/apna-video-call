// src/pages/Login.js
import React, { useContext, useState } from 'react';
import {
  Avatar, Button, TextField, Box, Typography, Container, CssBaseline
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useNavigate();

  const handleSubmit = async () => {
    try {
      await handleLogin(username, password);
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Sign In</Typography>
        <Box noValidate sx={{ mt: 1 }}>
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
            Login
          </Button>
          <Typography align="center" style={{cursor:'pointer'}}>
            Don't have an account? <a onClick={() => router('/register')}>Register</a>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
