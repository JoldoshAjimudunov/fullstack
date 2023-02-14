import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Contexts/AuthContextProvider";
// import { useProduct } from "./Contexts/ProductContextProvider";
import "../components/Navbar.css";
import { MenuItem } from "@mui/material";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  return (
    <div>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
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
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <ul class="menu__box">
          {user ? (
            <>
              <li>
                <a
                  class="menu__item"
                  href="#"
                  onClick={() => navigate("/products")}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  class="menu__item"
                  href="#"
                  onClick={() => navigate("/admin")}
                >
                  Admin Add product
                </a>
              </li>
              <li>
                <a class="menu__item" href="#" onClick={() => logout()}>
                  logout
                </a>
              </li>
              <div className="text">
                191028 Манежный пер.2 Санкт-Петербург Время работы : 12:00-23:00
              </div>
            </>
          ) : (
            <>
              {" "}
              <li>
                <a
                  class="menu__item"
                  href="#"
                  onClick={() => navigate("/products")}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  class="menu__item"
                  href="#"
                  onClick={() => navigate("/login")}
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  class="menu__item"
                  href="#"
                  onClick={() => navigate("/register")}
                >
                  Register
                </a>
              </li>
              <div className="text">
                191028 Манежный пер.2 Санкт-Петербург Время работы : 12:00-23:00
              </div>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
export default Navbar;