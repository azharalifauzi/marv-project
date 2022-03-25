import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import fs from 'fs/promises';
import RenderPage from 'modules/jasa-kami/desain-interior';
import path from 'path';

interface DesainInteriorPageProps {
  swiperItems: PortfolioSwiperItem[];
}

export const getStaticProps: GetStaticProps<
  DesainInteriorPageProps
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

const DesainInteriorPage: NextPage<DesainInteriorPageProps> = ({
  swiperItems
}) => {
  return (
    <>
      <Head>
        <title>Desain Interior</title>
        <meta
          name="description"
          content="Marv memiliki tim desainer yang profesional dan berpengalaman. Memadukan tren dengan desain yang anda inginkan."
        />
        <meta
          property="og:description"
          content="Marv memiliki tim desainer yang profesional dan berpengalaman. Memadukan tren dengan desain yang anda inginkan."
        />
        <link rel="canonical" href="https://marvproject.com/desain-interior" />
      </Head>
      <RenderPage swiperItems={swiperItems} />;
    </>
  );
};

export default DesainInteriorPage;
