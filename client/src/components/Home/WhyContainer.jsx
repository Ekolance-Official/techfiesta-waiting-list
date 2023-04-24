import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import React from "react";
import WaitingListButton from "../../reusable/components/WaitingListButton";
import HowToGridItem from "../../reusable/components/HowToGridItem";
import { InternalLink } from "../../utils/Links";
import { WhySingleItem } from "../../reusable/styled/components";

function WhyContainer() {
  const howtos = [
    {
      title: "Drive Innovation ",
      description:
        "Hackathons create an environment that inspires participants to think outside the box and come up with new and innovative solutions. Your company can use these events to encourage creative thinking and generate fresh ideas that can drive your business forward.",
      active: false,
      img: "diamond.png",
    },
    {
      title: "Boost Your Brand Visibility",
      description:
        "Hackathons are a great way to generate buzz and get people talking about your company. By hosting a successful hackathon, you can increase your brand visibility and attract the attention of potential customers who will be interested in your products or services.",
      active: true,
      img: "idea.png",
    },
    {
      title: "attract Top Talents",
      description:
        "You can attract a diverse group of professionals, including some of the brightest minds in the industry. By hosting a hackathon, your company gets to interact with talented professionals and observe them in action. This allows you to evaluate them based on real-world scenarios, which is more effective than assessing them through standard interview questions.",
      active: false,
      img: "physics.png",
    },
  ];

  return (
    <Box
      px={{ base: "1rem", md: "2rem" }}
      w={{ md: "501px", lg: "1200px" }}
      mx={{ lg: "auto" }}
      minH={{ lg: "70vh" }}
      mb={{ base: "32px", md: "128px" }}
    >
      <Grid gridTemplateColumns={{ lg: "repeat(2, 1fr)" }} gap={{ lg: "20" }}>
        <GridItem pb={{ base: "18px" }}>
          <Text
            fontSize={{ base: "28px", md: "32px", lg: "48px" }}
            fontWeight={{ base: "700" }}
            lineHeight={{ base: "35.73px", md: "", lg: "" }}
          >
            Why run a Hackathon?
          </Text>

          <Text
            fontWeight={"400"}
            fontSize={{ base: "14px" }}
            lineHeight={{ base: "17.86px", lg: "24px" }}
            mt="10px"
            mb={{ base: "24px" }}
          >
            Hackathons are not just any event, but a unique opportunity for
            companies to foster innovation and stay ahead of the curve. In fact,
            more than 80% of Fortune 100 companies run hackathons as part of
            their strategy to remain competitive in their respective industries.
          </Text>

          <InternalLink to="/register">
            <WaitingListButton />
          </InternalLink>
        </GridItem>

        <GridItem pt={{ base: "50px", md: "42px", lg: "unset" }} color="white">
          <VStack spacing={4} align="stretch">
            {howtos.map((props, index) => (
              <WhySingleItem key={index}>
                <HowToGridItem {...props} />
              </WhySingleItem>
            ))}
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default WhyContainer;
