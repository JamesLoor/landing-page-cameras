/* eslint-disable @next/next/no-img-element */
import { Button, Container, Box, Typography, Grid } from "@mui/material";
import { FacebookRounded, Instagram, WhatsApp } from "@mui/icons-material";
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
    name: "products",
    label: "Productos",
    link: "/#products",
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
    link: "/",
    target: "_blank",
  },
];

export default function Footer({}) {
  return (
    <Container
      component="footer"
      sx={{
        bgcolor: "primary.main",
        textAlign: "center",
        maxWidth: "100% !important",
        padding: "0 !important",
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: { xs: "20px", md: "40px 20px" },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, max-content)",
          },
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/icons/LogoDevend.svg"
            alt="Logo"
            width={135}
            height={39}
          />
        </Link>

        <Box>
          {sections.map(({ name, link, label }) => (
            <Link key={name} href={link} sx={{}}>
              <Button
                component="button"
                variant="text"
                sx={{
                  textTransform: "initial",
                  padding: "0 15px",
                  minWidth: "initial",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                {label}
              </Button>
            </Link>
          ))}
        </Box>

        <Box
          display="grid"
          gridAutoColumns="max-content"
          gridAutoFlow="column"
          gap="10px"
          sx={{ placeContent: "center" }}
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

      <Box sx={{ borderBottom: "1px solid #D4D4D4" }}></Box>

      <Box
        sx={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: { xs: "20px", md: "40px 20px" },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "max-content max-content" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography variant="body2" textAlign="center" color="#D4D4D4">
          Copyright © {new Date().getFullYear()} Devend Todos los derechos
          reservados
        </Typography>
        <Grid display="flex" gap="5px" sx={{ placeContent: "center" }}>
          <Typography variant="body2" color="#D4D4D4">
            Términos y condiciones
          </Typography>
          <Typography variant="body2" color="#D4D4D4">
            Políticas de privacidad
          </Typography>
        </Grid>
      </Box>
    </Container>
  );
}
