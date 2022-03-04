import { Box, chakra, Container, Grid, Text } from '@chakra-ui/react';
import SectionTitle from '../components/section-title';
import TestimonialCard from '../components/testimonial-card';

const Testimonial = () => {
  return (
    <Container
      maxW="container.xl"
      as="section"
      py={{ md: '20', base: '12' }}
      id="testimonial"
    >
      <SectionTitle mb={{ md: '24', base: '8' }}>Testimonial</SectionTitle>
      <Grid
        gridTemplateColumns={{ md: 'repeat(2, 1fr)', base: '1fr' }}
        gap={{ md: '20', base: '10' }}
        mb={{ md: '36', base: '12' }}
      >
        <TestimonialCard
          stars={5}
          testimony="lorem ipsum sit amet dolor"
          name="Suparman"
          title="Head of Security Batam Center"
        />
        <TestimonialCard
          stars={5}
          testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem qui voluptatum repudiandae eos alias nisi quae cum expedita, voluptatibus quidem rem quaerat earum deleniti error doloribus. Consectetur praesentium vitae veniam."
          name="Saykoji"
          title="Professioinal Rapper"
        />
      </Grid>
      <Box textAlign="center" bg="brand.primary" py="8" maxW="790" mx="auto">
        <Text fontSize="2xl" fontWeight="bold" color="brand.secondary" mb="7">
          Berapa biaya desain interior?
        </Text>
        <chakra.a
          bg="brand.gray-1"
          py="2"
          px="6"
          color="brand.primary"
          _hover={{ color: 'brand.secondary' }}
          href="https://wa.me/6281224760602?lang=id"
        >
          Hubungi Kami
        </chakra.a>
      </Box>
    </Container>
  );
};

export default Testimonial;
