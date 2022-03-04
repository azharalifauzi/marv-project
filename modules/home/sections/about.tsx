import { Box, Container, Grid, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import CardService from '../components/card-service';
import ExperienceList from '../components/experience-list';
import SectionTitle from '../components/section-title';

const About = () => {
  return (
    <Container
      maxW="container.xl"
      py={{ md: '20', base: '10' }}
      as="section"
      id="tentang"
    >
      <SectionTitle mb="9">Tentang Kami</SectionTitle>
      <Text
        ml={{ md: '7', base: '4' }}
        mb="20"
        maxW={{ md: '70%', base: '90%' }}
      >
        MARV Studio <br /> Hadir sebagai konsultan desain interior, desain
        arsitek, jasa pembangunan, costum furniture dan kabinet yang berlokasi
        di Bandung dan Makassar. Marv Memiliki designer dan arsitek yang
        professional di bidangnya maka dari itu Marv berkomitmen untuk selalu
        dapat memenuhi keinginan dan kebutuhan customer.{' '}
      </Text>
      <Heading
        fontSize="xl"
        as="h3"
        color="brand.primary"
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          width: '84px',
          height: '2px',
          background: 'brand.gray-1',
          top: '10px',
          left: '-120px'
        }}
        ml="123px"
        mb={{ md: '112px', base: '12' }}
      >
        Kami memberikan <br /> pelayanan terbaik
      </Heading>
      <Grid
        gridTemplateColumns={{ lg: 'repeat(3, 1fr)', base: 'repeat(1, 1fr)' }}
        columnGap="20"
        rowGap="10"
        mb={{ lg: '140px', base: '16' }}
        px={{ lg: '20', base: '10' }}
      >
        <CardService
          title="Kualitas"
          description="Marv memberikan desain dan material berkualitas dengan harga yang terjangkau"
        />
        <CardService
          title="Garansi"
          description="Dapatkan garansi kapanpun anda menggunakan jasa desain dan konstruksi Marv."
        />
        <CardService
          title="Konsultasi Terarah"
          description="Tidak perlu ragu karena Marv akan membantu anda untuk mewujudkan impian anda."
        />
      </Grid>
      <Heading
        fontSize="xl"
        as="h3"
        color="brand.primary"
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          width: '84px',
          height: '2px',
          background: 'brand.gray-1',
          top: '10px',
          left: '-120px'
        }}
        ml="123px"
        mb="16"
      >
        Kami memberikan <br /> pengalaman terbaik
      </Heading>
      <Grid
        gridTemplateColumns={{ md: 'repeat(2, 1fr)', base: '100px 1fr' }}
        px={{ md: '20', base: '0' }}
      >
        <Box
          gridColumn={{ md: '1 / 2', base: '2 / 3' }}
          ml={{ md: '0', base: '16' }}
        >
          <ExperienceList
            title="Perencanaan"
            description="Pada tahap perencanaan, Marv akan membantu anda untuk menetapkan desain yang sesuai dengan keinginan."
          />
          <ExperienceList
            title="Proses"
            description="Marv mulai melakukan proses desain serta perhitungan anggaran sesuai dengan perencanaan."
          />
          <ExperienceList
            title="Pembangunan"
            description="Tahap akhir merupakan tahap pembangunan dengan jangka waktu yang telah disepakati."
          />
        </Box>
        <Box
          gridColumn={{ md: '2 / 3', base: '1 / 2' }}
          position="relative"
          h={{ md: '100%', base: '130px' }}
          w={{ md: '70%', base: '100%' }}
          justifySelf="flex-end"
          gridRow="1 / 2"
        >
          <Image
            layout="fill"
            alt="Design Interior"
            src="/assets/images/dummy-about-home.png"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default About;
