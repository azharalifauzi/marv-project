import {
  AspectRatio,
  Box,
  Button,
  Grid,
  Heading,
  chakra
} from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import path from 'path';
import fs from 'fs/promises';
import Head from 'next/head';
import { useState } from 'react';

interface PortfolioPageProps {
  photos: string[];
}

export const getStaticProps: GetStaticProps<PortfolioPageProps> = async () => {
  const customFurnitures = (
    await fs.readdir(
      path.join(process.cwd(), '/public/assets/images/custom-furniture')
    )
  ).map((path) => `/assets/images/custom-furniture/${path}`);
  const designArchitectures = (
    await fs.readdir(
      path.join(process.cwd(), '/public/assets/images/desain-arsitek')
    )
  ).map((path) => `/assets/images/desain-arsitek/${path}`);
  const designInteriors = (
    await fs.readdir(
      path.join(process.cwd(), '/public/assets/images/desain-interior')
    )
  ).map((path) => `/assets/images/desain-interior/${path}`);
  const buildServices = (
    await fs.readdir(
      path.join(process.cwd(), '/public/assets/images/jasa-pembangunan')
    )
  ).map((path) => `/assets/images/jasa-pembangunan/${path}`);

  return {
    props: {
      photos: [
        ...customFurnitures,
        ...designArchitectures,
        ...designInteriors,
        ...buildServices
      ]
    }
  };
};

const PortfolioPage: NextPage<PortfolioPageProps> = ({ photos }) => {
  const [page, setPage] = useState(1);

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Kumpulan hasil karya Marv Project." />
        <meta
          property="og:description"
          content="Kumpulan hasil karya Marv Project."
        />
        <link rel="canonical" href="https://marvproject.com" />
      </Head>
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
            {photos.slice(0, 16 * page).map((photo) => (
              <AspectRatio key={photo} ratio={1 / 1} position="relative">
                <Image
                  src={photo}
                  alt={photo}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </AspectRatio>
            ))}
          </Grid>
          <Box textAlign="center" mb="8">
            {page * 16 < photos.length && (
              <chakra.button
                bg="brand.primary"
                color="brand.secondary"
                px="6"
                py="3"
                borderRadius="2px"
                onClick={() => setPage(page + 1)}
              >
                Lihat Lebih Banyak
              </chakra.button>
            )}
          </Box>
        </Box>
      </main>
    </>
  );
};

export default PortfolioPage;
