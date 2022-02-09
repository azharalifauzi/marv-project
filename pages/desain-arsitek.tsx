import { GetStaticProps, NextPage } from 'next';
import fs from 'fs/promises';
import RenderPage from 'modules/jasa-kami/desain-arsitek';
import path from 'path';

interface DesainArsitekPageProps {
  swiperItems: PortfolioSwiperItem[];
}

export const getStaticProps: GetStaticProps<
  DesainArsitekPageProps
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

const DesainArsitekPage: NextPage<DesainArsitekPageProps> = ({
  swiperItems
}) => {
  return <RenderPage swiperItems={swiperItems} />;
};

export default DesainArsitekPage;
