import React, { FC } from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography, Button, ButtonGroup } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { useHistory } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';

const NavBar:FC = () => {
  const router = useHistory()
  const {isAuth} = useTypedSelector(state => state.auth)
    return ( 
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Fast Shopping
            </Typography>
            {isAuth ?
            <>
              <Typography color="inherit" onClick={()=>router.push(RouteNames.LOGIN)}>
                Pablos
              </Typography>
              <Button color="inherit" onClick={()=>router.push(RouteNames.LOGIN)}>
                <LogoutIcon></LogoutIcon>
              </Button>
            </>
            :
              <Button color="inherit" onClick={()=>router.push(RouteNames.LOGIN)}>
                <LoginIcon></LoginIcon>
              </Button>
            }
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default NavBar
