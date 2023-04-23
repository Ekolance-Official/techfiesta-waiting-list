import React from "react";
import { ExternalLink } from "../../utils/Links";
import { Button } from "@chakra-ui/react";

function WaitingListButton({ bgn }) {
  return (
    <Button
      h="44px"
      outline={"none"}
      transition={"all 0.2s ease-in-out"}
      _hover={{ filter: "brightness(105%)" }}
      bg={
        (!bgn && `linear-gradient(99.72deg, #2C69D1 7.35%, #0ABCF9 86.94%)`) ||
        bgn
      }
      borderRadius={"2.8px"}
      boxShadow={"4.5333px 4.5333px 0px rgba(51, 51, 51, 0.25)"}
      color="white"
      fontSize={{ lg: "14px" }}
    >
      Join Waitlist
    </Button>
  );
}

export default WaitingListButton;
