import { Container, Heading, Text } from '@chakra-ui/react';
import { Header } from 'components';
import Head from 'next/head';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Halaman tidak dapat ditemukan :(</title>
      </Head>
      <Header />
      <Container
        as="main"
        minH="calc(100vh - 349px)"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h1" color="brand.primary" mb="6">
          404
        </Heading>
        <Text size="xl" fontWeight="bold">
          sorry, we were unable to find that page
        </Text>
      </Container>
    </>
  );
};

export default NotFound;
