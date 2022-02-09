import { Heading, HeadingProps } from '@chakra-ui/react';

const SectionTitle: React.FC<HeadingProps> = ({ children, ...otherProps }) => {
  return (
    <Heading
      {...otherProps}
      as="h2"
      fontSize="md"
      color="brand.primary"
      bg="brand.gray-1"
      px="3"
      py="1"
      w="max-content"
      borderRadius="md"
    >
      {children}
    </Heading>
  );
};

export default SectionTitle;
