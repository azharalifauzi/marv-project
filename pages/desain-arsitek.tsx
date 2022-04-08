import { GetStaticProps, NextPage } from 'next';
import fs from 'fs/promises';
import RenderPage from 'modules/jasa-kami/desain-arsitek';
import path from 'path';
import Head from 'next/head';

interface DesainArsitekPageProps {
  swiperItems: PortfolioSwiperItem[];
}

export const getStaticProps: GetStaticProps<
  DesainArsitekPageProps
> = async () => {
  const photos = await fs.readdir(
    path.join(process.cwd(), '/public/assets/images/desain-arsitek')
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

const DesainArsitekPage: NextPage<DesainArsitekPageProps> = ({
  swiperItems
}) => {
  return (
    <>
      <Head>
        <title>Desain Arsitek</title>
        <meta
          name="description"
          content="Marv memiliki tim desainer arsitek berpengalaman. Marv menjamin kualitas desain arsitek untuk bangunan anda."
        />
        <meta
          property="og:description"
          content="Marv memiliki tim desainer arsitek berpengalaman. Marv menjamin kualitas desain arsitek untuk bangunan anda."
        />
        <link rel="canonical" href="https://marvproject.com/desain-arsitek" />
      </Head>
      <RenderPage swiperItems={swiperItems} />
    </>
  );
};

export default DesainArsitekPage;
