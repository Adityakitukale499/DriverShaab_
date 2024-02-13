// import "./Navbar.css";
// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Menu,
//   MenuItem,
//   Drawer,
//   Breadcrumbs,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
//   Button,
//   Box,
// } from "@mui/material";
// import {
//   Menu as MenuIcon,
//   Home as HomeIcon,
//   ExpandMore as ExpandMoreIcon,
// } from "@mui/icons-material";
// import { NavLink, useNavigate } from "react-router-dom";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// const App = () => {
//   const navigate = useNavigate();
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const isDesktop = useMediaQuery("(min-width:600px)");

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setTimeout(() => {
//       setAnchorEl(null);
//     }, 2000);
//   };

//   const handleDrawerToggle = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         className="app-bar"
//         style={{background: "#121212", padding: "10px",}}

//       >
//         <Toolbar >
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Box
//           sx={{ display: "flex", flexDirection: "row", flexGrow: 1 }}
//           >
//             <img src="Frame 3971.png" alt="img" style={{}} />
//           </Box>

//           {isDesktop && (
//             <Breadcrumbs>
//               <NavLink
//                 color="#fffff"
//                 to="/"
//                 style={{
//                   fontFamily: "Inter",
//                   fontWeight: 400,
//                   fontSize: "18px",
//                   color: "#fff",
//                 }}
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 color="#fffff"
//                 to="/aboutus"
//                 style={{
//                   fontFamily: "Inter",
//                   fontWeight: 400,
//                   fontSize: "18px",
//                   color: "#fff",
//                 }}
//               >
//                 About
//               </NavLink>
//               <NavLink
//                 color="#fffff"
//                 to="/careers"
//                 style={{
//                   fontFamily: "Inter",
//                   fontWeight: 400,
//                   fontSize: "18px",
//                   color: "#fff",
//                 }}
//               >
//                 Careers
//               </NavLink>

//               <NavLink
//                 color="#fffff"
//                 onMouseOver={handleMenuOpen}
//                 onMouseLeave={handleMenuClose}
//                 style={{
//                   fontFamily: "Inter",
//                   fontWeight: 400,
//                   fontSize: "18px",
//                   color: "#fff",
//                   marginLeft: "10px",
//                 }}
//               >
//                 Services{" "}
//                 {anchorEl ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
//               </NavLink>

//               <NavLink
//                 color="#fffff"
//                 to="/contactus"
//                 style={{
//                   fontFamily: "Inter",
//                   fontWeight: 400,
//                   fontSize: "18px",
//                   color: "#fff",
//                 }}
//               >
//                 Contact
//               </NavLink>

//               <Button
//             sx={{
//               fontSize: "18px",
//               fontWeight: 500,
//               fontFamily: "Inter",
//               color: "#fff",
//               bgcolor: "#FB561E",
//               borderRadius: 10,
//             }}
//           >
//             Download DriverShaab
//           </Button>

//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleMenuClose}
//                 onMouseOver={handleMenuOpen}
//                 onMouseLeave={handleMenuClose}
//               >
//                 <MenuItem onClick={handleMenuClose} to="/inidividual">
//                   Individual
//                 </MenuItem>
//                 <MenuItem to="/businesses">Businesses</MenuItem>
//               </Menu>
//             </Breadcrumbs>
//           )}

//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//           >
//             <MenuItem
//               onClick={() => {
//                 handleMenuClose();
//                 navigate("/inidividual");
//               }}
//               sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "18px" }}
//             >
//               Individual
//             </MenuItem>
//             <MenuItem
//               onClick={() => {
//                 handleMenuClose();
//                 navigate("/businesses");
//               }}
//               sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "18px" }}
//             >
//               Businesses
//             </MenuItem>
//           </Menu>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         open={isDrawerOpen}
//         onClose={handleDrawerToggle}
//         className="drawer"
//       >
//         <div>
//           <List>
//             <ListItem button to="/" onClick={handleDrawerToggle}>
//               <ListItemText primary="Home" />
//             </ListItem>

//             <ListItem button to="/aboutus" onClick={handleDrawerToggle}>
//               <ListItemText primary="About" />
//             </ListItem>

//             <ListItem button to="/careers" onClick={handleDrawerToggle}>
//               <ListItemText primary="Careers" />
//             </ListItem>

//             <ListItem button onClick={handleMenuOpen}>
//               <ListItemText primary="Services" />
//               <ExpandMoreIcon />
//             </ListItem>

//             <ListItem button to="/contactus" onClick={handleDrawerToggle}>
//               <ListItemText primary="Contact" />
//             </ListItem>

//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleMenuClose}
//             >
//               <MenuItem to="/inidividual" onClick={handleMenuClose}>
//                 Individual
//               </MenuItem>
//               <MenuItem to="/businesses" onClick={handleMenuClose}>
//                 Businesses
//               </MenuItem>
//             </Menu>
//           </List>
//         </div>
//       </Drawer>

//       <Toolbar />
//     </>
//   );
// };

// export default App;

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
  // Menu as MenuIcon,
  Home as HomeIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from "react-router-dom";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const App = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:1000px)");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setTimeout(() => {
      setAnchorEl(null);
    }, 2000);
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
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  color: "#ffff",
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/aboutus"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  color: "#ffff",
                }}
              >
                About
              </NavLink>
              <NavLink
                color="#fffff"
                to="/careers"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  color: "#ffff",
                }}
              >
                Careers
              </NavLink>

              <NavLink
                color="#fffff"
                onMouseOver={handleMenuOpen}
                onMouseLeave={handleMenuClose}
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  color: "#ffff",
                  marginLeft: "10px",
                }}
              >
                Services{" "}
                {anchorEl ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
              </NavLink>

              <NavLink
                color="#fffff"
                to="/contactus"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  color: "#ffff",
                }}
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
              <MenuIcon sx={{background:"#FB561E" }}/>
            </IconButton>
          )}

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            onClick={handleMenuOpen}
          >
            <MenuItem
              onClick={() => {
                handleMenuClose();
                navigate("/inidividual");
            
              }}
              sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "18px" }}
            >
              Individual
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                navigate("/businesses");
                
              }}
              sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "18px" }}
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
              <ExpandMoreIcon  onClick={handleMenuOpen}/>
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
