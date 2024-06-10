import React from "react";
import { Avatar, Heading, VStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
const greeting = "Hello, I am Harsh Dubey!";
const bio1 = "A frontend developer from Romania";
const bio2 = "specialised in React and Node.js";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground 
    backgroundColor="red"
  >
    <VStack spacing={2} mt={6}>
      <Heading as="h3" size="md" noOfLines={1}>
        {greeting}
      </Heading>
      <Heading as="h1" size="4xl" noOfLines={1}>
        {bio1}
      </Heading>
      <Heading as="h1" size="4xl" noOfLines={1}>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
