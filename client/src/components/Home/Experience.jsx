import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

function Experience() {
  const datas = [
    {
      text: "Work with the biggest names in the industry and expand your network",
      img: "student.png",
    },
    {
      text: "Receive fast and secure payments in stable coins by connecting your wallet to our platform",
      img: "payment.png",
    },
    {
      text: "Build innovative projects and stand a chance to start your own business and receive a grant",
      img: "build.png",
    },
  ];

  return (
    <Grid
      mb={{ base: "32px", md: "128px" }}
      px={{ base: "1rem", md: "2rem" }}
      w={{ base: "full", r: "1200px" }}
      mx={{ lg: "auto" }}
      gridTemplateColumns={{ md: "repeat(2, 1fr)" }}
      gap={{ md: "32px" }}
    >
      <GridItem>
        <Text
          fontWeight={{ base: "700" }}
          fontSize={{ base: "28px", md: "32px", lg: "" }}
          lineHeight={{ base: "35.73px", md: "40.83px" }}
          mb="10px"
        >
          Experience the Difference: Why you should participate in our
          hackathons
        </Text>

        <Text
          fontSize={{ base: "14px", md: "11.16px" }}
          lineHeight={{ base: "17.86px" }}
          fontWeight={{ base: "400" }}
        >
          Join a community of innovative minds and take part in groundbreaking
          projects.{" "}
        </Text>
      </GridItem>
      <GridItem mt={{ base: "53px", md: "unset" }}>
        {datas.map((data, index) => (
          <Flex
            p="15px"
            borderRadius={{ base: "12.4px" }}
            key={index}
            mb="19.8px"
            alignItems={"center"}
            _hover={{
              background:
                " linear-gradient(92.5deg, rgba(51, 51, 51, 0.8) 0%, rgba(0, 0, 0, 0.8) 98.89%, rgba(0, 0, 0, 0.8) 98.89%);",
              color: "white",
            }}
          >
            <Box w={{ base: "39.76px" }} mr="10px">
              <Image src={`/images/${data.img}`} w="full" h="full" />
            </Box>

            <Text fontSize={{ base: "14px" }} lineHeight={{ base: "17.86px" }}>
              {data.text}
            </Text>
          </Flex>
        ))}
      </GridItem>
    </Grid>
  );
}

export default Experience;
