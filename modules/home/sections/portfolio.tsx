import { Box, Button, chakra, Container, Grid } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '../components/section-title';

const Portofolio = () => {
  return (
    <Container
      maxW="container.xl"
      as="section"
      py={{ md: '20', base: '6' }}
      id="portfolio"
    >
      <SectionTitle mb={{ md: '16', base: '8' }}>Portfolio</SectionTitle>
      <Grid
        gridTemplateColumns={{ lg: 'repeat(3, 1fr)', base: 'repeat(1, 1fr)' }}
        gridTemplateRows={{ lg: '539px 280px', base: 'repeat(4, 200px)' }}
        gap={{ lg: '20', base: '10' }}
      >
        <Box position="relative" gridColumn="1 / -1">
          <Image
            alt="portoflio marv"
            src="/assets/images/home-portfolio-1.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <Box position="relative">
          <Image
            alt="portoflio marv"
            src="/assets/images/home-portfolio-2.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <Box position="relative">
          <Image
            alt="portoflio marv"
            src="/assets/images/home-portfolio-3.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <Box position="relative">
          <Image
            alt="portoflio marv"
            src="/assets/images/home-portfolio-4.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Grid>
      <Box mt="8" textAlign={{ lg: 'right', base: 'center' }}>
        <Link href="/portfolio" passHref>
          <chakra.button
            as="a"
            bg="brand.primary"
            color="brand.secondary"
            px="6"
            py="3"
            borderRadius="2px"
            _hover={{ color: 'brand.gray-1' }}
          >
            Lainnya
          </chakra.button>
        </Link>
      </Box>
    </Container>
  );
};

export default Portofolio;
