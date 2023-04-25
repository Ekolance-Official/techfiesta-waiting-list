import React, { Suspense, lazy } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./utils/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import PageLoader from "./reusable/components/PageLoad";
// import NotFound from "./pages/NotFound";

const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoader />}>
              {React.createElement(lazy(() => import("./pages/Home/HomePage")))}
            </Suspense>
          }
        />
        <Route path="/register" element={<Register />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  </ChakraProvider>
);

export default App;
