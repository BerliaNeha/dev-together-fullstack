import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";
import { AccountCircle } from "@mui/icons-material";
import Logo from "../assets/logoNobg.png";
const page = [
  "developers",
  "employers",
  "dev-community",
  "about-us",
  "contact",
  "login",
];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Navbar = ({ isLoggedIn, setIsLoggedIn, setCurrentUserId }) => {
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleMenuItemPress = (page) => {
    handleCloseNavMenu();
    navigate(`/${page}`);
  };
  const handleLogout = () => {
    //setCurrentUserId("");
    setIsLoggedIn(false);
  };

  const handleMenu = (event) => {
    navigate(`/login`);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {page.map((page, key) => (
                // <MenuItem key={page} onClick={handleCloseNavMenu}>
                //   <Typography textAlign="center">{page}</Typography>
                // </MenuItem>
                <Button
                  size="medium"
                  key={page}
                  onClick={() => handleMenuItemPress(page)}
                  sx={{
                    display: "block",
                    color: (theme) => theme.palette.secondary.main,
                  }}
                >
                  {key === 5 ? (
                    <AccountCircle sx={{ marginRight: 1, fontSize: 15 }} />
                  ) : null}
                  {page}
                </Button>
              ))}
            </Menu>
            <Link to={"/"}>
              <img
                src={Logo}
                alt="logo"
                height="100px"
                width="200px"
                style={{ objectFit: "contain" }}
              ></img>
            </Link>
          </Box>

          {/* ########## bigger screen ################## */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            <Link to={"/"}>
              <img
                src={Logo}
                alt="logo"
                height="100px"
                width="200px"
                style={{ objectFit: "contain" }}
              ></img>
            </Link>

            {page.map((page, key) => (
              <>
                <Button
                  size="medium"
                  key={page}
                  onClick={() => handleMenuItemPress(page)}
                  sx={{
                    display: "block",
                    color: (theme) => theme.palette.secondary.main,
                  }}
                >
                  {key === 5 ? (
                    <AccountCircle sx={{ marginRight: 1, fontSize: 15 }} />
                  ) : null}
                  {page}
                </Button>
              </>
            ))}
          </Box>
          {isLoggedIn ? (
            <>
              <Button
                sx={{ color: (theme) => theme.palette.secondary.main }}
                onClick={handleLogout}
              >
                LOG OUT
              </Button>
            </>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
