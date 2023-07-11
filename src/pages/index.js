import Layout from "@/components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Cameras</title>
        <meta
          name="description"
          content="Ofrecemos soluciones de seguridad a medida para hogares y empresas. Protege lo que más te importa con nuestras cámaras y alarmas de alta calidad. ¡Consulta nuestras promociones actuales!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello</h1>
    </Layout>
  );
}
