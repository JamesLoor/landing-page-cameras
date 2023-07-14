/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  Button,
  Container,
  Box,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { FacebookRounded, Instagram, WhatsApp } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

export default function Footer({}) {
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [policyModalOpen, setPolicyModalOpen] = useState(false);

  return (
    <Container
      component="footer"
      sx={{
        bgcolor: "primary.main",
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

        <Box textAlign="center">
          {sections.map(({ name, link, label }) => (
            <Link key={name} href={link}>
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
          <Button
            sx={{ color: "#FFF" }}
            onClick={() => setTermsModalOpen(true)}
          >
            Términos y condiciones
          </Button>
          <Button
            sx={{ color: "#FFF" }}
            onClick={() => setPolicyModalOpen(true)}
          >
            Políticas de privacidad
          </Button>
        </Grid>
      </Box>

      <Dialog
        disablePortal
        scroll="paper"
        open={policyModalOpen}
        onClose={() => setPolicyModalOpen(false)}
      >
        <DialogTitle>{policy.title}</DialogTitle>
        <DialogContent dividers sx={{ display: "grid", gap: "20px" }}>
          {policy.items.map((item) => {
            return (
              <Grid key={item.title} sx={{ display: "grid", gap: "10px" }}>
                <Typography
                  variant="h6"
                  component="h4"
                  color="primary"
                  fontWeight="600"
                >
                  {item.title}
                </Typography>
                <Typography component="p">{item.paragraph}</Typography>
              </Grid>
            );
          })}
          <Typography component="p">{policy.date}</Typography>
        </DialogContent>
        <DialogActions>
          <Button size="large" onClick={() => setPolicyModalOpen(false)}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        scroll="paper"
        open={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      >
        <DialogTitle>{terms.title}</DialogTitle>
        <DialogContent dividers sx={{ display: "grid", gap: "20px" }}>
          {terms.items.map((item) => {
            return (
              <Grid key={item.title} sx={{ display: "grid", gap: "10px" }}>
                <Typography
                  variant="h6"
                  component="h4"
                  color="primary"
                  fontWeight="600"
                >
                  {item.title}
                </Typography>
                <Typography component="p">{item.paragraph}</Typography>
              </Grid>
            );
          })}
          <Typography component="p">{terms.date}</Typography>
        </DialogContent>
        <DialogActions>
          <Button size="large" onClick={() => setTermsModalOpen(false)}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

const terms = {
  title: "Términos y Condiciones de Uso",
  items: [
    {
      title: "Introducción",
      paragraph:
        "Al estar en devend.net, usted acepta cumplir con estos Términos y Condiciones de Uso. Si no está de acuerdo con alguno de estos términos, no utilice este sitio web.",
    },
    {
      title: "Derechos de propiedad intelectual",
      paragraph:
        "Todos los derechos de propiedad intelectual relacionados con el contenido, diseño, logotipos, imágenes y demás elementos de este sitio web son propiedad de Devend o sus licenciantes. Queda prohibida la reproducción, distribución, comunicación pública o transformación de estos elementos sin la autorización previa y por escrito de [nombre de la empresa] o sus licenciantes.",
    },
    {
      title: "Uso del formulario de contacto",
      paragraph:
        "Al proporcionar su información personal a través del formulario de contacto, usted acepta que Devend pueda utilizar esa información para contactarlo con respecto a sus servicios. Al proporcionar su información, usted garantiza que es veraz, exacta y actualizada.",
    },
    {
      title: "Limitación de responsabilidad",
      paragraph:
        "Devend no será responsable de ningún daño o pérdida que pueda resultar del uso de este sitio web o la información contenida en él. Devend no garantiza que el sitio web esté libre de errores, virus u otros elementos dañinos.",
    },
    {
      title: "Modificaciones de los términos y condiciones",
      paragraph:
        "Devend se reserva el derecho de modificar estos Términos y Condiciones de Uso en cualquier momento y sin previo aviso. Al utilizar este sitio web, usted acepta cumplir con los términos y condiciones vigentes en ese momento.",
    },
  ],
  date: "Fecha de la última actualización: 10/06/2023",
};

const policy = {
  title: "Política de Privacidad",
  items: [
    {
      title: "Recopilación de información personal",
      paragraph:
        "Al utilizar el formulario de contacto en este sitio web, usted acepta proporcionar su nombre, dirección de correo electrónico, número de teléfono y cualquier otra información solicitada. Esta información se utilizará exclusivamente para responder a sus consultas y proporcionarle información sobre nuestros servicios.",
    },
    {
      title: "Uso de la información",
      paragraph:
        "La información personal que proporciona será utilizada únicamente para los fines descritos en esta Política de Privacidad y en los Términos y Condiciones de Uso. No compartiremos su información personal con terceros sin su consentimiento, excepto cuando sea necesario para cumplir con la ley, proteger nuestros derechos o cumplir con los requisitos legales.",
    },
    {
      title: "Seguridad de la información",
      paragraph:
        "Nos esforzamos por proteger la información personal que nos proporciona, utilizando medidas de seguridad adecuadas para prevenir el acceso no autorizado, divulgación, modificación o destrucción de dicha información. Sin embargo, no podemos garantizar la seguridad absoluta de su información personal.",
    },
    {
      title: "Acceso y rectificación de la información",
      paragraph:
        "Usted tiene derecho a acceder, rectificar, actualizar o eliminar su información personal almacenada en nuestros sistemas. Para ejercer estos derechos, por favor póngase en contacto con nosotros a través de la dirección de correo electrónico o número de teléfono proporcionados en este sitio web.",
    },
    {
      title: "Cambios en la política de privacidad",
      paragraph:
        "Devend se reserva el derecho de modificar esta Política de Privacidad en cualquier momento y sin previo aviso. Al utilizar este sitio web, usted acepta cumplir con la política de privacidad vigente en ese momento.",
    },
    {
      title: "Uso de cookies",
      paragraph:
        "Este sitio web puede utilizar cookies y otras tecnologías de seguimiento para mejorar su experiencia de navegación, analizar el uso del sitio web y brindar funcionalidades adicionales. Al utilizar este sitio web, usted acepta el uso de cookies y otras tecnologías de seguimiento, de acuerdo con nuestra Política de Cookies, si corresponde.",
    },
    {
      title: "Enlaces a sitios web de terceros",
      paragraph:
        "Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad o el contenido de estos sitios web de terceros. Si visita estos sitios web, le recomendamos que revise sus políticas de privacidad y términos y condiciones antes de proporcionar cualquier información personal.",
    },
    {
      title: "Contacto",
      paragraph:
        "Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad o sobre el tratamiento de su información personal, no dude en ponerse en contacto con nosotros utilizando la información de contacto proporcionada en este sitio web.",
    },
  ],
  date: "Fecha de la última actualización: 28/05/2023",
};

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
