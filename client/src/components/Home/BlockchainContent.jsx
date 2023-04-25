import { Box, Flex, Text } from "@chakra-ui/react";

function BlockchainContent() {
  return (
    <Box
      px={{ base: "1rem", md: "2rem" }}
      py="29px"
      bg={
        "linear-gradient(92.5deg, #333333 0%, #000000 98.89%, #000000 98.89%);"
      }
      lineHeight={{ base: "27.9px", lg: "54px" }}
      fontSize={{ base: "24px", r: "32px" }}
      // fontSize={{ base: "24px", lg: "48px" }}
      fontWeight={{ lg: "400" }}
      h={{ md: "198.4px" }}
      w={{ md: "full", lg: "full", r: "1200px" }}
      mx={{ lg: "auto" }}
      mb={{ base: "32px", md: "128px" }}
    >
      <Flex
        mx={{ lg: "auto" }}
        h="full"
        justifyContent={"center"}
        alignItems={"center"}
        w={{ base: "full", md: "full" }}
      >
        <Text
          color="white"
          textAlign={{ base: "center" }}
          lineHeight={{ base: " 31px" }}
        >
          Hackathons are the perfect way to jumpstsart the innovation process,
          with a condensed timeline that encourages quick thinking, idea
          generation, and rapid prototyping.
        </Text>
      </Flex>
    </Box>
  );
}

export default BlockchainContent;
