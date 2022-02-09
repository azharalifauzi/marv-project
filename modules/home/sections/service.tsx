import { Container, Grid } from '@chakra-ui/react';
import SectionTitle from '../components/section-title';
import ServiceLink from '../components/service-link';

const Service = () => {
  return (
    <Container maxW="container.xl" as="section" pb="20">
      <SectionTitle mb="24">Jasa Kami</SectionTitle>
      <Grid gridTemplateColumns="repeat(4, 1fr)" gap="16">
        <ServiceLink
          src="/assets/images/service-design-interior.png"
          href="/"
          title="Desain Interior"
        />
        <ServiceLink
          src="/assets/images/service-design-architecture.png"
          href="/"
          title="Desain Arsitektur"
        />
        <ServiceLink
          src="/assets/images/service-construction.png"
          href="/"
          title="Jasa Konstruksi"
        />
        <ServiceLink
          src="/assets/images/service-custom-furniture.png"
          href="/"
          title="Custom Furniture"
        />
      </Grid>
    </Container>
  );
};

export default Service;
