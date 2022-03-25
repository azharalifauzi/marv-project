import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  VStack
} from '@chakra-ui/react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import Image from 'next/image';

const KontakPage = () => {
  return (
    <main>
      <Container maxW="container.xl" pb="20">
        <Grid
          pt="40"
          alignItems="center"
          gridTemplateColumns="repeat(2, 1fr)"
          gap="20"
        >
          <Box>
            <Heading
              maxW="370px"
              fontSize={{ md: '3xl', base: '2xl' }}
              as="h1"
              mb="9"
            >
              Konsultasi dengan MARV sekarang juga
            </Heading>
            <VStack spacing={59} alignItems="flex-start">
              <Flex gap="12">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  bg="brand.primary"
                  borderRadius="50%"
                  h="12"
                  w="12"
                >
                  <Icon
                    w="26px"
                    h="26px"
                    fill="brand.secondary"
                    as={MdOutlineMailOutline}
                  />
                </Flex>
                <Box>
                  <Text fontWeight="bold" mb="1">
                    Email
                  </Text>
                  <Text>marvstudio.id@gmail.com</Text>
                </Box>
              </Flex>
              <Flex gap="12">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  bg="brand.primary"
                  borderRadius="50%"
                  h="12"
                  w="12"
                >
                  <Icon w="5" h="5" fill="brand.secondary" as={BsWhatsapp} />
                </Flex>
                <Box>
                  <Text fontWeight="bold" mb="1">
                    Telepon
                  </Text>
                  <Text>+62 812 2476 0602</Text>
                </Box>
              </Flex>
              <Flex gap="12">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  bg="brand.primary"
                  borderRadius="50%"
                  h="12"
                  w="12"
                >
                  <Icon w="5" h="5" fill="brand.secondary" as={BsInstagram} />
                </Flex>
                <Box>
                  <Text fontWeight="bold" mb="1">
                    Instagram
                  </Text>
                  <Text>@marvstudio.id</Text>
                </Box>
              </Flex>
              <Flex gap="12">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  bg="brand.primary"
                  borderRadius="50%"
                  height="12"
                  width="12"
                  minW="12"
                >
                  <Icon w="26px" h="26px" fill="brand.secondary" as={BiMap} />
                </Flex>
                <Box>
                  <Text fontWeight="bold" mb="1">
                    Lokasi
                  </Text>
                  <Text mb="8">Jl. Pelangi No. 31 Kota Bandung</Text>
                  <Text>Jl. Baji Rupa No. 11 B Kota Makassar</Text>
                </Box>
              </Flex>
            </VStack>
          </Box>
          <Box position="relative" maxH="388px" h="100%">
            <Image
              src="/assets/images/kontak.png"
              alt="room with cyan sofa"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
        </Grid>
      </Container>
    </main>
  );
};

export default KontakPage;
