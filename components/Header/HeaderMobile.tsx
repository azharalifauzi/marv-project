import { Box, chakra, Icon, VStack } from '@chakra-ui/react';
import { LogoMarv } from 'components';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const HeaderMobile = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <Box
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
              justifyContent="center"
              h="100%"
              fontSize="2xl"
            >
              <Box>BERANDA</Box>
              <Box>JASA KAMI</Box>
              <Box>PORTFOLIO</Box>
              <Box>KONTAK</Box>
            </VStack>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default HeaderMobile;
