import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

function HowToLaunch() {
  const datas = [
    {
      title: "Register Your Company",
      description:
        "Sign up to our platform and create an account for your company to start organizing your hackathons.",
    },
    {
      title: "Define Your Hackathons",
      description:
        "Provide information about your hackathons, including the assignments, target groups, bounties and timeline.",
    },
    {
      title: "Launch Your Hackathons",
      description:
        "Make your hackathons live on our platform and let participants to join in.",
    },
    {
      title: "Evaluate Your Results",
      description:
        "Review submissions from participants in your company dashboard and select the winners based on the criteria you defined.",
    },
    {
      title: "Automate Payouts",
      description:
        "The TechFiesta platform automatically sends bounties to the winners addresses after you have validated the winners.",
    },
  ];

  return (
    <Grid
      gridTemplateColumns={"repeat(2, 1fr)"}
      mt={{ md: "72px", lg: "159px", base: "50px" }}
      w={{ md: "full", lg: "" }}
      mx={{ lg: "auto" }}
      overflow={"hidden"}
      maxH={"100vh"}
    >
      <GridItem gridRow={"1/-1"} gridColumn={"1/-1"}>
        <Grid gridTemplateColumns={"40% 60%"}>
          <Box />
          <Box
            h={{ base: "320px", md: "full", lg: "100vh" }}
            bg={`url('/images/girl.png') no-repeat`}
            backgroundSize="cover"
          >
            <Image src={"/images/girl.png"} w="full" h="full" />
          </Box>
        </Grid>
      </GridItem>
      <GridItem
        gridRow={"1/-1"}
        gridColumn={"1/-1"}
        // minH={{ base: "1262px", md: "50vh", lg: "90vh" }}
        bg={
          " linear-gradient(115.17deg, rgba(0, 0, 0, 0.2) 42.92%, rgba(0, 34, 83, 0.2) 100.76%), linear-gradient(115.17deg, rgba(0, 0, 0, 0.2) 42.92%, rgba(0, 34, 83, 0.2) 100.76%), linear-gradient(115.17deg, rgba(0, 0, 0, 0.2) 42.92%, rgba(0, 34, 83, 0.2) 100.76%), linear-gradient(90.52deg, #296ECF 27.29%, rgba(4, 131, 180, 0.53) 53.1%, rgba(14, 175, 236, 0) 84.06%)"
        }
        pt={{ lg: "50px" }}
      >
        <Box
          w={{ lg: "1200px", base: "unset" }}
          mx={{ lg: "auto", base: "unset" }}
        >
          <Box
            pt={{ base: "72px", md: "45px" }}
            px={{ base: "1rem", md: "2rem" }}
          >
            <Text
              fontSize={{ base: "24px", md: "32px" }}
              color="white"
              fontWeight={{ md: "700" }}
              w={{ md: "467px", lg: "unset" }}
              lineHeight={{ md: "40.83px" }}
            >
              How to launch your Hackathons on techFest
            </Text>

            <Text
              fontSize={{ base: "14px" }}
              mt={{ base: "8.26px", md: "20px" }}
              color="white"
              lineHeight={"17.86px"}
              w={{ md: "467px", lg: "732px" }}
            >
              Launching a successful hackathons has never been this easier. With
              TechFiesta, you can create and manage your event with just a few
              simple steps.
            </Text>
          </Box>

          <Grid
            mb={{ base: "32px" }}
            mt={{ base: "38px", md: "45px" }}
            px={{ base: "1rem", md: "2rem", lg: "" }}
            gap={{ base: "28.91px", md: "8.26px" }}
            w="full"
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gridTemplateRows={{ lg: "227.2px" }}
          >
            {datas.map(({ title, description }, key) => (
              <GridItem
                w="full"
                bg="linear-gradient(92.5deg, #333333 0%, #000000 98.89%, #000000 98.89%)"
                key={key}
                // mb="28.91px"
                px={"8px"}
                py="11px"
                h={{ md: "", lg: "225px" }}
                borderRadius={"13.66px"}
                overflow={"hidden"}
              >
                <Flex
                  w="full"
                  direction={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  color="white"
                  pxx={{ lg: "20px" }}
                >
                  <Box
                    borderRadius={"50px"}
                    w="56px"
                    h="56px"
                    bg="linear-gradient(99.72deg, rgba(44, 105, 209, 0.3) 7.35%, rgba(10, 188, 249, 0.3) 86.94%)"
                  >
                    <Flex
                      w="full"
                      h="full"
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Image src={`/images/globe.png`} />
                    </Flex>
                  </Box>

                  <Text
                    mt="10px"
                    fontSize="21.17px"
                    fontWeight={"700"}
                    lineHeight={"27px"}
                    textAlign={"center"}
                  >
                    {title}
                  </Text>

                  <Text textAlign={"center"} mt="3px" fontSize={{ lg: "14px" }}>
                    {description}
                  </Text>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default HowToLaunch;
