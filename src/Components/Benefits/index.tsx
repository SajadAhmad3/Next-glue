"use client"
import React, { useState } from "react";
import {
  HStack,
  Heading,
  Text,
  VStack,
  Box,
  Image,
  Pressable,
} from "@gluestack-ui/themed";
import Container from "../Container";
import benData from "./Benefits.json";

export default function Benefits() {
  const [displayIndex, setDisplayIndex] = useState(null);

  const handleHover = (index:any) => {
    setDisplayIndex(index);
  };

  const handleLeave = () => {
    setDisplayIndex(null);

  };

  return (
    <Box bgColor="$gray100" py={128} >
      <Container>
        <VStack>
          <VStack alignItems="center">
            <Text fontSize={16} pb={20}>
              WATCH AND LISTEN
            </Text>
            <Heading
              fontSize={48}
              pb={64}
              maxWidth={550}
              textAlign="center"
              lineHeight={64}
              
            >
              THE BENEFITS OF JOINING OUR CHURCH
            </Heading>
          </VStack>

          <HStack
            gap={24}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              "@lg": {
                flexDirection: "row",
                justifyContent: "space-between",
              },
            }}
          >
            {benData.map((pic, index) => (
              <Box key={index} onPointerEnter={() => handleHover(index)}
              onPointerCancel={handleLeave}
              >
                <Pressable position="relative" >
                  <Image source={pic.img} alt="pic" w={302} h={384} />

                  
                    <Box position="absolute" left={32} bottom={32} right={32}>
                      <Heading
                        as="h5"
                        fontSize={24}
                        pb={16}
                        color="white"
                        maxWidth={302}
                      >
                        {pic.title}
                      </Heading>

                      {displayIndex === index &&  (
                      <Pressable>
                      <Text opacity={0.7} color="white" maxWidth={302}>
                        {pic.text}
                      </Text>
                      </Pressable>
                      )}
                    </Box>
                </Pressable>
              </Box>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
