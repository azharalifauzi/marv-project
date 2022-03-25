import { Box, BoxProps, Text } from '@chakra-ui/react';
import React from 'react';

interface ImageDecoratorProps extends BoxProps {
  title?: string;
  description?: string;
}

const ImageDecorator: React.FC<ImageDecoratorProps> = ({
  title,
  description,
  ...otherProps
}) => {
  return (
    <Box
      {...otherProps}
      bg="brand.primary"
      textAlign="center"
      position="absolute"
      color="brand.white"
      px="4"
      py="2"
      fontSize={{ md: 'md', base: 'sm' }}
    >
      <Text fontWeight="bold" mb="2">
        {title}
      </Text>
      <Text maxW="234px">{description}</Text>
    </Box>
  );
};

export default ImageDecorator;
