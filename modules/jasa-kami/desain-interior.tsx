import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import ImageDecorator from './components/image-decorator';
import PortfolioSwiper from './components/portfolio-swiper';

interface DesainInteriorProps {
  swiperItems: PortfolioSwiperItem[];
}

const DesainInterior: React.FC<DesainInteriorProps> = ({ swiperItems }) => {
  const [activeImage, setActiveImage] = useState<string>(swiperItems[0].src);

  return (
    <main>
      <Heading
        as="h1"
        fontSize={{ md: '4xl', base: '3xl' }}
        textAlign="center"
        pt="40"
        mb="24"
      >
        Desain Interior
      </Heading>
      <Flex justifyContent="center" mb="40">
        <Box h="473px" maxW="742px" w="90%" position="relative">
          <Image
            src={`/assets/images/desain-interior/${
              !activeImage ? swiperItems[0].src : activeImage
            }`}
            layout="fill"
            alt="desain interior"
            objectFit="contain"
          />
          <ImageDecorator
            top={{ md: '16', base: '-12' }}
            left="0"
            transform={{ md: 'translateX(-50%)', base: 'translateX(10%)' }}
            title="Desainer Professional"
            description="Marv memiliki tim desainer yang profesional dan berpengalaman."
          />
          <ImageDecorator
            bottom={{ md: '16', base: '-12' }}
            right="0"
            transform={{ md: 'translateX(50%)', base: 'translateX(-10%)' }}
            title="Desain yang berkelas"
            description="Memadukan tren dengan desain yang anda inginkan."
          />
        </Box>
      </Flex>
      <PortfolioSwiper
        items={swiperItems}
        onMouseOverItem={(src) => setActiveImage(src)}
        activeImage={activeImage}
        pathToFolder="/assets/images/desain-interior/"
      />
    </main>
  );
};

export default DesainInterior;
