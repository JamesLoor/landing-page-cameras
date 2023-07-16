import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout from "@/components/Layout";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  CameraOutdoorRounded,
  UpcomingRounded,
  SettingsRemoteRounded,
} from "@mui/icons-material";

import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import PackageCard from "@/components/PackageCard";

export default function Home() {
  const [service, setService] = useState("");

  const handleChangeSelect = (event) => {
    setService(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Devend</title>
        <meta
          name="description"
          content="Ofrecemos soluciones de seguridad a medida para hogares y empresas. Protege lo que más te importa con nuestras cámaras y alarmas de alta calidad. ¡Consulta nuestras promociones actuales!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Section
          id="banner"
          name="banner"
          boxShadow="0px -156px 93px -81px rgba(0, 0, 0, 0.10) inset"
          fullHeight
        >
          <Grid
            display="grid"
            gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
            alignItems="center"
            gap={{ xs: "40px" }}
            marginTop="78px"
          >
            <Box
              sx={{
                display: "grid",
                gap: "10px",
                gridTemplateColumns: "1fr",
                gridAutoRows: "max-content",
              }}
            >
              <Typography
                component="h1"
                variant="h2"
                fontWeight="600"
                maxWidth="620px"
                sx={{ fontSize: { lg: "65px" } }}
              >
                Protegemos lo que más te importa
              </Typography>
              <Typography
                component="p"
                variant="h5"
                fontWeight="600"
                maxWidth="620px"
              >
                Muy pronto nuevas promociones
              </Typography>
              <Link href="#package">
                <Button
                  variant="text"
                  size="large"
                  sx={{
                    padding: "0",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <Typography
                    fontSize="18px"
                    sx={{
                      textDecoration: "underline",
                    }}
                  >
                    Más información
                  </Typography>
                </Button>
              </Link>
            </Box>
            <Box height={{ xs: "100%", md: "500px" }}>
              <Image
                src="/images/banner.png"
                alt="Banner"
                width={1280}
                height={784.11}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </Box>
          </Grid>
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
              <Link href="#contact" scroll={false}>
                <Button variant="contained" size="large">
                  Contáctanos
                </Button>
              </Link>
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
        <Section id="package" name="package">
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
              {packageData.map(
                ({
                  id,
                  src,
                  type,
                  price,
                  title,
                  itemList,
                  message,
                  divider,
                }) => {
                  return (
                    <PackageCard
                      key={id}
                      image={src}
                      type={type}
                      price={price}
                      title={title}
                      itemList={itemList}
                      divider={divider}
                      message={message}
                    />
                  );
                }
              )}
            </Grid>
          </Box>
        </Section>
        <Section
          id="testimonials"
          name="testimonials"
          backgroundColor="#f0f0f0"
        >
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: ".75fr 1.25fr" }}
            alignItems="center"
            gap={{ xs: "20px", md: "60px" }}
          >
            <Grid display="inherit" gap="20px">
              <Grid display="inherit" gap="5px">
                <Typography component="h3" variant="h6" fontWeight="500">
                  Testimonios
                </Typography>
                <Typography component="h2" variant="h3" fontWeight="600">
                  Opiniones de nuestros clientes: Su satisfacción nos respalda
                </Typography>
              </Grid>
              <Typography
                component="p"
                fontSize="18px"
                fontWeight="400"
                lineHeight="2.3"
                color="#9A9A9A"
              >
                Descubre lo que dicen nuestros clientes sobre nuestros servicios
                de seguridad y vigilancia. Sus testimonios reflejan nuestro
                compromiso con la excelencia, la confianza y la satisfacción del
                cliente
              </Typography>
            </Grid>
            <Grid
              display="inherit"
              gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
              gap="40px"
            >
              {testimonialData.map((data) => {
                return <TestimonialCard key={data.id} {...data} />;
              })}
            </Grid>
          </Box>
        </Section>
        <Section id="contact" name="contact">
          <Box
            sx={{
              display: "grid",
              gap: "30px",
              maxWidth: "800px",
              justifySelf: "center",
            }}
          >
            <Grid display="inherit" gap="10px">
              <Typography
                align="center"
                component="h2"
                variant="h3"
                fontWeight="600"
              >
                Contáctanos
              </Typography>
              <Typography
                component="p"
                fontSize="18px"
                fontWeight="400"
                lineHeight="2.3"
                color="#9A9A9A"
                align="center"
              >
                Haznos saber que dudas e inquietudes tienes, estaremos
                encantados de contestarte.
              </Typography>
            </Grid>
            <FormControl
              component="form"
              action="https://formsubmit.co/d128e1f2f27836cb1cf80b1b9bf4cda0"
              method="POST"
              sx={{
                display: "grid",
                gap: "inherit",
              }}
            >
              <Grid
                display="grid"
                gridTemplateColumns={{ xs: "1fr", sm: "repeat(2, 1fr)" }}
                gap="inherit"
              >
                <TextField
                  fullWidth
                  name="fullname"
                  label="Nombres"
                  variant="standard"
                  required
                />
                <TextField
                  fullWidth
                  name="phone"
                  label="Celular"
                  type="tel"
                  variant="standard"
                  required
                />
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  variant="standard"
                  required
                />
                <FormControl fullWidth required>
                  <InputLabel variant="standard" sx={{ margin: "0px" }}>
                    Servicio
                  </InputLabel>
                  <Select
                    value={service}
                    name="service"
                    variant="standard"
                    onChange={handleChangeSelect}
                  >
                    <MenuItem value="Personalizado">Personalizado</MenuItem>
                    <MenuItem value="Cámaras">Cámaras</MenuItem>
                    <MenuItem value="Alarmas">Alarmas</MenuItem>
                    <MenuItem value="Punto">Punto de acceso</MenuItem>
                  </Select>
                </FormControl>
                <input type="hidden" name="_next" value="https://devend.net" />
              </Grid>
              <TextField
                required
                fullWidth
                minRows={2}
                name="message"
                multiline
                label="Mensaje"
                variant="standard"
              />
              <Button variant="contained" size="large" type="submit">
                Enviar correo
              </Button>
            </FormControl>
          </Box>
        </Section>
      </Layout>
    </>
  );
}

const serviceData = [
  {
    title: "Cámaras",
    description:
      "Instalamos cámaras de la más alta calidad, permitiendo una vigilancia continua y precisa.",
    Icon: CameraOutdoorRounded,
  },
  {
    title: "Alarmas",
    description:
      "Protección constante contra intrusiones. Están diseñadas para detectar actividad sospechosa",
    Icon: UpcomingRounded,
  },
  {
    title: "Control de acceso",
    description:
      "Gestión eficiente y segura de la entrada y salida de personas en tus instalaciones.",
    Icon: SettingsRemoteRounded,
  },
];

const packageData = [
  {
    id: "basic",
    src: "/images/package-1.png",
    type: "Basic",
    price: "$450",
    title: "Instalación de cámaras",
    message:
      "Hola, necesito mas información sobre el paquete basico de instalación de cámaras",
    divider: true,
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
    src: "/images/package-2.png",
    type: "Premium",
    price: "$800",
    title: "Instalación de cámaras",
    message:
      "Hola, necesito mas información sobre el paquete Premium de instalación de cámaras",
    divider: true,
    itemList: [
      {
        id: "01",
        label: "8 Cámaras HD",
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
    src: "/images/custom.png",
    type: "personalizado",
    price: "$",
    title: "Cámaras, Alarmas y Control de acceso",
    message:
      "Hola, estoy interesado en un paquete personalizado, me gustaría que me contactaran para recibir más información",
    divider: false,
    itemList: [],
  },
];

const testimonialData = [
  {
    key: 0,
    author: "Hernán Castaño",
    role: "Gerente General",
    stars: 5,
    // imageUrl:
    // "https://avatars.dicebear.com/v2/female/2c8034027ce9bb3c3a344c7f0db34888.svg",
    message: `“Estoy muy satisfecho con la instalación de las cámaras en mi bodega. Ahora, ya puedo estar tranquilo desde mi casa porque sé que tengo los ojos puestos en mi negocio todo el tiempo. Los muchachos de Devend son muy juiciosos y se toman el trabajo en serio.”`,
  },
  {
    key: 1,
    author: "María Fernanda",
    role: "Dueña",
    stars: 5,
    // imageUrl:
    //   "https://avatars.dicebear.com/v2/male/1ff492183dc51c269105f7f69c073349.svg",
    message: `“Excelente experiencia con Devend. Nos instalaron 6 cámaras de seguridad en nuestra tienda, incluyendo alarmas y control de acceso. Todo funciona a la perfección, y la tranquilidad que nos da es invaluable.”`,
  },
];
