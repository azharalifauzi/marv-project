import { AspectRatio, Box, chakra, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos
} from 'react-icons/md';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

interface PortfolioSwiperProps {
  items: PortfolioSwiperItem[];
  onMouseOverItem?: (src: string) => void;
  activeImage?: string;
}

const PortfolioSwiper: React.FC<PortfolioSwiperProps> = ({
  items,
  onMouseOverItem,
  activeImage
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);

  const handleSwiperInit = (swiper: SwiperType) => {
    const navigation = swiper.params.navigation;
    if (typeof navigation !== 'boolean' && navigation) {
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
    }
  };

  return (
    <Box mb="36" position="relative">
      <chakra.button
        ref={prevRef}
        role="group"
        disabled={activeIndex === 0}
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        left="3"
        zIndex="sticky"
      >
        <Icon
          h="6"
          w="6"
          fill="brand.gray-2"
          as={MdOutlineArrowBackIos}
          _hover={{ fill: 'brand.secondary' }}
          _groupDisabled={{ fill: 'gray.400' }}
        />
      </chakra.button>
      <chakra.button
        ref={nextRef}
        role="group"
        disabled={activeIndex === items.length}
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        right="3"
        zIndex="sticky"
      >
        <Icon
          h="6"
          w="6"
          fill="brand.gray-2"
          as={MdOutlineArrowForwardIos}
          _hover={{ fill: 'brand.secondary' }}
          _groupDisabled={{ fill: 'gray.400' }}
        />
      </chakra.button>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        onBeforeInit={handleSwiperInit}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {items.map(({ alt, src }) => (
          <SwiperSlide key={src} style={{ maxWidth: 302 }}>
            <Box
              textAlign="center"
              maxW="324px"
              px="6"
              role="group"
              cursor="pointer"
              onMouseOver={() =>
                onMouseOverItem ? onMouseOverItem(src) : undefined
              }
            >
              <AspectRatio position="relative" ratio={1 / 1}>
                <Image
                  src={`/assets/images/${src}`}
                  alt={alt}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </AspectRatio>
              <Text
                fontWeight="bold"
                fontSize="xl"
                mt="7"
                _groupHover={{ color: 'brand.secondary' }}
                color={src === activeImage ? 'brand.secondary' : undefined}
              >
                Lorem Ipsum
              </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PortfolioSwiper;
