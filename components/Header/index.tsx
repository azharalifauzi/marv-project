import { Box, Flex, Grid, Icon, Text, VStack } from '@chakra-ui/react';
import { LogoMarv } from 'components';
import Link from 'next/link';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';
import HeaderMobile from './HeaderMobile';

const Header = () => {
  return (
    <>
      <HeaderMobile />
      <Box
        as="header"
        position="absolute"
        top="0"
        left="0"
        w="100%"
        zIndex="sticky"
        display={{ lg: 'block', base: 'none' }}
      >
        <Flex
          h="28"
          px="106px"
          as="nav"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex alignItems="center">
            <Box mr="20">
              <Link href="/">
                <a>
                  <LogoMarv />
                </a>
              </Link>
            </Box>
            <Grid
              fontFamily="aliencow"
              as="ul"
              gridTemplateColumns="repeat(4, 1fr)"
              gap="10"
            >
              <Box
                listStyleType="none"
                fontSize="2xl"
                as="li"
                _hover={{ color: 'brand.secondary' }}
              >
                <Link href="/">
                  <a>BERANDA</a>
                </Link>
              </Box>
              <Box
                listStyleType="none"
                fontSize="2xl"
                as="li"
                _hover={{ color: 'brand.secondary' }}
                role="group"
                position="relative"
              >
                <Text cursor="pointer">JASA KAMI</Text>
                <VStack
                  position="absolute"
                  top="8"
                  left="0"
                  as="ul"
                  _groupHover={{ display: 'flex' }}
                  display="none"
                  bg="brand.white"
                  borderRadius="md"
                  boxShadow="lg"
                  px="4"
                  py="2"
                  w="max-content"
                  alignItems="flex-start"
                  color="brand.black"
                >
                  <Box
                    listStyleType="none"
                    fontSize="2xl"
                    as="li"
                    _hover={{ color: 'brand.secondary' }}
                  >
                    <Link href="/desain-interior">
                      <a>DESAIN INTERIOR</a>
                    </Link>
                  </Box>
                  <Box
                    listStyleType="none"
                    fontSize="2xl"
                    as="li"
                    _hover={{ color: 'brand.secondary' }}
                  >
                    <Link href="/desain-arsitek">
                      <a>DESAIN ARSITEK</a>
                    </Link>
                  </Box>
                  <Box
                    listStyleType="none"
                    fontSize="2xl"
                    as="li"
                    _hover={{ color: 'brand.secondary' }}
                  >
                    <Link href="/jasa-pembangunan">
                      <a>JASA PEMBANGUNAN</a>
                    </Link>
                  </Box>
                  <Box
                    listStyleType="none"
                    fontSize="2xl"
                    as="li"
                    _hover={{ color: 'brand.secondary' }}
                  >
                    <Link href="/custom-furniture">
                      <a>KOSTUM FURNITURE</a>
                    </Link>
                  </Box>
                </VStack>
              </Box>
              <Box
                listStyleType="none"
                fontSize="2xl"
                as="li"
                _hover={{ color: 'brand.secondary' }}
              >
                <Link href="/portfolio">
                  <a>PORTFOLIO</a>
                </Link>
              </Box>
              <Box
                listStyleType="none"
                fontSize="2xl"
                as="li"
                _hover={{ color: 'brand.secondary' }}
              >
                <Link href="/kontak">
                  <a>KONTAK</a>
                </Link>
              </Box>
            </Grid>
          </Flex>
          <Grid gap="14" gridTemplateColumns="repeat(3, 1fr)">
            <Flex
              alignItems="center"
              justifyContent="center"
              h="16"
              w="16"
              borderRadius="50%"
              bg="brand.lightblue"
              as="a"
              href="https://instagram.com/marvstudio.id"
              role="group"
              target="_blank"
            >
              <Icon
                as={BsInstagram}
                h="5"
                w="5"
                fill="brand.black"
                _groupHover={{
                  fill: 'brand.secondary'
                }}
              />
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              h="16"
              w="16"
              borderRadius="50%"
              bg="brand.lightblue"
              as="a"
              href="https://wa.me/6281224760602?lang=id"
              role="group"
              target="_blank"
            >
              <Icon
                as={BsWhatsapp}
                h="5"
                w="5"
                fill="brand.black"
                _groupHover={{
                  fill: 'brand.secondary'
                }}
              />
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              h="16"
              w="16"
              borderRadius="50%"
              bg="brand.lightblue"
              as="a"
              href="mailto:marvstudio.id@gmail.com"
              role="group"
            >
              <Icon
                as={MdOutlineMailOutline}
                h="5"
                w="5"
                fill="brand.black"
                _groupHover={{
                  fill: 'brand.secondary'
                }}
              />
            </Flex>
          </Grid>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
