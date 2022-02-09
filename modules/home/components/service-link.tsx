import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceLinkProps {
  href: string;
  title?: string;
  src: string;
}

const ServiceLink: React.FC<ServiceLinkProps> = ({ href, title, src }) => {
  return (
    <Link href={href}>
      <a role="group">
        <Box position="relative" h="206px" mb="6">
          <Image alt="Desain Interior" layout="fill" src={src} />
        </Box>
        <Text
          fontSize="xl"
          fontWeight="bold"
          textAlign="center"
          _groupHover={{ color: 'brand.secondary' }}
        >
          {title}
        </Text>
      </a>
    </Link>
  );
};

export default ServiceLink;
