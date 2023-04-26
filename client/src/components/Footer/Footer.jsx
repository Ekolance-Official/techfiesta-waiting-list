import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ExternalLink } from "../../utils/Links";

function Footer() {
  return (
    <Grid
      px={{ base: "1rem", md: "none" }}
      gridTemplateColumns={{ md: "repeat(3, 1fr)" }}
      mb={{ md: "19px" }}
      w={{ r: "1200px" }}
      mx={{ r: "auto" }}
    >
      <GridItem>
        <Flex alignItems={"center"} mt={{ base: "32px", md: "unset" }}>
          <Box w="20.92" h="21.77">
            <Image
              w="full"
              h="full"
              cursor={"pointer"}
              src={"/images/logo.svg"}
            />
          </Box>

          <Text fontSize={{ base: "22.67px" }} color="black">
            tech
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
      </GridItem>
      <GridItem mt={{ base: "32px", md: "unset" }} textAlign={{ lg: "center" }}>
        <Text fontSize={"14px"} fontWeight={"700"}>
          Follow us
        </Text>

        <Flex justifyContent={{ lg: "center" }} gap="16px">
          <Box
            w={{ base: "24.4px", lg: "32px" }}
            h={{ base: "24.4px", lg: "32px" }}
          >
            <ExternalLink
              href="https://t.me/+R2dFGg-iB5NlYzg0"
              title="Join us on Telegram"
            >
              <Image
                alt="facebook"
                w="full"
                h="full"
                cursor={"pointer"}
                src={"/images/telegram.svg"}
              />
            </ExternalLink>
          </Box>

          <Box
            w={{ base: "24.4px", lg: "32px" }}
            h={{ base: "24.4px", lg: "32px" }}
          >
            <ExternalLink
              href="https://discord.gg/xn8XbxXem9"
              title="Join us on Discord"
            >
              <Image
                alt="facebook"
                w="full"
                h="full"
                cursor={"pointer"}
                src={"/images/discord.svg"}
              />
            </ExternalLink>
          </Box>

          <Box
            w={{ base: "24.4px", lg: "32px" }}
            h={{ base: "24.4px", lg: "32px" }}
          >
            <ExternalLink
              href="https://twitter.com/techFiesta_hack"
              title="Join us on Discord"
            >
              <Image
                alt="facebook"
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
              w="110px"
              cursor={"pointer"}
              src={"/images/human-logo-full.svg"}
              mr={"4px"}
            />{" "}
          </ExternalLink>
        </Flex>

        <Flex>
          <ExternalLink href="https://ekolance.io" title="">
            <Image
              w="110px"
              h="full"
              cursor={"pointer"}
              src={"/images/ekolance.svg"}
            />
          </ExternalLink>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default Footer;
