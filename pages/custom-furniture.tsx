import { GetStaticProps, NextPage } from 'next';
import fs from 'fs/promises';
import RenderPage from 'modules/jasa-kami/custom-furniture';
import path from 'path';
import Head from 'next/head';

interface CustomFurniturePageProps {
  swiperItems: PortfolioSwiperItem[];
}

export const getStaticProps: GetStaticProps<
  CustomFurniturePageProps
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

const CustomFurniturePage: NextPage<CustomFurniturePageProps> = ({
  swiperItems
}) => {
  return (
    <>
      <Head>
        <title>Kustom Furniture</title>
        <meta
          name="description"
          content="Furniture yang berkelas, desain yang kekinian. Marv hadir bersama anda. Marv menjamin kualitas material yang digunakan."
        />
        <meta
          property="og:description"
          content="Furniture yang berkelas, desain yang kekinian. Marv hadir bersama anda. Marv menjamin kualitas material yang digunakan."
        />
        <link rel="canonical" href="https://marvproject.com/custom-furniture" />
      </Head>
      <RenderPage swiperItems={swiperItems} />;
    </>
  );
};

export default CustomFurniturePage;
