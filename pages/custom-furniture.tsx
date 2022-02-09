import { GetStaticProps, NextPage } from 'next';
import fs from 'fs/promises';
import RenderPage from 'modules/jasa-kami/custom-furniture';
import path from 'path';

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
  return <RenderPage swiperItems={swiperItems} />;
};

export default CustomFurniturePage;
