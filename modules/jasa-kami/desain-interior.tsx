import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import PortfolioSwiper from './components/portfolio-swiper';

interface DesainInteriorProps {
  swiperItems: PortfolioSwiperItem[];
}

const DesainInterior: React.FC<DesainInteriorProps> = ({ swiperItems }) => {
  const [activeImage, setActiveImage] = useState<string>(swiperItems[0].src);

  return (
    <main>
      <Heading as="h1" fontSize="4xl" textAlign="center" pt="40" mb="20">
        Desain Interior
      </Heading>
      <Flex justifyContent="center" mb="40">
        <Box h="473px" maxW="742px" w="90%" position="relative">
          <Image
            src={`/assets/images/${
              !activeImage ? swiperItems[0].src : activeImage
            }`}
            layout="fill"
            alt="desain interior"
            objectFit="cover"
            objectPosition="center"
          />
          <Box
            bg="brand.primary"
            textAlign="center"
            position="absolute"
            top="16"
            left="0"
            color="brand.white"
            px="4"
            py="2"
            transform="translateX(-50%)"
          >
            <Text fontWeight="bold">Desainer Professional</Text>
            <Text maxW="234px">
              Marv memiliki tim desainer yang profesional dan berpengalaman.
            </Text>
          </Box>
          <Box
            bg="brand.primary"
            textAlign="center"
            position="absolute"
            bottom="16"
            right="0"
            color="brand.white"
            px="4"
            py="2"
            transform="translateX(50%)"
          >
            <Text fontWeight="bold">Desain yang berkelas</Text>
            <Text maxW="234px">
              Memadukan tren dengan desain yang anda inginkan.
            </Text>
          </Box>
        </Box>
      </Flex>
      <PortfolioSwiper
        items={swiperItems}
        onMouseOverItem={(src) => setActiveImage(src)}
        activeImage={activeImage}
      />
    </main>
  );
};

export default DesainInterior;
