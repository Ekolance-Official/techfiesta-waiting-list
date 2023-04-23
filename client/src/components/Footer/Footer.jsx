import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ExternalLink } from "../../utils/Links";

function Footer() {
  return (
    <Grid
      px={{ base: "1rem", md: "none" }}
      gridTemplateColumns={{ md: "repeat(3, 1fr)" }}
      mt={{ base: "32px", md: "72px", lg: "159px" }}
      mb={{ md: "19px" }}
    >
      <GridItem>
        <Flex alignItems={"center"} mt={{ base: "32px", md: "unset" }}>
          <Box w="20.92" h="21.77" mr="4px">
            <Image
              w="full"
              h="full"
              cursor={"pointer"}
              src={"/images/logo.png"}
            />
          </Box>

          <Text fontSize={{ base: "22.67px" }} color="black">
            Tech
            <Text
              display={"inline"}
              color={"linear-gradient(to right, red , yellow)"}
              bgGradient="linear(99.72deg, #2C69D1 7.35%, #0ABCF9 86.94%)"
              bgClip="text"
              fontWeight="bold"
            >
              Fiesta
            </Text>
          </Text>
        </Flex>
        <Text
          fontSize={{ base: "12px" }}
          w={{ base: "155.62px" }}
          fontWeight={"400"}
          lineHeight={"15.31px"}
        >
          World best Web3 Hackhaton Platform
        </Text>
      </GridItem>
      <GridItem mt={{ base: "32px", md: "unset" }} textAlign={{ lg: "center" }}>
        <Text fontSize={"14px"} fontWeight={"700"}>
          Follow us
        </Text>

        <Flex justifyContent={{ lg: "center" }}>
          <Box
            w={{ base: "19.4px", lg: "32px" }}
            h={{ base: "19.4px", lg: "32px" }}
          >
            <ExternalLink href="https://www.facebook.com/profile.php?id=100079984088593" title="facebook">
              <Image
                alt="facebook"
                w="full"
                h="full"
                cursor={"pointer"}
                src={"/images/facebook.svg"}
              />
            </ExternalLink>
          </Box>

          <Box
            w={{ base: "19.4px", lg: "32px" }}
            h={{ base: "19.4px", lg: "32px" }}
            ml="14.8px"
          >
            <ExternalLink href="https://www.linkedin.com/company/ekolance/" title="">
              <Image
                w="full"
                h="full"
                cursor={"pointer"}
                src={"/images/linkedin.svg"}
              />
            </ExternalLink>
          </Box>

          <Box
            w={{ base: "19.4px", lg: "32px" }}
            h={{ base: "19.4px", lg: "32px" }}
            ml="14.8px"
          >
            <ExternalLink href="https://www.instagram.com/ekolance.io/" title="">
              <Image
                w="full"
                h="full"
                cursor={"pointer"}
                src={"/images/instagram.svg"}
              />
            </ExternalLink>
          </Box>

          <Box
            w={{ base: "19.4px", lg: "32px" }}
            h={{ base: "19.4px", lg: "32px" }}
            ml="14.8px"
          >
            <ExternalLink href="https://twitter.com/ekolance" title="">
              <Image
                w="full"
                h="full"
                cursor={"pointer"}
                src={"/images/twitter.svg"}
              />
            </ExternalLink>
          </Box>
        </Flex>
      </GridItem>
      <GridItem mt={{ base: "62px", md: "unset" }}>
        <Text fontSize={"14px"} fontWeight={"bold"} mb="14.8px">
          Powered by:{" "}
        </Text>

        <Flex mb="14.8px" alignItems={"center"}>
          <ExternalLink href="https://www.humanprotocol.org" title="">
            <Image
              w="31px"
              h="31px"
              cursor={"pointer"}
              src={"/images/human_logo.png"}
            />{" "}
          </ExternalLink>
          <Text ml={{ base: "4px", md: "unset" }}>
            Human Protocol Foundation
          </Text>
        </Flex>

        <Flex>
          <ExternalLink href="https://ekolance.io" title="">
            <Image
              w="full"
              h="full"
              cursor={"pointer"}
              src={"/images/ekolance.png"}
            />
          </ExternalLink>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default Footer;
