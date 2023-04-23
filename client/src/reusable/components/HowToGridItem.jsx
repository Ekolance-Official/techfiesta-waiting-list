import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

function HowToGridItem({ title, active, description, img }) {
  return (
    <Grid
      gridTemplateColumns={"20% 80%"}
      bg={
        active &&
        "linear-gradient(92.5deg, rgba(51, 51, 51, 0.8) 0%, rgba(0, 0, 0, 0.8) 98.89%, rgba(0, 0, 0, 0.8) 98.89%)"
      }
      color={active && "white"}
      borderRadius={{ base: "11.3333px" }}
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
          fontSize={{ base: "16px", lg: "18px" }}
          fontWeight={"bold"}
          mb="5px"
          textTransform={"capitalize"}
        >
          {title}
        </Text>
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          lineHeight={{ base: "18px", md: "24px" }}
        >
          {description}
        </Text>
      </GridItem>
    </Grid>
  );
}

export default HowToGridItem;
