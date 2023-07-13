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
import ComboCard from "@/components/ComboCard";

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
        <Section id="banner" name="banner" backgroundColor="#d9d9d9" fullHeight>
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
            <Button variant="contained" size="large">
              Contáctanos
            </Button>
          </Box>
        </Section>
        <Section id="about-us" name="about-us">
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
              <Button variant="contained" size="large">
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
        <Section id="services" name="services" backgroundColor="primary.main">
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
              gridTemplateColumns={{ xs: "1fr", sm: "repeat(3, 1fr)" }}
              gap={{ xs: "25px", md: "30px" }}
              padding={{ xs: "0 20px", sm: "0" }}
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
        <Section id="combos" name="combos">
          <Box display="grid" gap="40px">
            <Grid textAlign="center" display="grid" gap="10px">
              <Typography component="h2" variant="h3" fontWeight="600">
                Encuentra el combo perfecto para ti
              </Typography>
              <Typography
                component="p"
                fontSize="18px"
                fontWeight="400"
                lineHeight="2.3"
                color="#9A9A9A"
                sx={{ maxWidth: "800px", margin: "0 auto" }}
              >
                Te ofrecemos tres combos únicos, cuidadosamente seleccionados
                para cubrir diversas preferencias y necesidades.
              </Typography>
            </Grid>
            <Grid
              display="grid"
              gridTemplateColumns={{ xs: "1fr", sm: "repeat(3, 1fr)" }}
              gap={{ xs: "25px", md: "40px" }}
              padding={{ xs: "0 20px", sm: "0" }}
            >
              {comboData.map(
                ({ id, src, type, price, title, itemList, message }) => {
                  return (
                    <ComboCard
                      key={id}
                      image={src}
                      type={type}
                      price={price}
                      title={title}
                      itemList={itemList}
                      message={message}
                    />
                  );
                }
              )}
            </Grid>
          </Box>
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

const comboData = [
  {
    id: "basic",
    src: "/images/combo.png",
    type: "casa",
    price: "$450",
    title: "Instalación de cámaras",
    message: "",
    itemList: [
      {
        id: "camera",
        label: "4 Cámaras HD",
      },
      {
        id: "dvr",
        label: "1 DVR",
      },
      {
        id: "hdd",
        label: "1 Disco Duro 1TB",
      },
    ],
  },
  {
    id: "premium",
    src: "/images/combo.png",
    type: "oficina",
    price: "$450",
    title: "Instalación de cámaras",
    message: "",
    itemList: [
      {
        id: "01",
        label: "4 Cámaras HD",
      },
      {
        id: "02",
        label: "1 DVR",
      },
      {
        id: "03",
        label: "1 Disco Duro 1TB",
      },
    ],
  },
  {
    id: "custom",
    src: "/images/combo.png",
    type: "personalizado",
    price: "$450",
    title: "Instalación de cámaras",
    message: "",
    itemList: [
      {
        id: "04",
        label: "4 Cámaras HD",
      },
      {
        id: "05",
        label: "1 DVR",
      },
      {
        id: "06",
        label: "1 Disco Duro 1TB",
      },
    ],
  },
];
