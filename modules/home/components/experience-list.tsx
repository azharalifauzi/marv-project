import { Box, Text } from '@chakra-ui/react';
import styles from './experience-list.module.css';

interface ExperienceListProps {
  title?: string;
  description?: string;
}

const ExperienceList: React.FC<ExperienceListProps> = ({
  title,
  description
}) => {
  return (
    <Box
      maxW="400px"
      position="relative"
      pb={{ md: '12', base: '6' }}
      className={styles.list}
    >
      <Box
        position="absolute"
        left="-31px"
        top="14"
        bg="brand.gray-1"
        h="45%"
        w="2px"
        as="span"
        display="block"
      />
      <Text fontWeight="bold" mb="8" position="relative">
        <Box
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          h="10"
          w="10"
          bg="brand.secondary"
          left="-51px"
          borderRadius="50%"
        ></Box>
        {title}
      </Text>
      <Text>{description}</Text>
    </Box>
  );
};

export default ExperienceList;
