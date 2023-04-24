import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import {
  HowToLaunchContent,
  HowToLaunchIcon,
} from "../../reusable/styled/components";

function HowToLaunch() {
  const datas = [
    {
      title: "Register Your Company",
      description:
        "Sign up to our platform and create an account for your company to start organizing your hackathon",
    },
    {
      title: "Define Your Hackathon",
      description:
        "Provide information about your hackathon, including the assignments, target groups, bounties and timeline",
    },
    {
      title: "Launch Your Hackathon",
      description:
        "Make your hackathon live on our platform and let particpants to join in",
    },
    {
      title: "Evaluate Your Results",
      description:
        "Review submissions from participants in your company dashboard and select the winners based on the criteria you defined",
    },
    {
      title: "Automate Payouts",
      description:
        "The TechFiesta platform automatically sends bounties to the winners’ addresses after you have validated the winners",
    },
  ];

  return (
    <Grid
      gridTemplateColumns={{ r: "repeat(2, 1fr)", md: "50% 50%" }}
      w={{ base: "full", r: "1200px" }}
      mx={{ base: "auto" }}
      overflow={"hidden"}
      maxH={{ lg: "80vh", r: "776px" }}
      color="black"
      px={{ base: "1rem", md: "2rem" }}
      mb={{ base: "32px", md: "128px" }}
    >
      <GridItem overflow={"hidden"}>
        <Box pt={{ base: "72px", md: "unset" }}>
          <Text
            fontSize={{ base: "28px", md: "32px" }}
            color="black"
            fontWeight={{ base: "700" }}
            w={{ md: "467px", lg: "unset" }}
            lineHeight={{ md: "40.83px" }}
          >
            How to launch your Hackathons
          </Text>

          <Text
            fontSize={{ base: "14px" }}
            mt={{ base: "8.26px", md: "20px" }}
            color="black"
            lineHeight={"17.86px"}
            mb={{ base: "66px" }}
          >
            Launching a successful hackathons has never been this easier. With
            TechFiesta, you can create and manage your event with just a few
            simple steps.
          </Text>
        </Box>
      </GridItem>
      <GridItem>
        {datas.map((data, index) => (
          <Box key={index}>
            <Flex alignItems={"center"}>
              <HowToLaunchIcon />

              <Text
                background=" linear-gradient(99.72deg, #2C69D1 7.35%, #0ABCF9 86.94%)"
                backgroundClip={"text"}
                fontWeight={"700"}
                fontSize={{ md: "16px" }}
              >
                {data.title}
              </Text>
            </Flex>

            <HowToLaunchContent>
              <Text fontSize={{ base: "14px" }}>{data.description}</Text>
            </HowToLaunchContent>
          </Box>
        ))}
      </GridItem>
    </Grid>
  );
}

export default HowToLaunch;
