import { Flex, Spinner } from "@chakra-ui/react";

const PageLoader = () => {
  return (
    <Flex
      justify="center"
      align="center"
      w="full"
      h="100vh"
      overflow={"hidden"}
    >
      <Spinner
        speed="0.75s"
        emptyColor="#D3D1D4"
        color="brand.primary"
        size="xl"
        thickness="5px"
      />
    </Flex>
  );
};

export default PageLoader;
