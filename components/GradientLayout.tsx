import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

const GradientLayout = ({
  section,
  title,
  subtitle,
  color,
  roundAvatar = false,
}: {
  section: string;
  title: string;
  subtitle: string;
  color: string;
  roundAvatar?: boolean;
}) => {
  return (
    <Box
      height="100%"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95))`}
    >
      <Flex align="end" padding="4" gap="4">
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
    </Box>
  );
};

export default GradientLayout;
