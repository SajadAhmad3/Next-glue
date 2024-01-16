import {
  Box,
  Button,
  ButtonText,
  HStack,
  Heading,
  Text,
  Image,
} from "@gluestack-ui/themed";

import Container from "../../../src/Components/Container";

export default function Banner() {
  return (
    <>
      <Box position="relative" h={763}>
        <Box>
          <Image
            source={"/images/Banner-girl.jpg"}
            alt="girl"
            h={763}
            w="$full"
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
          />
        </Box>

        <Box pt={128}>
          <Container>
            <Box maxWidth={600}>
              <Text color="$white" fontSize={16} pb={16}>
                WELCOME TO OUR CRUCH
              </Text>
              <Heading
                color="$white"
                fontSize={56}
                pb={32}
                lineHeight={64}
                sx={{
                  "@lg": { fontSize: "64px", lineHeight: "82px" },
                }}
              >
                BECOME A PART OF OUR COMMUNITY
              </Heading>
            </Box>

            <HStack>
              <Button
                bgColor="$primary100"
                borderRadius="$xl"
                py={24}
                px={64}
                mb={10}
                sx={{
                  "@lg": { marginBottom: "64px" },
                }}
              >
                <ButtonText size="sm" color="$black">
                  LEARN MORE
                </ButtonText>
              </Button>
            </HStack>

            <HStack>
              <Text color="$primary100" pr={12}>
                &mdash;
              </Text>
              <Text color="$white" maxWidth={300}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </Text>
            </HStack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
