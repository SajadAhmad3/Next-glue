import Container from "@/src/Components/Container";
import { Box, Center, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import React from "react";

const About = () => {
  return (
    <Box position="relative" h={700}>
      <Box>
        <Image
          source={"/images/mountain.jpg"}
          alt="mountain"
          h={700}
          w={"$full"} 
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
      </Box> 
      <Container>
        <Box pt={300}>
          <Text color="white" fontSize={30} pb={20} fontWeight="bold">
            ABOUT US
          </Text>
          <Heading color="white" fontSize={50} lineHeight={60}>
            SERVING THE WORLD AROUND US
          </Heading>
          
        </Box>
      </Container>
    </Box>
  );
};

export default About;
