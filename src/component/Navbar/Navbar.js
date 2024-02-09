import "./Navbar.css";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  Breadcrumbs,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Button,
  Box
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const App = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:600px)");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setTimeout(() => {
      setAnchorEl(null);
    }, 2000)
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AppBar position="fixed" className="app-bar" style={{ background: "#121212", padding:'10px' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
            <img src='Frame 3971.png' alt="img" style={{}} />


          </Box>

          {isDesktop && (
            <Breadcrumbs>
              <Link color="#fffff" to="/" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', color: '#fff' }}>
                Home
              </Link>
              <Link color="#fffff" to="/aboutus" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', color: '#fff' }}>
                About
              </Link>
              <Link color="#fffff" to="/careers" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', color: '#fff' }}>
                Careers
              </Link>

              <Link color="#fffff" onMouseOver={handleMenuOpen} onMouseLeave={handleMenuClose} style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', color: '#fff', marginLeft: '10px' }}>
                Services {anchorEl ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
              </Link>

              <Link color="#fffff" to="/contactus" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', color: '#fff' }}>
                Contact
              </Link>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                onMouseOver={handleMenuOpen} onMouseLeave={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose} to="/inidividual">Individual</MenuItem>
                <MenuItem to="/businesses">
                  Businesses
                </MenuItem>
              </Menu>
            </Breadcrumbs>

          )}
          <Button sx={{ fontSize: '18px', fontWeight: 500, fontFamily: 'Inter', color: '#fff', bgcolor: '#FB561E', borderRadius: 10 }}>Download DriverShaab</Button>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => {
              handleMenuClose()
              navigate("/inidividual")
            }} sx={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px' }} >Individual</MenuItem>
            <MenuItem onClick={() => {
              handleMenuClose()
              navigate("/businesses")
            }} sx={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px' }}  >
              Businesses
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        className="drawer"
      >
        <div>
          <List>
            <ListItem
              button

              to="/"
              onClick={handleDrawerToggle}
            >
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem
              button

              to="/"
              onClick={handleDrawerToggle}
            >
              <ListItemText primary="About" />
            </ListItem>

            <ListItem
              button

              to="/"
              onClick={handleDrawerToggle}
            >
              <ListItemText primary="Careers" />
            </ListItem>

            <ListItem button onClick={handleMenuOpen}>
              <ListItemText primary="Services" />
              <ExpandMoreIcon />
            </ListItem>

            <ListItem
              button

              to="/"
              onClick={handleDrawerToggle}
            >
              <ListItemText primary="Contact" />
            </ListItem>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem

                to="/about/custom1"
                onClick={handleMenuClose}
              >
                Individual
              </MenuItem>
              <MenuItem

                to="/about/custom2"
                onClick={handleMenuClose}
              >
                Businesses
              </MenuItem>
            </Menu>
          </List>
        </div>
      </Drawer>

      <Toolbar />
    </>
  );
};

export default App;
