import {
  Flex,
  Image,
  Button,
  IconButton,
  Spacer,
  Text,
  Box,
  //   Drawer,
  //   DrawerOverlay,
  //   DrawerContent,
  //   DrawerCloseButton,
  //   DrawerBody,
  //   useDisclosure,
} from "@chakra-ui/react";
import { VscMenu } from "react-icons/vsc";
import { ExternalLink, InternalLink, NavLink } from "../../utils/Links";

const Navbar = () => {
  //   const navLinks = [];
  //   const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      zIndex={"100"}
      bg="white"
      minW="20rem"
      h={{ base: "5rem", md: "64px" }}
      px={{ base: "1rem", md: "2rem" }}
      py={{ base: "1.2rem", md: "18px", lg: "none" }}
      align="center"
      justify="space-between"
      w={{ base: "full", lg: "1200px" }}
      mx={"auto"}
      color="brand.light"
      display={"flex"}
      alignItems={"center"}
    >
      <InternalLink to="/">
        <Flex alignItems={"center"}>
          <Box
            w={{ base: "20.92", md: "36.9px" }}
            h={{ base: "21.77", md: "36.9px" }}
            mr="4px"
          >
            <Image
              w="full"
              h="full"
              cursor={"pointer"}
              src={"/images/logo.svg"}
            />
          </Box>

          <Text fontSize={{ base: "22.67px", lg: "40px" }} color="black">
            Tech
            <Text
              display={"inline"}
              color={"linear-gradient(to right, red , yellow)"}
              bgGradient="linear(99.72deg, #2C69D1 7.35%, #0ABCF9 86.94%)"
              bgClip="text"
              fontWeight="bold"
            >
              Fiesta
            </Text>
          </Text>
        </Flex>
      </InternalLink>
      {/* <Flex
        display={{ base: "none", md: "flex" }}
        direction={"row"}
        justify="space-around"
        fontSize="sm"
        ml="2rem"
      >
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            role="group"
            onClick={() =>
              // @ts-ignore
              document.getElementById(link.id).scrollIntoView({
                block: "center",
                behavior: "smooth",
              })
            }
          >
            <Text
              transition="all 0.2s ease-in-out"
              _groupHover={{
                color: "brand.accent.100",
                fontWeight: "600",
              }}
            >
              {link.name}
            </Text>
          </NavLink>
        ))}
      </Flex> */}
      <Spacer />
      {/* <Flex align="center" justify={"center"} mr="1rem">
        <ExternalLink href="https://twitter.com/getonboard_gg">
          <IconButton
            icon={<SiTwitter />}
            variant="ghost"
            color="brand.accent.100"
            _hover={{ bg: "none" }}
            aria-label={""}
          />
        </ExternalLink>
        <ExternalLink href="https://medium.com/@getonboard_gg/about">
          <IconButton
            icon={<SiMedium />}
            variant="ghost"
            color="brand.accent.100"
            _hover={{ bg: "none" }}
            aria-label={""}
          />
        </ExternalLink>
      </Flex> */}
      <IconButton
        bg="white !important"
        boxShadow={"none"}
        outline={"none"}
        display={{ base: "block", md: "none" }}
        color="black"
        align="center"
        icon={<VscMenu size={20} />}
        variant={"ghost"}
        // onClick={onOpen}
        _hover={{ bg: "none" }}
        _focus={{ outline: "none", bg: "none" }}
        _active={{ outline: "none", bg: "none" }}
        aria-label={""}
      />

      <ExternalLink
        display={{ base: "none", md: "inline" }}
        href={"https://ekolance.io"}
      >
        <Button
          h="44px"
          outline={"none"}
          transition={"all 0.2s ease-in-out"}
          _hover={{ filter: "brightness(105%)" }}
          bg="linear-gradient(99.72deg, #2C69D1 7.35%, #0ABCF9 86.94%) !important"
          borderRadius={"2.8px"}
          boxShadow={"4.5333px 4.5333px 0px rgba(51, 51, 51, 0.25)"}
        >
          Join Waitlist
        </Button>
      </ExternalLink>

      {/* <Drawer onClose={onClose} isOpen={isOpen} size={"sm"}>
        <DrawerOverlay />
        <DrawerContent bg="brand.dark.100" color="brand.light">
          <DrawerCloseButton />
          <DrawerBody>
            <Flex
              direction="column"
              w="full"
              justify="center"
              align="center"
              textAlign={"center"}
            >
              <Image
                src={"/logo.png"}
                width="130px"
                height={"80px"}
                my="3rem"
                minW="10ch"
              />
              {navLinks.map((link, index) => (
                <NavLink key={index} to={link.path} role="group">
                  <Button
                    w="75%"
                    variant="ghost"
                    transition="all 0.2s ease-in-out"
                    onClick={() => {
                      // @ts-ignore
                      document.getElementById(link.id).scrollIntoView({
                        block: "center",
                        behavior: "smooth",
                      });
                      onClose();
                    }}
                    fontSize="xl"
                    textTransform={"uppercase"}
                    _groupHover={{
                      color: "brand.accent.100",
                      fontWeight: "600",
                      bg: "whiteAlpha.100",
                    }}
                  >
                    {link.name}
                  </Button>
                </NavLink>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
    </Flex>
  );
};

export default Navbar;
