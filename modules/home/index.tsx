import { Box, Grid } from '@chakra-ui/react';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <main>
        <Box as="section" h="900px" position="relative">
          <Grid
            position="absolute"
            zIndex="0"
            gridTemplateColumns="106px 2fr minmax(465px, 1fr)"
            h="100%"
            w="100%"
          >
            <Box bg="brand.primary" h="80%" alignSelf="flex-end" />
            <Box />
            <Box bg="brand.primary" h="100%" />
          </Grid>
          <Box pt="140px" pl="20" mx="auto" maxW="container.xl" h="100%">
            <Box w="90%" h="100%" maxH="603px" position="relative">
              <Image
                src="/assets/images/dummy-hero-1.png"
                alt="Hero Test"
                height="100%"
                width="100%"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
};

export default Home;
