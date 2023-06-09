import React, { useCallback, useRef } from "react";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

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
      h={{ base: "220px", md: "220px", r: "300px" }}
      // gap={{ md: "14px" }}
    >
      <GridItem py="14px" px="9px">
        <Flex
          alignItems={"center"}
          mb={{ base: "16px", lg: "20px" }}
          h={"50px"}
        >
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
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

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

      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 10000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {howtos.map((props, _key) => (
          <SwiperSlide key={_key}>
            <Grid w={{ base: "full", md: "unset" }} px="0.1rem">
              <GridItem gridRow={"1/-1"} gridColumn={"1/-1"}></GridItem>
              <GridItem gridRow={"1/-1"} gridColumn={"1/-1"}>
                <WhyGridItem {...props} />
              </GridItem>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box h="20px" w="full" mt="1rem">
        <Flex alignItems={"center"} justifyContent={"flex-end"}>
          <Box
            w={{ base: "40px" }}
            h={{ base: "40px" }}
            cursor={"pointer"}
            mr={{ base: "10px", md: "20px" }}
            onClick={handlePrev}
            borderRadius={"50%"}
            color="linear-gradient(92.5deg, rgba(51, 51, 51, 0.8) 0%, rgba(0, 0, 0, 0.8) 98.89%, rgba(0, 0, 0, 0.8) 98.89%)"
            fontSize={{ base: "35px", md: "40px" }}
            _hover={{
              color: "white",
              bg: " #2C69D1 ",
            }}
            transition={"all 0.5ms ease-in-out"}
          >
            <Flex
              alignItems={"center"}
              h="full"
              w="full"
              justifyContent={"center"}
            >
              <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
            </Flex>
          </Box>
          <Box
            w={{ base: "40px" }}
            h={{ base: "40px" }}
            cursor={"pointer"}
            onClick={handleNext}
            borderRadius={"50%"}
            _hover={{
              color: "white",
              bg: " #2C69D1 ",
            }}
            color="linear-gradient(92.5deg, rgba(51, 51, 51, 0.8) 0%, rgba(0, 0, 0, 0.8) 98.89%, rgba(0, 0, 0, 0.8) 98.89%)"
            fontSize={{ base: "35px", md: "40px" }}
          >
            <Flex
              alignItems={"center"}
              h="full"
              w="full"
              justifyContent={"center"}
            >
              <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default BenefitsOfHackathon;
