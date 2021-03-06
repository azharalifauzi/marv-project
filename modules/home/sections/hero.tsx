import { Box, Flex, Grid, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos
} from 'react-icons/md';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';

const Hero = () => {
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
    <Box as="section" h={{ md: '900px', base: '400px' }} position="relative">
      <Box
        display={{ md: 'none', base: 'block' }}
        w="100%"
        h="100%"
        maxH="400px"
        position="relative"
      >
        <Image
          src="/assets/images/hero/1.JPG"
          alt="Marv Design Interior"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <Grid
        position="absolute"
        zIndex="0"
        gridTemplateColumns="106px 2fr minmax(465px, 1fr)"
        h="100%"
        w="100%"
        display={{ md: 'grid', base: 'none' }}
      >
        <Box bg="brand.primary" h="80%" alignSelf="flex-end" />
        <Box />
        <Box bg="brand.primary" h="100%" />
      </Grid>
      <Box
        pt="140px"
        pl="20"
        mx="auto"
        maxW="container.xl"
        h="100%"
        display={{ base: 'none', md: 'block' }}
      >
        <Box position="relative" h="80%" w="90%" maxH="603px">
          <Flex
            alignItems="center"
            bottom="4"
            right="6"
            position="absolute"
            zIndex="100"
            gap="4"
          >
            <button ref={prevRef} role="group" disabled={activeIndex === 0}>
              <Icon
                h="6"
                w="6"
                fill="brand.white"
                as={MdOutlineArrowBackIos}
                _hover={{ fill: 'brand.secondary' }}
                _groupDisabled={{ fill: 'gray.400' }}
              />
            </button>
            <button ref={nextRef} role="group" disabled={activeIndex === 1}>
              <Icon
                h="6"
                w="6"
                fill="brand.white"
                as={MdOutlineArrowForwardIos}
                _hover={{ fill: 'brand.secondary' }}
                _groupDisabled={{ fill: 'gray.400' }}
              />
            </button>
          </Flex>
          <Swiper
            modules={[Navigation]}
            navigation={{}}
            onBeforeInit={handleSwiperInit}
            style={{ height: '100%', width: '100%' }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
            }}
          >
            <SwiperSlide>
              <Box w="100%" h="100%" maxH="603px" position="relative">
                <Image
                  src="/assets/images/hero/1.JPG"
                  alt="Marv Design Interior"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="bottom"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box w="100%" h="100%" maxH="603px" position="relative">
                <Image
                  src="/assets/images/hero/2.JPG"
                  alt="Marv Design Interior"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="bottom"
                />
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
