import Layout from "@/components/Layout";
import Head from "next/head";
import { Box, Button, Typography } from "@mui/material";
import Section from "@/components/Section";

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
          <Typography component="h2" variant="h3" fontWeight="600">
            About Us
          </Typography>
        </Section>
        <Section id="services" name="services">
          <Typography component="h2" variant="h3" fontWeight="600">
            Services
          </Typography>
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
