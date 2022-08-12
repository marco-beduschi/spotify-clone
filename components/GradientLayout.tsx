import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const GradientLayout = ({
  section,
  title,
  subtitle,
  color,
  roundAvatar = false,
  children,
}: {
  section: string;
  title: string;
  subtitle: string;
  color: string;
  roundAvatar?: boolean;
  children: React.ReactNode;
}) => (
  <Box
    height="100%"
    overflowY="auto"
    bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
  >
    <Flex
      bgGradient={`linear(${color}.400 0%, ${color}.600 100%)`}
      padding="8"
      align="end"
      gap="6"
    >
      <Image
        boxSize="160px"
        boxShadow="2xl"
        borderRadius={roundAvatar ? "full" : null}
      />
      <Box>
        <Heading color="white" size="xs">
          {section.toUpperCase()}
        </Heading>
        <Heading
          as="h3"
          color="white"
          size="3xl"
          fontWeight="bold"
          lineHeight="130%"
        >
          {title}
        </Heading>
        <Text color="whiteAlpha.800">{subtitle}</Text>
        <Text color="whiteAlpha.800">
          <Link href="/" passHref>
            <ChakraLink color="white" fontWeight="bold">
              Profile Name
            </ChakraLink>
          </Link>{" "}
          • 3.000 likes • 300 songs, about 12 hours
        </Text>
      </Box>
    </Flex>
    <Box padding="8">{children}</Box>
  </Box>
);

export default GradientLayout;
