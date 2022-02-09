import { Box, Button, chakra, Container, Grid } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '../components/section-title';

const Portofolio = () => {
  return (
    <Container maxW="container.xl" as="section" py="20">
      <SectionTitle mb="16">Portfolio</SectionTitle>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridTemplateRows="539px 280px"
        gap="20"
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
      <Box mt="8" textAlign="right">
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
