import { Box, Flex, Text } from "@chakra-ui/react";

function BlockchainContent() {
  return (
    <Box
      mt={{ base: "80px", md: "" }}
      px={{ base: "1rem", md: "2rem" }}
      py="29px"
      bg={
        "linear-gradient(92.5deg, #333333 0%, #000000 98.89%, #000000 98.89%);"
      }
      lineHeight={{ base: "27.9px", lg: "54px" }}
      fontSize={{ base: "32px", r: "48px" }}
      // fontSize={{ base: "24px", lg: "48px" }}
      fontWeight={{ lg: "400" }}
      h={{ md: "198.4px" }}
      w={{ md: "full", lg: "full" }}
      mx={{ lg: "auto" }}
    >
      <Flex
        mx={{ lg: "auto" }}
        h="full"
        justifyContent={"center"}
        alignItems={"center"}
        w={{ base: "full", md: "full", r: "1200px" }}
      >
        <Text color="white" textAlign={{ md: "center" }}>
          Blockchain is expected to create $1.4 trillion in Revenue for
          businesses around the world by 2030. Be a leader
        </Text>
      </Flex>
    </Box>
  );
}

export default BlockchainContent;
