import type { NextPage } from 'next';
import RenderPage from 'modules/home';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marv Studio | Arsitektur, Interior, dan Furniture</title>
        <meta
          name="description"
          content="MARV Studio Hadir sebagai konsultan desain interior, desain arsitek, jasa pembangunan, custom furniture dan kabinet yang berlokasi di Bandung dan Makassar. Marv Memiliki designer dan arsitek yang professional di bidangnya maka dari itu Marv berkomitmen untuk selalu dapat memenuhi keinginan dan kebutuhan customer."
        />
        <meta
          property="og:description"
          content="MARV Studio Hadir sebagai konsultan desain interior, desain arsitek, jasa pembangunan, custom furniture dan kabinet yang berlokasi di Bandung dan Makassar. Marv Memiliki designer dan arsitek yang professional di bidangnya maka dari itu Marv berkomitmen untuk selalu dapat memenuhi keinginan dan kebutuhan customer."
        />
        <link rel="canonical" href="https://marvproject.com" />
      </Head>
      <RenderPage />
    </>
  );
};

export default Home;
