import { AspectRatio, Box, Grid, Heading } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import path from 'path';
import fs from 'fs/promises';

interface PortfolioPageProps {
  photos: string[];
}

export const getStaticProps: GetStaticProps<PortfolioPageProps> = async () => {
  const photos = await fs.readdir(
    path.join(process.cwd(), '/public/assets/images')
  );

  return {
    props: {
      photos
    }
  };
};

const PortfolioPage: NextPage<PortfolioPageProps> = ({ photos }) => {
  return (
    <main>
      <Box px={{ md: '20', base: '6' }}>
        <Heading textAlign="center" pt="40" mb="20">
          Portfolio
        </Heading>
        <Grid
          gridTemplateColumns={{
            lg: 'repeat(4, 1fr)',
            md: 'repeat(3, 1fr)',
            sm: 'repeat(2, 1fr)',
            base: '1fr'
          }}
          pb="20"
          columnGap="10"
          rowGap="6"
        >
          {photos.map((photo) => (
            <AspectRatio key={photo} ratio={1 / 1} position="relative">
              <Image
                src={`/assets/images/${photo}`}
                alt={photo}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </AspectRatio>
          ))}
        </Grid>
      </Box>
    </main>
  );
};

export default PortfolioPage;
