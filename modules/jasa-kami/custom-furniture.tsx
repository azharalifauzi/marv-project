import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import ImageDecorator from './components/image-decorator';
import PortfolioSwiper from './components/portfolio-swiper';

interface CustomFurnitureProps {
  swiperItems: PortfolioSwiperItem[];
}

const CustomFurniture: React.FC<CustomFurnitureProps> = ({ swiperItems }) => {
  const [activeImage, setActiveImage] = useState<string>(swiperItems[0].src);

  return (
    <main>
      <Heading as="h1" fontSize="4xl" textAlign="center" pt="40" mb="20">
        Custom Furniture
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
          <ImageDecorator
            top="16"
            left="0"
            transform="translateX(-50%)"
            title="Desain yang berkelas"
            description="Furniture yang berkelas, desain yang kekinian. Marv hadir bersama anda."
          />
          <ImageDecorator
            bottom="16"
            right="0"
            transform="translateX(50%)"
            title="Material yang berkualitas"
            description="Marv menjamin kualitas material yang digunakan."
          />
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

export default CustomFurniture;
