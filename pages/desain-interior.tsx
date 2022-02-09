import { GetStaticProps, NextPage } from 'next';
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
  return <RenderPage swiperItems={swiperItems} />;
};

export default DesainInteriorPage;
