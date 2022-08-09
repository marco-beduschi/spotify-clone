import { Box, Flex, Image } from "@chakra-ui/react";

const GradientLayout = ({ color, imageUrl }) => {
  return (
    <Box
      height="100%"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95))`}
    >
      <Flex alignItems="end" padding="4" gap="4">
        <Image boxSize="160px" boxShadow="2xl" />
        hello
      </Flex>
    </Box>
  );
};

export default GradientLayout;
