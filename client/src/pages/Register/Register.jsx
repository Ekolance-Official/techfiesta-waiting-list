import { Box } from "@chakra-ui/react";
import React from "react";
import { Widget } from "@typeform/embed-react";

function Register() {
  return (
    <Box h="100vh" w="100vw">
      <Widget
        id="k59Vzj8z"
        style={{ width: "100%", height: "100%" }}
        className="my-form"
      />
    </Box>
  );
}

export default Register;
