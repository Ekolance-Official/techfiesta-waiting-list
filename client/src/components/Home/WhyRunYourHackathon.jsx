import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const howtos = [
  {
    title: "High-quality talents with relevant experience",
    description:
      "TechFiesta has a talent pool of vetted and trained web2 and web3 developers and smart contract auditors as well as non-tech talent such as content creators, community managers, and token researchers.",
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
      gridTemplateColumns={{ base: "20% 80%", md: "unset" }}
      color="black"
      _hover={{
        color: "white",
        bg: "linear-gradient(92.5deg, rgba(51, 51, 51, 0.8) 0%, rgba(0, 0, 0, 0.8) 98.89%, rgba(0, 0, 0, 0.8) 98.89%)",
      }}
      borderRadius={{ base: "11.3333px" }}
      borderWidth={"2px"}
      borderColor={"black"}
      py={{ md: "35px" }}
      h={{ lg: "304px" }}
    >
      <GridItem>
        <Flex h="full" w="full" alignItems="center" justifyContent={"center"}>
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
              <Image src={`/images/${img}`} />
            </Flex>
          </Box>
        </Flex>
      </GridItem>
      <GridItem py="14px" px="9px">
        <Text
          textAlign={{ md: "center" }}
          fontSize={{ base: "16px" }}
          fontWeight={"bold"}
          mb="5px"
        >
          {title}
        </Text>
        <Text
          textAlign={{ md: "center" }}
          fontSize={{ base: "14px" }}
          lineHeight={{ base: "18px" }}
        >
          {description}
        </Text>
      </GridItem>
    </Grid>
  );
}

function WhyRunYourHackathon() {
  return (
    <Box
      mt={{ base: "32px", md: "72px", lg: "159px" }}
      px={{ base: "1rem", md: "2rem" }}
      w={{ lg: "1200px" }}
      mx={{ lg: "auto" }}
    >
      <Text
        fontSize={{ base: "32px", lg: "48px" }}
        lineHeight={{ base: "40.83px", lg: "76.8px" }}
        fontWeight={{ base: "400", md: "700" }}
        textAlign={{ md: "center" }}
        mb={{ md: "39.11px", base: "7px" }}
      >
        Why Run Your Hackhaton on
        <Text>
          tech
          <Text
            display={"inline"}
            bgGradient="linear-gradient(99.72deg, #2C69D1 7.35%, #0ABCF9 86.94%)"
            bgClip="text"
          >
            Fiesta
          </Text>
        </Text>
      </Text>

      {/* <Text
        fontSize={{ base: "14px" }}
        lineHeight={{ base: "17.86px" }}
        mt="7.56px"
        textAlign={{ md: "center" }}
        fontWeight={{ md: "400" }}
        mb={{ base: "39px", md: "unset" }}
      >
        Escrow is a financial arrangement where a third party holds and
        regulates payment of the funds required for two parties involved in a
        transaction.
      </Text> */}

      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={4}
        mt={{ md: "39px" }}
      >
        {howtos.map((props, _key) => (
          <Box key={_key}>
            <WhyGridItem {...props} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default WhyRunYourHackathon;
