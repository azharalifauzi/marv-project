import { Box, Flex, Grid, Icon } from '@chakra-ui/react';
import { LogoMarv } from 'components';
import Link from 'next/link';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { IoMailOutline } from 'react-icons/io5';

const Header = () => {
  return (
    <Box as="header" position="absolute" top="0" left="0" w="100%">
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
            <Box listStyleType="none" fontSize="2xl" as="li">
              <Link href="/">
                <a>BERANDA</a>
              </Link>
            </Box>
            <Box listStyleType="none" fontSize="2xl" as="li">
              <Link href="/">
                <a>JASA KAMI</a>
              </Link>
            </Box>
            <Box listStyleType="none" fontSize="2xl" as="li">
              <Link href="/">
                <a>PORTFOLIO</a>
              </Link>
            </Box>
            <Box listStyleType="none" fontSize="2xl" as="li">
              <Link href="/">
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
            href="https://instagram.com/marv"
          >
            <Icon as={BsInstagram} h="5" w="5" fill="brand.black" />
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            h="16"
            w="16"
            borderRadius="50%"
            bg="brand.lightblue"
            as="a"
            href="https://instagram.com/marv"
          >
            <Icon as={BsWhatsapp} h="5" w="5" fill="brand.black" />
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            h="16"
            w="16"
            borderRadius="50%"
            bg="brand.lightblue"
            as="a"
            href="https://instagram.com/marv"
          >
            <Icon as={IoMailOutline} h="5" w="5" fill="brand.black" />
          </Flex>
        </Grid>
      </Flex>
    </Box>
  );
};

export default Header;
