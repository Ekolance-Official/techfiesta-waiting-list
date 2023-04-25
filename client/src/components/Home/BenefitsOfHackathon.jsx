import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const howtos = [
  {
    title: "High-quality talents with relevant experience",
    description:
      "techFiesta has a talent pool of vetted and trained web2 and web3 developers and smart contract auditors as well as non-tech talent such as content creators, community managers, and token researchers.",
    active: false,
    img: "globe.png",
  },
  {
    title: "High participation rate",
    description:
      "We have organized previous online hackathons which had a participation rate of over 35%. Our large and engaged dev community can build applications and increase adoption.",
    active: true,
    img: "globe.png",
  },
  {
    title: "Grow your developer community in emerging economies",
    description:
      "85% of our developers are based in emerging countries. By using our hackathon platform, you can access these talented professionals and create opportunities for innovation and collaboration, ultimately leading to more impactful and successful projects.",
    active: false,
    img: "globe.png",
  },
  {
    title: "Blockchain-based platform",
    description:
      "Revolutionize your hackathon experience with the first blockchain-based hackathon platform. Connect your wallet, run your hackathon, and payments will be made after the winners are validated through an escrow system on the HUMAN Protocol.",
    active: false,
    img: "globe.png",
  },
  {
    title: "Payments are in stablecoins",
    description:
      "Our platform allows you to make payments in stablecoins. This helps you avoid slow transactions and high fees. It also enables participation from developers in emerging countries who may face difficulties accepting fiat payments.",
    active: false,
    img: "globe.png",
  },
];

function WhyGridItem({ title, active, description, img }) {
  return (
    <Grid
      color="black"
      _hover={{
        color: "white",
        bg: "linear-gradient(92.5deg, rgba(51, 51, 51, 0.8) 0%, rgba(0, 0, 0, 0.8) 98.89%, rgba(0, 0, 0, 0.8) 98.89%)",
      }}
      borderRadius={{ base: "11.3333px" }}
      borderWidth={"1px"}
      borderColor={"black"}
      h={{ base: "220px", md: "230px",  r: "295px" }}
      gap={{ md: "14px" }}
    >
      <GridItem py="14px" px="9px">
        <Flex alignItems={"center"} mb={{ base: "16px" }}>
          {/* <Image
            mr="10px"
            src={`/images/world.svg`}
            h={{ base: "24px" }}
            w={{ base: "24px" }}
          /> */}
          <Text fontSize={{ base: "16px" }} fontWeight={"bold"}>
            {title}
          </Text>
        </Flex>
        <Text fontSize={{ base: "14px" }} lineHeight={{ base: "17.86px" }}>
          {description}
        </Text>
      </GridItem>
    </Grid>
  );
}

function BenefitsOfHackathon() {
  return (
    <Box
      px={{ base: "1rem", md: "2rem" }}
      w={{ r: "1200px" }}
      mx={{ lg: "auto" }}
      mb={{ md: "128px" }}
    >
      <Text
        fontSize={{ base: "32px", lg: "48px" }}
        lineHeight={{ base: "40.83px", lg: "76.8px" }}
        fontWeight={{ base: "400", md: "700" }}
        textAlign={{ md: "center" }}
        mb={{ md: "39.11px", base: "7px" }}
      >
        What are the Benefits of Using{" "}
        <Text display={"inline"}> techFiesta </Text>
      </Text>

      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          r: "repeat(5, 1fr)",
        }}
        gap={4}
        mt={{ md: "39px" }}
      >
        {howtos.map((props, _key) => (
          <Box key={_key} mb={{ base: "10px" }}>
            <Grid w={{ base: "full", md: "unset" }}>
              <GridItem gridRow={"1/-1"} gridColumn={"1/-1"}>
                {/* <Image src="/images/pbg.jpg" w="full" h="full" /> */}
              </GridItem>
              <GridItem gridRow={"1/-1"} gridColumn={"1/-1"}>
                <WhyGridItem {...props} />
              </GridItem>
            </Grid>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default BenefitsOfHackathon;
