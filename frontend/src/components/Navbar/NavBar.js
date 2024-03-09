import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddTaskIcon from '@mui/icons-material/AddTask';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Modalcomponent from '../Modal/Modal';


export default function NavBar() {
  const [addtask, setAddTask] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

 
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


const ModalOpen = () =>{
  setAddTask(true);
}

const ModalClose = () =>{
  setAddTask(false);
}

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static"  >
        <Toolbar>
          
    
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Welcome Back Aswin
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={ModalOpen}
            sx={{ mr: 2}}

          >
           < AddTaskIcon />
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Add Task
          </Typography>
          </IconButton>
    
          
          
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Profile
          </Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
     
        </Toolbar>
      </AppBar>
      <Modalcomponent addtask={addtask} ModalClose={ModalClose}/>
    </Box>
  );
}