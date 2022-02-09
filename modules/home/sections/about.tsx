import { Box, Container, Grid, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import CardService from '../components/card-service';
import ExperienceList from '../components/experience-list';
import SectionTitle from '../components/section-title';

const About = () => {
  return (
    <Container maxW="container.xl" py="20" as="section" id="tentang">
      <SectionTitle mb="9">Tentang Kami</SectionTitle>
      <Text ml="7" mb="20" maxW="70%">
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
        mb="112px"
      >
        Kami memberikan <br /> pelayanan terbaik
      </Heading>
      <Grid gridTemplateColumns="repeat(3, 1fr)" gap="20" mb="140px" px="20">
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
      <Grid gridTemplateColumns="repeat(2, 1fr)" px="20">
        <Box>
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
        <Box position="relative" h="100%" w="70%" justifySelf="flex-end">
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
