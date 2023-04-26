import React from "react";
import BodyWrapper from "../../components/BodyWrapper";
import Navbar from "../../components/Header/Navbar";
import Hero from "../../components/Home/Hero";
import WhyContainer from "../../components/Home/WhyContainer";
import HowToLaunch from "../../components/Home/HowToLaunch";
import BlockchainContent from "../../components/Home/BlockchainContent";
import BenefitsOfHackathon from "../../components/Home/BenefitsOfHackathon";
import HowToJoin from "../../components/Home/HowToJoin";
import Footer from "../../components/Footer/Footer";
import Map from "../../components/Home/Map";
import Experience from "../../components/Home/Experience";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  Text,
  Flex,
  Grid,
  GridItem,
  Box,
  List,
  ListItem,
} from "@chakra-ui/react";
import { InternalLink } from "../../utils/Links";

function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <BodyWrapper bgColor={"white"}>
      <Navbar {...{ onOpen }} />
      <Hero {...{ onOpen }} />
      <Map />
      <WhyContainer {...{ onOpen }} />
      <BlockchainContent />
      <BenefitsOfHackathon />
      <HowToLaunch />
      <Experience />
      <HowToJoin {...{ onOpen }} />
      <Footer />

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent bg="linear-gradient(92.5deg, #333333 0%, #000000 98.89%, #000000 98.89%);">
          <ModalCloseButton color="white" />

          <ModalBody
            mt={{ base: "1rem", lg: "2rem" }}
            minH={"200px"}
            max={{ lg: "180px" }}
            py={{ lg: "2rem" }}
            color="white"
          >
            <Grid gridTemplateColumns={{ r: "repeat(2, 1fr)" }}>
              <GridItem>
                <Image
                  src="/images/logo_w.svg"
                  w="50px"
                  h="50px"
                  mb={{ base: "1rem" }}
                />

                <Text
                  mt={{ lg: "2rem" }}
                  mb={{ base: "1rem" }}
                  fontSize={{ lg: "32px" }}
                >
                  Join the waitlist
                </Text>

                <Text maxW={{ lg: "600px" }}>
                  techFiesta is officially launching in June 2023!
                </Text>
                <Text display={"block"} mt="1rem" color="white" mb="1rem">
                  Join our waitlist and be informed about special offers as a
                  company and as a hackathon participant!
                </Text>

                <Text>Pick one option:</Text>

                <List mb="1rem">
                  <ListItem px="1rem">
                    <Text>
                      Are you an organization, which wants to organize a
                      hackathon?
                    </Text>
                  </ListItem>
                  <ListItem px="1rem">
                    <Text>Do you want to be a hackathon participant?</Text>
                  </ListItem>
                </List>

                <Flex mt={{ lg: "2rem", base: "1rem" }} w="full">
                  <Box>
                    <InternalLink to="/org-register">
                      <Button
                        borderRadius={"unset"}
                        mr={"1rem"}
                        bg="linear-gradient(99.72deg, #2C69D1 7.35%, #0ABCF9 86.94%) !important"
                        color="white"
                      >
                        Organization
                      </Button>
                    </InternalLink>
                  </Box>
                  <Box>
                    <InternalLink to="/register">
                      <Button
                        borderRadius={"unset"}
                        mr={"1rem"}
                        bg="linear-gradient(99.72deg, #2C69D1 7.35%, #0ABCF9 86.94%) !important"
                        color="white"
                      >
                        Participant
                      </Button>
                    </InternalLink>
                  </Box>
                </Flex>
              </GridItem>
              <GridItem>{/* <Image src="/images/hi.png" /> */}</GridItem>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </BodyWrapper>
  );
}

export default HomePage;
