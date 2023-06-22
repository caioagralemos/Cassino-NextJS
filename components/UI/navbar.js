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
import classes from "./navbar.module.css";
import { useRouter } from "next/router";

const pages = ["foguetinho", "roleta"];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function DenseAppBar({ money }) {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //   const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  //   const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  //   };

  const handleClick = (page) => {
    router.push(`/${page}`)
  };

  const handleCloseNavMenu = (evt) => {
    setAnchorElNav(null);
  };

  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  //   };

  return (
    <div className={classes.navbarContainer}>
      <AppBar position="static" className={classes.navbar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => handleClick('')}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CASSINO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              {/* ... */}
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {/* BOTOES DA NAVBAR */}
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleClick(page)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                CRÉDITO = R$ {money},00
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
