import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";

import { Container, Flex } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { HEADER_HEIGHT, Header } from "./Header";

export const Layout: React.FC = ({ children }) => (
  <Flex minH="100dvh" pt={HEADER_HEIGHT * 1.5} bg="body-bg">
    <Header />
    <Container maxW="container.lg">{children}</Container>
  </Flex>
);
