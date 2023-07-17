import { Container, Flex, Image } from "@chakra-ui/react";
import Hamburger from "hamburger-react";
import React from "react";

export const HEADER_HEIGHT = 16;

export const Header: React.FC = () => (
  <Flex
    position="fixed"
    top={0}
    h={HEADER_HEIGHT}
    bg="white"
    w="100%"
    align="center"
    boxShadow="header"
    zIndex={5000}
  >
    <Container
      maxW="container.lg"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image src="/p8Wordmark_sm.svg" alt="Produce8 Logo" maxH={6} />
      <Hamburger size={28} toggled={false} />
    </Container>
  </Flex>
);
