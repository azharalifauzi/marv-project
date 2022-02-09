import { Avatar, Box, Flex, Icon, Text } from '@chakra-ui/react';
import { TiStarFullOutline } from 'react-icons/ti';

interface TestimonialCardProps {
  stars: number;
  testimony?: string;
  name?: string;
  title?: string;
  photoSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  stars,
  testimony,
  name,
  title,
  photoSrc
}) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      bg="brand.primary"
      px="14"
      py="9"
      justifyContent="space-between"
    >
      <Flex mb="10" alignItems="center" gap="2">
        {Array.from(new Array(stars)).map((_value, index) => (
          <Icon
            key={`stars-${index}`}
            h="8"
            w="8"
            as={TiStarFullOutline}
            fill="brand.secondary"
          />
        ))}
      </Flex>
      <Text color="brand.gray-1" mb="8">
        {testimony}
      </Text>
      <Flex gap="4" alignSelf="flex-start">
        <Avatar name={name} src={photoSrc} />
        <Box color="brand.gray-1">
          <Text fontSize="sm" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="sm">{title}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default TestimonialCard;
