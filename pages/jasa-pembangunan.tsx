import { GetStaticProps, NextPage } from 'next';
import fs from 'fs/promises';
import RenderPage from 'modules/jasa-kami/jasa-pembangunan';
import path from 'path';
import Head from 'next/head';

interface JasaPembangunanPageProps {
  swiperItems: PortfolioSwiperItem[];
}

export const getStaticProps: GetStaticProps<
  JasaPembangunanPageProps
> = async () => {
  const photos = await fs.readdir(
    path.join(process.cwd(), '/public/assets/images')
  );
  const swiperItems: PortfolioSwiperItem[] = photos.map((photo) => ({
    alt: photo,
    src: photo
  }));

  return {
    props: {
      swiperItems
    }
  };
};

const JasaPembangunanPage: NextPage<JasaPembangunanPageProps> = ({
  swiperItems
}) => {
  return (
    <>
      <Head>
        <title>Jasa Pembangunan</title>
        <meta
          name="description"
          content="Proses pembangunan ditangani oleh pekerja dengan jam terbang yang tinggi. Proses pembangunan akan diawasi oleh pihak yang bertanggung jawab."
        />
        <meta
          property="og:description"
          content="Proses pembangunan ditangani oleh pekerja dengan jam terbang yang tinggi. Proses pembangunan akan diawasi oleh pihak yang bertanggung jawab."
        />
        <link rel="canonical" href="https://marvproject.com/jasa-pembangunan" />
      </Head>
      <RenderPage swiperItems={swiperItems} />;
    </>
  );
};

export default JasaPembangunanPage;
