import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { useMediaQuery, InputBase, Avatar, Menu, MenuItem } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { Outlet, useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { getUserDetails } from './utils/api';
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import AuthContext from './context/AuthContext';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? 0 : `-${drawerWidth}px`,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0, // Ensure no negative margin on mobile
    },
  })
);

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  maxWidth: '100vw',
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    borderRadius: 3,
    backgroundColor:"#2b83dc",
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Layout() {
  let navigate=useNavigate();


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Login state
  const {isLoggedIn,setIsLoggedIn}=React.useContext(AuthContext);
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);


  // Menu anchor state for User Avatar dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [imageUrl, setImageUrl] = React.useState("");
  // const [imageIsLoading, setImageIsLoading] = React.useState(false);

  // Fetch user details on component mount
  React.useLayoutEffect(() => {
    // setImageIsLoading(true);
    getUserDetails(
      (data) => {
        setImageUrl(data?.photo?.path); // Assuming the API returns `photo.path`
        // setTimeout(() => setImageIsLoading(false), 4000);
      },
      (error) => {
        console.error("Error fetching user details:", error);
        // setImageIsLoading(false);
      }
    );
  }, []);
  const handleLoginSuccess = () => {
    // const userDetails = localStorage.getItem('userDetails');
    
    // if (userDetails) {
    //   // const { photo } = JSON.parse(atob(userDetails));
    //   console.log(userDetails);
    //   setUserPhoto(userDetails?.photo?.path);
    //   setIsLoggedIn(true);
    // }
    setIsLoggedIn(true);
    setLoginPopupOpen(false); // Close the login popup
  };
  const handleLogout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('userDetails')
    setAnchorEl(null);
    setIsLoggedIn(false);
  }
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if(!isLoggedIn){
      navigate('/login');
  }

  return (
    <Box sx={{ display: 'flex', width: '100%', overflowX: 'hidden' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(!open)}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Admin Dashboard
            </Typography>
          </Box>

          {/* Center Section - Search Bar */}
         

          {/* Right Section */}
          {isLoggedIn?(
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <SearchBar>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </SearchBar>
              <IconButton color="inherit">
                {/* <Badge badgeContent={4} color="error">
                  
                </Badge> */}
                <NotificationsNoneIcon />
              </IconButton>
              {/* User Avatar */}
              <IconButton onClick={handleMenuOpen} color="inherit">
                <Avatar alt="User Profile" src={imageUrl} />
              </IconButton>
              {/* Dropdown Menu */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}><CgProfile style={{ marginRight: '8px' }}/>Profile</MenuItem>
                <MenuItem onClick={handleLogout}><FiLogOut style={{ marginRight: '8px' }}/> Logout</MenuItem>
              </Menu>
            </Box>
            
          ):(
            <Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    cursor: 'pointer',
    padding: '10px 20px',
    borderRadius: '8px',
    backgroundColor: '#1976d2', // Nice blue color
    color: '#fff',
    fontWeight: 'bold',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)', // Slight scaling effect
    },
    '&:active': {
      backgroundColor: '#1e3a8a', // Even darker when clicked
      transform: 'scale(0.98)', // Pressed-in effect
    },
  }}
  onClick={() => setLoginPopupOpen(true)}
>
  Login
</Box>

          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant={isMobile ? 'temporary' : 'persistent'}
        anchor="left"
        open={open}
        onClose={handleDrawerClose} // Close drawer on mobile when clicking outside
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardCustomizeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonAddAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Create User" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ManageAccountsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Modify User" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Main open={!isMobile && open}>
        <DrawerHeader />
        <Outlet context={[open]}/>
      </Main>
      <LoginForm
        open={isLoginPopupOpen}
        onClose={() => setLoginPopupOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </Box>
  );
}
