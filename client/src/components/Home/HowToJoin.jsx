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
import { ExternalLink, InternalLink } from "../../utils/Links";

function HowToJoin() {
  return (
    <Grid
      py={{ base: "24px", md: "28.5px" }}
      mx={{ base: "1rem", md: "2rem", r: "auto" }}
      px={{ base: "1rem", md: "2rem",}}
      gridTemplateColumns={{ md: "80% 20%", lg: "55% 45%", r: '70% 30%' }}
      h={{ lg: "461px", base: "unset", r: '320px' }}
      mb={{ base: "32px", md: "128px" }}
      bg="linear-gradient(92.5deg, #333333 0%, #000000 98.89%, #000000 98.89%);"
      w={{ r: "1200px" }}
      borderRadius={"28.36px"}
    >
      <GridItem w="full" pr={{ base: "58.46px" }} color="white">
        <Box h="full" gridTemplateColumns={"repeat(2, 1fr)"}>
          <Text
            lineHeight={{ base: "30.62px", md: "40.8px" }}
            fontSize={{ base: "24px", md: "32px", lg: "40px" }}
            fontWeight={{ base: "700" }}
            mb={{ base: "8px", lg: " 16px" }}
          >
            How can you join as a Hackathon participant?
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
            Are you ready to join the techFiesta community and showcase your
            skills? Sign up for our waiting list today to be one of the first to
            experience our upcoming hackathons with some of the biggest names in
            the blockchain space, starting in June.
            <br />
            <br />
            We onboard developers in batches, so don't miss out on the
            opportunity to be part of the first batch before it closes on May
            30th!
          </Text>
        </Box>
      </GridItem>
      <GridItem>
        <Flex
          h={{ md: "full" }}
          alignItems={"center"}
          justifyContent={{ md: "center" }}
        >
          <InternalLink to={"/register"} p="unset">
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
          </InternalLink>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default HowToJoin;
