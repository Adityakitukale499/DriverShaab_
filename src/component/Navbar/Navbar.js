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
  Box,
} from "@mui/material";
import {
  Home as HomeIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const App = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:1000px)");
  const pathLocation = useLocation()

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setTimeout(() => {
      setAnchorEl(null);
    }, 1000);
  };
  const handleMenuClosed = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        className="app-bar"
        style={{ background: "#121212", padding: "10px" }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
            <img src="Frame 3971.png" alt="img" style={{}} />
          </Box>

          {isDesktop ? (
            <Breadcrumbs>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? '#FB561E' : '#ffff',
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  textDecoration: 'none'
                })}
              >
                Home
              </NavLink>
              <NavLink
                to="/aboutus"
                style={({ isActive }) => ({
                  color: isActive ? '#FB561E' : '#ffff',
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  textDecoration: 'none'
                })}
              >
                About
              </NavLink>
              <NavLink
                to="/careers"
                style={({ isActive }) => ({
                  color: isActive ? '#FB561E' : '#ffff',
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  textDecoration: 'none'
                })}
              >
                Careers
              </NavLink>

              <NavLink
                onMouseOver={handleMenuOpen}
                onMouseLeave={handleMenuClose}
                style={({ isActive }) => ({
                  color: ['/businesses', '/inidividual'].includes(pathLocation.pathname) ? '#FB561E' : '#ffff',
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  textDecoration: 'none'
                })}
              >
                Services{" "}
                {anchorEl ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
              </NavLink>

              <NavLink
                to="/contactus"
                style={({ isActive }) => ({
                  color: isActive ? '#FB561E' : '#ffff',
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  textDecoration: 'none'
                })}
              >
                Contact
              </NavLink>


              <Button
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  fontFamily: "Inter",
                  color: "#fff",
                  bgcolor: "#FB561E",
                  borderRadius: 10,
                }}
              >
                Download DriverShaab
              </Button>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                // onClose={handleMenuClosed}
                onMouseOver={handleMenuOpen}
                onMouseLeave={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose} to="/inidividual">
                  Individual
                </MenuItem>
                <MenuItem to="/businesses">Businesses</MenuItem>
              </Menu>
            </Breadcrumbs>
          )
            : (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ ml: "auto", display: { sm: "block" }, }}
              >
                <MenuIcon sx={{ bgcolor: '#fb7500', fontSize: 25 }} />
              </IconButton>
            )}

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            onClick={handleMenuOpen}
            sx={{
              "& .MuiList-root": {
                bgcolor: '#212121',
                width: '250px',

              }, pt: 2
            }}
          >
            <MenuItem
              onClick={() => {
                handleMenuClose();
                navigate("/inidividual");

              }}
              sx={{
                fontFamily: "Inter", fontWeight: 400, fontSize: "18px", bgcolor: '#212121', color: '#fff', "&:hover": {
                  bgcolor: '#919191', color: '#fff'
                }, borderBottom: '1px solid #d3d3d3'
              }}
            >
              Individual
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                navigate("/businesses");

              }}
              sx={{
                fontFamily: "Inter", fontWeight: 400, fontSize: "18px", bgcolor: '#212121', color: '#fff', "&:hover": {
                  bgcolor: '#919191', color: '#fff'
                }
              }}
            >
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
              onClick={() => {
                navigate("/");
                handleDrawerToggle();

              }}
            >
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem
              onClick={() => {
                navigate("/aboutus");
                handleDrawerToggle();
              }}
            >
              <ListItemText primary="About" />
            </ListItem>

            <ListItem
              onClick={() => {
                navigate("/careers");
                handleDrawerToggle();
              }}
            >
              <ListItemText primary="Careers" />
            </ListItem>

            <ListItem
              button
            >
              <ListItemText primary="Services" />
              <ExpandMoreIcon onClick={handleMenuOpen} />
            </ListItem>

            <ListItem
              button
              onClick={() => {
                navigate("/contactus");
                handleDrawerToggle();
              }}
            >
              <ListItemText primary="Contact" />
            </ListItem>


          </List>
        </div>
      </Drawer>

      <Toolbar />
    </>
  );
};

export default App;
