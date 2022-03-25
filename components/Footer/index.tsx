import { Box, Flex, Grid, Icon, Text, VStack } from '@chakra-ui/react';
import { LogoMarvStandalone } from 'components';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <Flex
        justifyContent="space-between"
        px={{ md: '106px', base: '6' }}
        py="8"
        borderTop="1px solid"
        borderColor="brand.gray-1"
        flexDir={{ base: 'column', lg: 'row' }}
        gap="6"
      >
        <Box>
          <Icon as={LogoMarvStandalone} />
          <Text
            display={{ md: 'block', base: 'none' }}
            fontSize="sm"
            mt="6"
            maxW="264px"
          >
            MARV Studio <br />
            Bergerak di bidang jasa desain interior, desain arsitek, jasa
            pembangunan, custom furniture dan kabinet. Marv akan memenuhi
            keinginan dan kebutuhan anda.
          </Text>
        </Box>
        <Grid
          gridTemplateColumns={{ md: 'repeat(3, 1fr)', base: '1fr' }}
          columnGap="32"
          rowGap="6"
        >
          <Box>
            <Text fontWeight="bold" mb="6">
              Kontak
            </Text>
            <VStack spacing="3" alignItems="flex-start">
              <Link href="/kontak">
                <a>
                  <Text fontSize="sm" _hover={{ color: 'brand.secondary' }}>
                    Telepon
                  </Text>
                </a>
              </Link>
              <Text
                as="a"
                href="mailto:marvstudio.id@gmail.com"
                fontSize="sm"
                _hover={{ color: 'brand.secondary' }}
              >
                Email
              </Text>
              <Link href="/kontak">
                <a>
                  <Text fontSize="sm" _hover={{ color: 'brand.secondary' }}>
                    Lokasi
                  </Text>
                </a>
              </Link>
              <Text
                as="a"
                href="https://instagram.com/marvstudio.id"
                fontSize="sm"
                _hover={{ color: 'brand.secondary' }}
                target="_blank"
              >
                Instagram
              </Text>
            </VStack>
          </Box>
          <Box>
            <Text fontWeight="bold" mb="6">
              Pelayanan
            </Text>
            <VStack spacing="3" alignItems="flex-start">
              <Link href="/desain-interior">
                <a>
                  <Text fontSize="sm" _hover={{ color: 'brand.secondary' }}>
                    Desain Interior
                  </Text>
                </a>
              </Link>
              <Link href="/desain-arsitek">
                <a>
                  <Text fontSize="sm" _hover={{ color: 'brand.secondary' }}>
                    Desain Arsitek
                  </Text>
                </a>
              </Link>
              <Link href="/jasa-pembangunan">
                <a>
                  <Text fontSize="sm" _hover={{ color: 'brand.secondary' }}>
                    Jasa Pembangunan
                  </Text>
                </a>
              </Link>
              <Link href="/custom-furniture">
                <a>
                  <Text fontSize="sm" _hover={{ color: 'brand.secondary' }}>
                    Kostum Furniture
                  </Text>
                </a>
              </Link>
            </VStack>
          </Box>
          <Box display={{ md: 'block', base: 'none' }}>
            <Text fontWeight="bold" mb="6">
              Tentang Kami
            </Text>
            <VStack spacing="3" alignItems="flex-start">
              <Link href="/#tentang">
                <a>
                  <Text fontSize="sm" _hover={{ color: 'brand.secondary' }}>
                    Kenapa Marv
                  </Text>
                </a>
              </Link>
              <Link href="/#jasa-kami">
                <a>
                  <Text fontSize="sm" _hover={{ color: 'brand.secondary' }}>
                    Jasa Kami
                  </Text>
                </a>
              </Link>
              <Link href="/#portfolio">
                <a>
                  <Text fontSize="sm" _hover={{ color: 'brand.secondary' }}>
                    Portfolio
                  </Text>
                </a>
              </Link>
              <Link href="/#testimonial">
                <a>
                  <Text fontSize="sm" _hover={{ color: 'brand.secondary' }}>
                    Testimonial
                  </Text>
                </a>
              </Link>
            </VStack>
          </Box>
        </Grid>
      </Flex>
      <Box h="72px" bg="brand.primary" />
    </footer>
  );
};

export default Footer;
