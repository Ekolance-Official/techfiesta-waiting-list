import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";

function Map() {
  return (
    <Box
      px={{ base: "1rem", md: "2rem", lg: "" }}
      w={{ base: "full", r: "1200px" }}
      mx={{ lg: "auto" }}
      mb={{ base: "32px", md: "128px", 4: "" }}
    >
      <Flex w="full" direction={"column"}>
        <Text
          fontSize={{ base: "28px", lg: "" }}
          mb="10px"
          fontWeight={"bold"}
          lineHeight={{ base: "35.73px" }}
          textAlign={{ md: "center" }}
        >
          The Future of{" "}
          <Text display={{ base: "block", md: "inline" }}>
            Hackathons is Here
          </Text>
        </Text>

        <Text
          fontSize={{ base: "14px" }}
          lineHeight={{ base: "17.86px", md: "", lg: "" }}
          mb={{ base: "18px", md: "14px" }}
          textAlign={{ md: "center" }}
        >
          Be part of the world’s first hackathon platform that harnessed the
          power of blockchain technology to provide an unmatched innovation
          experience
        </Text>

        <Box minH={{ base: "186.53px", md: "388.94px;" }} w="full">
          <Image src={"/images/map.svg"}  alt="Developers across the globe"/>
        </Box>
      </Flex>
    </Box>
  );
}

export default Map;
