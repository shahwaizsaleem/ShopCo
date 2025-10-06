import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 50,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // open menu
  };

  const handleClose = () => {
    setAnchorEl(null); // close menu
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Announcement Bar */}
      {showAnnouncement && (
        <Box
          sx={{
            bgcolor: "black",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 0.5,
            px: 2,
            fontSize: "0.875rem",
            position: "relative",
          }}
        >
          <Typography sx={{ textAlign: "center", flexGrow: 1 }}>
            Sign up and get 20% off your first order. Sign Up Now
          </Typography>
          <IconButton
            size="small"
            sx={{ color: "white", position: "absolute", right: "300px" }}
            onClick={() => setShowAnnouncement(false)}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      )}

      {/* Navbar */}
      <AppBar position="static" color="inherit" elevation={1}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>

          {/* Left: Logo + Nav links */}
         <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 2, md: 8 }, flexWrap: "wrap" }}>
  <Typography
    sx={{
      fontFamily: "Integral CF, sans-serif",
      fontWeight: 800,
      fontStyle: "bold",
      fontSize: "32px",
      lineHeight: "100%",
      letterSpacing: "0%",
      verticalAlign: "middle",
      marginLeft:2
    }}
  >
    SHOP.CO
  </Typography>

            <Box sx={{ display: "flex", gap: { xs: 2, md: 4 }, flexWrap: "wrap" }}>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "primary.main" } }}
                onClick={handleClick}
              >
                Shop ▼
              </Typography>
              {/* Dropdown Menu */}
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>About Us</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
                <MenuItem onClick={handleClose}>Blog</MenuItem>
                <MenuItem onClick={handleClose}>FAQ</MenuItem>
              </Menu>

              <Typography
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "primary.main" } }}
              >
                On Sale
              </Typography>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "primary.main" } }}
              >
                New Arrivals
              </Typography>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "primary.main" } }}
              >
                Brands
              </Typography>
            </Box>
          </Box>

          {/* Middle: Search bar */}
          <Box sx={{ flex: 1, maxWidth: 800, minWidth: { xs: "100%", md: 400 } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search for products…" />
            </Search>
          </Box>

          {/* Right: Cart + Profile */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton aria-label="cart">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
