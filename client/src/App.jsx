import { lazy } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./utils/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Register from "./pages/Register/Register";
// import NotFound from "./pages/NotFound";

const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  </ChakraProvider>
);

export default App;
