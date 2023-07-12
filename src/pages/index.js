import Layout from "@/components/Layout";
import Head from "next/head";
import { Box, Button, Grid, Typography } from "@mui/material";
import Section from "@/components/Section";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";

import {
  CameraOutdoorRounded,
  UpcomingRounded,
  SettingsRemoteRounded,
} from "@mui/icons-material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cameras</title>
        <meta
          name="description"
          content="Ofrecemos soluciones de seguridad a medida para hogares y empresas. Protege lo que más te importa con nuestras cámaras y alarmas de alta calidad. ¡Consulta nuestras promociones actuales!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Section id="banner" name="banner" fullHeight>
          <Box
            sx={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "1fr",
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              fontWeight="600"
              maxWidth="620px"
            >
              Protegemos lo que más te importa
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ width: "max-content" }}
            >
              Contáctanos
            </Button>
          </Box>
        </Section>
        <Section id="about-us" name="about">
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
            alignItems="center"
            gap={{ xs: "20px", md: "80px" }}
          >
            <Grid display="inherit" gap="20px">
              <Grid display="inherit" gap="5px">
                <Typography component="h3" variant="h6" fontWeight="500">
                  Nosotros
                </Typography>
                <Typography component="h2" variant="h3" fontWeight="600">
                  Somos expertos en seguridad: Su confianza, nuestra prioridad
                </Typography>
              </Grid>
              <Typography
                component="p"
                fontSize="18px"
                fontWeight="400"
                lineHeight="2.3"
                color="#9A9A9A"
              >
                Devend es líder en seguridad y vigilancia, ofreciendo soluciones
                integrales y personalizadas para proteger hogares, negocios y
                activos valiosos. Nuestro equipo de expertos altamente
                capacitados tiene amplia experiencia en la instalación y
                mantenimiento de sistemas de seguridad avanzados.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{ width: "max-content", borderRadius: "0" }}
              >
                Contáctanos
              </Button>
            </Grid>
            <Box height={{ xs: "100%", md: "500px", border: "2px solid #000" }}>
              <Image
                src="/images/about-us.jpg"
                alt="Nosotros"
                width={400}
                height={400}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
          </Box>
        </Section>
        <Section id="services" name="services" background="primary.main">
          <Box display="grid" gap="40px">
            <Grid textAlign="center" display="grid" gap="10px">
              <Typography
                component="h2"
                variant="h3"
                fontWeight="600"
                color="#fff"
              >
                Nuestros servicios
              </Typography>
              <Typography
                component="p"
                fontSize="18px"
                fontWeight="400"
                lineHeight="2.3"
                color="#D8D8D8"
                sx={{ maxWidth: "800px", margin: "0 auto" }}
              >
                Nuestros servicios de seguridad y vigilancia protegen lo que más
                valoras. Brindamos soluciones integrales y personalizadas para
                tu tranquilidad las 24 horas del día.
              </Typography>
            </Grid>
            <Grid
              display="grid"
              gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
              gap={{ xs: "15px", md: "30px" }}
              padding={{ xs: "0 20px", sm: "0 80px" }}
            >
              {serviceData.map(({ title, description, Icon }) => {
                return (
                  <ServiceCard
                    key={title}
                    title={title}
                    description={description}
                    Icon={Icon}
                  />
                );
              })}
            </Grid>
          </Box>
        </Section>
        <Section id="products" name="products">
          <Typography component="h2" variant="h3" fontWeight="600">
            Our Products
          </Typography>
        </Section>
        <Section id="contact" name="contact">
          <Typography component="h2" variant="h3" fontWeight="600">
            Contact Us
          </Typography>
        </Section>
      </Layout>
    </>
  );
}

const serviceData = [
  {
    title: "Cámaras",
    description:
      "Instalamos camaras de la mas alta calidad para nuestros clientes",
    Icon: CameraOutdoorRounded,
  },
  {
    title: "Alarmas",
    description:
      "Instalamos camaras de la mas alta calidad para nuestros clientes",
    Icon: UpcomingRounded,
  },
  {
    title: "Control de acceso",
    description:
      "Instalamos camaras de la mas alta calidad para nuestros clientes",
    Icon: SettingsRemoteRounded,
  },
];
