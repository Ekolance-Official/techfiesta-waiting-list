import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import WaitingListButton from "../../reusable/components/WaitingListButton";
import { ExternalLink } from "../../utils/Links";

function HowToJoin() {
  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(2, 1fr)" }}
      mt={{ md: "72px", base: "32px", lg: "159px" }}
      h={{ lg: "461px", base: "60vh" }}
    >
      <GridItem
        gridColumn={{ base: "1/-1" }}
        gridRow={{ base: "1/-1" }}
        h={{ base: "auto", md: "unset" }}
        overflow={"hidden"}
      >
        <Flex h="full" w="full" direction={{ base: "column", md: "row" }}>
          <Box></Box>
          <Spacer />
          <Box
            h="full"
            w={{ md: "600px" }}
            bg={{
              base: `url('/images/young_man_pc.png') no-repeat`,
              lg: "unset",
            }}
            backgroundSize="cover"
          >
            <Image
              display={{ base: "none", lg: "block" }}
              src="/images/young_man_pc.png"
              w="full"
              h="full"
              objectFit={{ base: "cover", md: "cover" }}
            />
          </Box>
        </Flex>
      </GridItem>
      <GridItem
        gridColumn={"1/-1"}
        gridRow={"1/-1"}
        w="full"
        bg="linear-gradient(90.52deg, #2968C1 42.77%, rgba(11, 189, 250, 0.26) 67.03%, rgba(3, 48, 176, 0) 80.97%);"
        py={{ md: "73px", lg: "unset" }}
        px={{ base: "1rem", md: "2rem", lg: "unset" }}
        pt="46.36px"
        pr={{ base: "58.46px" }}
        color="white"
      >
        <Box
          h="full"
          bg="linear-gradient(90.52deg, #2968C1 42.77%, rgba(11, 189, 250, 0.26) 67.03%, rgba(3, 48, 176, 0) 80.97%)"
          gridTemplateColumns={"repeat(2, 1fr)"}
        >
          <Flex
            w={{ lg: "1200px" }}
            direction={{ base: "column", lg: "row" }}
            h="full"
            justifyContent={{ lg: "center" }}
            alignItems={{ lg: "center" }}
            mx={{ lg: "auto" }}
          >
            <Box w={{ lg: "562px" }}>
              <Text
                lineHeight={{ base: "30.62px", md: "40.8px" }}
                fontSize={{ base: "24px", md: "32px", lg: "40px" }}
                fontWeight={{ base: "700" }}
                mb={{ base: "8px", lg: " 16px" }}
              >
                How can you join as an Hackhaton participant
              </Text>

              <Text
                fontWeight={"400"}
                fontSize={{
                  base: "14px",
                  lg: "16px",
                }}
                lineHeight={{ base: "17.86px", lg: "24px" }}
                mb={{ base: "32px" }}
              >
                Are you ready to join the TechFiesta community and showcase your
                skills? Sign up for our waiting list today to be one of the
                first to experience our upcoming hackathons with some of the
                biggest names in the blockchain space, starting in June.
                <br />
                <br />
                We onboard developers in batches, so don't miss out on the
                opportunity to be part of the first batch before it closes on
                May 30th!
              </Text>
            </Box>
            <Spacer />

            <Box pb={{ base: "50px", md: "unset" }}>
              <ExternalLink href={"https://ekolance.io"} p="unset">
                <Button
                  h={{ base: "44px", lg: "64px" }}
                  outline={"none"}
                  transition={"all 0.2s ease-in-out"}
                  _hover={{ filter: "brightness(105%)" }}
                  bg={`linear-gradient(99.72deg, #2C69D1 7.35%, #0ABCF9 86.94%)`}
                  borderRadius={"2.8px"}
                  boxShadow={"4.5333px 4.5333px 0px rgba(51, 51, 51, 0.25)"}
                  color="white"
                  fontSize={{ base: "14px", lg: "16px" }}
                  w={{ lg: "228px" }}
                >
                  Join Waitlist
                </Button>
              </ExternalLink>
            </Box>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default HowToJoin;
