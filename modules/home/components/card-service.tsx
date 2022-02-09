import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface CardServiceProps {
  title?: string;
  description?: string;
}

const CardService: React.FC<CardServiceProps> = ({ title, description }) => {
  return (
    <Box>
      <Text
        fontWeight="bold"
        mb="2"
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          height: '40px',
          width: '40px',
          borderRadius: '50%',
          background: 'brand.secondary',
          top: '50%',
          transform: 'translateY(-50%)',
          left: '-28px',
          zIndex: '-1'
        }}
      >
        {title}
      </Text>
      <Text>{description}</Text>
    </Box>
  );
};

export default CardService;
