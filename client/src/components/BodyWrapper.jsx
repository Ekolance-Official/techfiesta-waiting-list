import React from "react";
import { Box } from "@chakra-ui/react";

function BodyWrapper({ bgColor, children }) {
  return (
    <Box
      bg={bgColor}
      width={{ base: "auto", xl: "1440px" }}
      maxW={"1440px"}
      mx="auto"
      pb="60px"
      position={"relative"}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
}

export default BodyWrapper;
