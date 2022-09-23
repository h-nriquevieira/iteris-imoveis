import { ChevronLeft } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar, Typography } from "@mui/material";
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuPage.css'


function MenuPage(props) {
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div className="menu-page">
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='h1'
          >
            Imobiliaria
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          <div className="drawer-header">
            <IconButton onClick={handleClose}>
              <ChevronLeft />
            </IconButton>
          </div>
          <List>
            <ListItem onClick={handleClose} component={NavLink} to="/">Home</ListItem>
            <ListItem onClick={handleClose} component={NavLink} to="/imoveis">Imóveis</ListItem>
            <ListItem onClick={handleClose} component={NavLink} to="/sobre">Sobre</ListItem>
          </List>
        </Box>
      </Drawer>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
}

export default MenuPage;