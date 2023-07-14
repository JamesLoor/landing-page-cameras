/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Button,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  FacebookRounded,
  Instagram,
  WhatsApp,
  Menu as MenuIcon,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    name: "home",
    label: "Inicio",
    link: "/",
  },
  {
    name: "about",
    label: "Nosotros",
    link: "/#about-us",
  },
  {
    name: "services",
    label: "Servicios",
    link: "/#services",
  },
  {
    name: "combos",
    label: "Combos",
    link: "/#combos",
  },
  {
    name: "contact",
    label: "Contacto",
    link: "/#contact",
  },
];
const socialMedia = [
  {
    name: "Facebook",
    icon: FacebookRounded,
    link: "https://www.facebook.com/devend.seguridad",
    target: "_blank",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/devend.seguridad/",
    target: "_blank",
  },
  {
    name: "TikTok",
    iconSource: "/icons/tiktok.svg",
    link: "https://www.tiktok.com/@devend.seguridad",
    target: "_blank",
  },
  {
    name: "WhatsApp",
    icon: WhatsApp,
    link: "https://wa.me/+593963310383",
    target: "_blank",
  },
];

export default function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" component="header">
      <Container
        maxWidth={false}
        disableGutters
        sx={{ maxWidth: "1260px", padding: "0 20px" }}
      >
        <Box
          display="grid"
          justifyContent="space-between"
          gridTemplateColumns="repeat(2, max-content)"
          alignItems="center"
          padding="15px 0"
        >
          <Box
            display="grid"
            justifyContent="space-between"
            gridTemplateColumns="repeat(2, max-content)"
            alignItems="center"
            sx={{ gap: { sx: "0", md: "30px" } }}
          >
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
                keepMounted
                disableScrollLock
                disablePortal
                MenuListProps={{
                  sx: { bgcolor: "primary.main", color: "white" },
                }}
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
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
                {sections.map(({ name, link, label }) => (
                  <MenuItem
                    key={name}
                    onClick={handleCloseNavMenu}
                    sx={{ padding: 0 }}
                  >
                    <Link
                      href={link}
                      style={{
                        color: "white",
                        padding: "6px 16px",
                        width: "100%",
                      }}
                    >
                      {label}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Link href="/" style={{ display: "flex" }}>
              <Image
                src="/icons/LogoDevend.svg"
                alt="Logo"
                width={120}
                height={32}
              />
            </Link>

            <Box sx={{ display: { xs: "none", md: "flex" } }} gap="15px">
              {sections.map(({ name, link, label }) => (
                <Link key={name} href={link}>
                  <Button
                    key={name}
                    size="large"
                    sx={{ color: "white", display: "block", fontSize: "18px" }}
                  >
                    {label}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
          <Box
            display="grid"
            gridAutoColumns="max-content"
            gridAutoFlow="column"
            gap="10px"
          >
            {socialMedia.map(
              ({ icon: Icon, iconSource, name, link, ...props }) => {
                return (
                  <Link
                    key={name}
                    href={link}
                    style={{
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                    }}
                    {...props}
                  >
                    {Icon ? (
                      <Icon />
                    ) : (
                      <img
                        src={iconSource}
                        alt={name}
                        style={{ width: "20px", height: "20px" }}
                      />
                    )}
                  </Link>
                );
              }
            )}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}
