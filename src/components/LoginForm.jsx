import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { Login } from '../utils/api';
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function LoginForm({ open, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await Login(email, password, onLoginSuccess, () => alert('Login Failed'));
      onClose();
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      {/* Close Button */}
      <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Content */}
      <DialogContent
        sx={{
          textAlign: 'center',
          padding: '32px 24px',
          backgroundColor: '#f7f9fc',
          borderRadius: '8px',
        }}
      >
        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Log in
        </Typography>

        {/* Form */}
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          variant="outlined"
          InputProps={{ style: { borderRadius: '8px' } }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          variant="outlined"
          InputProps={{ style: { borderRadius: '8px' } }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{
            marginTop: 2,
            backgroundColor: '#1976d2',
            color: '#fff',
            textTransform: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
          }}
        >
          Login
        </Button>

        {/* Alternate Login Options */}
        <Typography variant="body2" color="textSecondary" sx={{ marginY: 2 }}>
          OR
        </Typography>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon sx={{ color: '#1976d2' }} />}
          sx={{
            marginY: 1,
            textTransform: 'none',
            borderRadius: '8px',
            borderColor: '#cbd5e1',
            color: '#1e293b',
          }}
        >
          Sign in with Google
        </Button>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<FacebookIcon sx={{ color: '#4267B2' }} />}
          sx={{
            marginY: 1,
            textTransform: 'none',
            borderRadius: '8px',
            borderColor: '#cbd5e1',
            color: '#1e293b',
          }}
        >
          Sign in with Facebook
        </Button>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center', paddingBottom: 3 }}>
        <Typography variant="caption" color="textSecondary">
          Need help? Contact Support.
        </Typography>
      </DialogActions>
    </Dialog>
  );
}
