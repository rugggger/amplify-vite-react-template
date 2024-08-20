import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import SettingsContext from "../../app/context/settings-context";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { Menu, MenuItem } from "@mui/material";

const CustomLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  marginRight: "1rem",
});

interface Page {
  title: string;
  route: string;
}
const pages: Page[] = [
  { title: "PROJECTS", route: "projects" },
];

const AppMenu = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const settingsContext = React.useContext(SettingsContext);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        zIndex: "appBar",
        backdropFilter: "blur(3px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box onClick={settingsContext.toggleMode}>
later
          </Box>

          <CustomLink to="/">
            <Typography
              noWrap
              sx={{
                mr: 2,
                fontSize: "1.5rem",
                display: { xs: "none", md: "flex" },
                fontFamily: "Source Code Pro",
                color: "inherit",
                "& a": {
                  textDecoration: "none",
                },
                textDecoration: "none",
              }}
            >
              {"{ docukeep }"}
            </Typography>
          </CustomLink>

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
                <MenuItem key={page.route} onClick={handleCloseNavMenu}>
                  <CustomLink to={page.route}>{page.title}</CustomLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            noWrap
            sx={{
              mr: 2,
              fontSize: "1.5rem",
              display: { xs: "flex", md: "none" },
              fontFamily: "Source Code Pro",
              color: "inherit",
              "& a": {
                textDecoration: "none",
              },
              textDecoration: "none",
            }}
          >
            {"{ yaron bar }"}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <CustomLink key={page.route} to={`${page.route}`}>
                {page.title}
              </CustomLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppMenu;
