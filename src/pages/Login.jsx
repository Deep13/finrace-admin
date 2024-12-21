import { useContext, useState } from 'react';
import { TextField, Button, Box, Typography, Grid2 } from '@mui/material';
import { Login } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const LoginPage = () => {
  let navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setIsLoggedIn}=useContext(AuthContext);

  const handleLogin = async () => {
    await Login(
      email,
      password,
      () =>{
        setIsLoggedIn(true);
        // console.log(isLoggedIn);
        navigate('/')
      },
      () => alert('Login failed! Please check your credentials.')
    );
  };

  return (
    <Grid2 container sx={{ height: '100vh' , width:'100vw'}}>
      {/* Left Section: Login Form */}
      <Grid2
        item
        xs={12} sm={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 400,
          }}
        >
          <Typography component="h1" variant="h5" textAlign="center" gutterBottom>
            Login
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </Box>
      </Grid2>

      {/* Right Section: Blue Background with Text */}
      <Grid2
        item
        xs={12}
        sx={{
          backgroundColor: '#1976d2',
          display: 'flex',
          flexGrow:'1',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h3" textAlign="center">
          Finraces
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default LoginPage;
