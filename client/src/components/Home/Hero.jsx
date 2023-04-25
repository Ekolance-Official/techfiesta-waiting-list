import { Box, Grid, GridItem, Flex, Text, Image } from "@chakra-ui/react";
import Divide from "../../assets/icons/Divide";
import { DisputeBox } from "../../reusable/styled/components";
import WaitingListButton from "../../reusable/components/WaitingListButton";
import { ExternalLink, InternalLink } from "../../utils/Links";

function Hero() {
  const claims = [
    "Automated Job Verification Process",
    "Decentralized Job Distribution",
    "Secure Escrow Factory",
    "Transparent Reward System",
    "Seamless Hackathon Management",
  ];

  return (
    <Box
      minH={{
        base: "calc(100vh - 5rem)",
        md: "unset",
        lg: "calc(100vh - 64px)",
      }}
      px={{ base: "1rem", md: "2rem", lg: "" }}
      w={{ base: "full", r: "1200px" }}
      mx={{ lg: "auto" }}
      mb={{ base: "58px", md: "133px" }}
    >
      <Grid w="full" gridTemplateColumns={"repeat(2, 1fr)"}>
        <GridItem
          gridColumn={"1/-1"}
          gridRow={"1/-1"}
          position={"relative"}
          zIndex={"1"}
        >
          {/* fasdfad */}
          <Box
            w="full"
            h="full"
            filter={"blur(250px)"}
            position={"absolute"}
            translateX={{ r: "400", lg: '100' }}
            bg={{
              base: `url('/images/gradbg.png') no-repeat`,
            }}
            backgroundSize="cover"
          ></Box>
        </GridItem>

        <GridItem gridColumn={"1/-1"} gridRow={"1/-1"} bg="none" zIndex={"2"}>
          <Grid
            gridTemplateColumns={{
              md: "repeat(2, 1fr)",
              r: "60% 40%",
              lg: "50% 50%",
            }}
            w="full"
          >
            <GridItem w="full">
              <Flex
                display={"none"}
                mt={{ base: "91px", md: "142px" }}
                borderRadius={"28.33px"}
                px="11px"
                py="6px"
                bg="linear-gradient(92.5deg, #333333 0%, #000000 98.89%, #000000 98.89%)"
                alignItems={"center"}
                w={{ base: "258px", lg: "420px" }}
              >
                <Divide />
                <Text color="white" ml="2px" fontSize={{ lg: "18px" }}>
                  14:20:35{" "}
                  <Text
                    display={"inline"}
                    fontSize={{ base: "10.2", lg: "18px" }}
                    fontWeight={"bold"}
                  >
                    days remaining to launch
                  </Text>
                </Text>
              </Flex>

              <Text
                mt={{ base: "91px", md: "142px" }}
                fontSize={{ base: "36px", md: "40px", lg: "62px", r: "72px" }}
                lineHeight={{ base: "45.33px", lg: "80px" }}
                fontWeight={{ base: "700", md: "bold" }}
              >
                Hack Your Way to{" "}
                <Text
                  display={{ base: "inline" }}
                  color={"linear-gradient(to right, red , yellow)"}
                  bgGradient="linear(99.72deg, #2C69D1 7.35%, #0ABCF9 86.94%)"
                  bgClip="text"
                >
                  Innovation
                </Text>{" "}
                with techFiesta
              </Text>

              <Text
                fontSize={{ base: "14px", lg: "22px" }}
                lineHeight={{ base: "24px", lg: "32px" }}
                mt={{ base: "14px", lg: "24px" }}
                mb={{ base: "18.13px", md: "" }}
                w={{ lg: "550px" }}
              >
                Create, collaborate and innovate with the best professionals in
                the tech space.
              </Text>

              <InternalLink
                fontSize={{ base: "14px" }}
                p="unset"
                to={"/register"}
              >
                <WaitingListButton />
              </InternalLink>
            </GridItem>

            <GridItem pt={{ r: "56px", lg: "10px" }}>
              <Grid
                mt={{ base: "58px", md: "142px" }}
                gridTemplateColumns={"repeat(2, 1fr)"}
                minH={{ base: "234px", md: "218.73px" }}
              >
                <GridItem
                  gridColumn={"1/-1"}
                  gridRow={"1/-1"}
                  h="full"
                  padding="11px"
                >
                  <Box
                    display={"none"}
                    ml="10px"
                    w="200px"
                    h="full"
                    borderWidth={"3.04256px 0px 3.04256px 3.04256px"}
                    borderStyle={"solid"}
                    borderColor={"sdark"}
                    borderRadius={"30.4256px 0px 0px 30.4256px"}
                  />
                </GridItem>
                <GridItem gridColumn={"1/-1"} gridRow={"1/-1"} h="full">
                  <Grid
                    gridTemplateColumns={{ lg: "20% 80%" }}
                    h="full"
                    w="full"
                  >
                    <GridItem>
                      <Flex
                        h="full"
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <Box
                          borderRadius={"50%"}
                          bg="black"
                          h="43.4px"
                          w="41.38px"
                          display={"none"}
                        >
                          <Image
                            w="full"
                            h="full"
                            cursor={"pointer"}
                            src={"/images/logo.png"}
                          />
                        </Box>
                      </Flex>
                    </GridItem>
                    <GridItem borderRadius={"30.43px"} bg="sdark">
                      <Flex
                        px={{ base: "9.74px" }}
                        py={{ base: "12.73px" }}
                        direction={"column"}
                      >
                        {claims.map((claim, index) => (
                          <Box key={index}>
                            <DisputeBox>
                              <Image src="/images/good.svg" w="20px" h="20px" />

                              <Text
                                textTransform={"capitalize"}
                                ml="24px"
                                color="white"
                                fontSize={{ lg: "14px", base: "13px" }}
                              >
                                {claim}
                              </Text>
                            </DisputeBox>
                          </Box>
                        ))}
                      </Flex>
                    </GridItem>
                  </Grid>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Hero;
