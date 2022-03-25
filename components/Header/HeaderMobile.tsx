import {
  Box,
  chakra,
  Flex,
  Icon,
  Text,
  useDisclosure,
  useOutsideClick,
  VStack
} from '@chakra-ui/react';
import { LogoMarv } from 'components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Router from 'next/router';

const HeaderMobile = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { isOpen: isShow, onToggle, onClose } = useDisclosure();
  const headerRef = useRef(null);

  useOutsideClick({
    ref: headerRef,
    handler: () => {
      setOpen(false);
    }
  });

  useEffect(() => {
    const handler = () => {
      setOpen(false);
      onClose();
    };
    Router.events.on('routeChangeComplete', handler);

    return () => Router.events.off('routeChangeComplete', handler);
  }, []);

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top="0"
      left="0"
      height="20"
      background="brand.primary"
      as="header"
      display={{ lg: 'none', base: 'flex' }}
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      px="6"
      zIndex="sticky"
    >
      <Box>
        <Link href="/">
          <a>
            <LogoMarv />
          </a>
        </Link>
      </Box>
      <chakra.button onClick={() => setOpen(!isOpen)}>
        <Icon as={GiHamburgerMenu} fill="brand.secondary" h="8" w="8" />
      </chakra.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <Box
            as={motion.div}
            position="fixed"
            top="20"
            bottom="0"
            right="0"
            width="300px"
            zIndex="sticky"
            background="brand.primary"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { x: 0 },
              collapsed: { x: 400 }
            }}
          >
            <VStack
              fontFamily="aliencow"
              color="brand.secondary"
              h="100%"
              fontSize="2xl"
              pt="8"
              alignItems="flex-start"
              px="12"
            >
              <Link href="/" passHref>
                <Box as="a">BERANDA</Box>
              </Link>
              <Flex alignItems="center" onClick={onToggle}>
                <Text mr="2">JASA KAMI</Text>
                <Icon
                  as={MdOutlineKeyboardArrowDown}
                  transform={isShow ? 'rotate(180deg)' : 'rotate(0deg)'}
                  transition="all 0.2s"
                />
              </Flex>
              {isShow && (
                <>
                  <Link href="/desain-interior">
                    <a>DESAIN INTERIOR</a>
                  </Link>
                  <Link href="/desain-arsitek">
                    <a>DESAIN ARSITEK</a>
                  </Link>
                  <Link href="/jasa-pembangunan">
                    <a>JASA PEMBANGUNAN</a>
                  </Link>
                  <Link href="/custom-furniture">
                    <a>KUSTOM FURNITURE</a>
                  </Link>
                </>
              )}
              <Link href="/portfolio" passHref>
                <Box as="a">PORTFOLIO</Box>
              </Link>
              <Link href="/kontak" passHref>
                <Box as="a">KONTAK</Box>
              </Link>
            </VStack>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default HeaderMobile;
