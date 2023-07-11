import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, Container, Box, Typography } from "@mui/material";
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
    link: "/",
  },
  {
    name: "products",
    label: "Productos",
    link: "/",
  },
  {
    name: "contact",
    label: "Contacto",
    link: "/",
  },
];
const socialMedia = [
  {
    name: "Facebook",
    icon: FacebookRounded,
    link: "/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "/",
  },
  {
    name: "TikTok",
    iconSource: "/icons/tiktok.svg",
    link: "/",
  },
  {
    name: "WhatsApp",
    icon: WhatsApp,
    link: "/",
  },
];

export default function Navigation() {
  return (
    <AppBar position="static">
      <Container maxWidth={false} disableGutters sx={{ maxWidth: "1280px" }}>
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
            gap="30px"
          >
            <Image
              src="/logoDevend.svg"
              alt="Picture of the author"
              width={135}
              height={39}
            />

            <Box display="flex" gap="15px">
              {sections.map(({ name, link, label }) => (
                <Link key={name} href={link} sx={{}}>
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
            {socialMedia.map(({ icon: Icon, iconSource, name, link }) => {
              return (
                <Link
                  key={name}
                  href={link}
                  style={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                  }}
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
            })}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}
