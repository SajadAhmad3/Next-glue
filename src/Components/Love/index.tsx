import {
  Box,
  VStack,
  Text,
  Heading,
  HStack,
  Image,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";

const index = () => {
  return (
    <VStack alignItems="center" pb={128} justifyContent="center">
      <Text fontSize={16} pb={16}>
        SUB-HEADLINE
      </Text>
      <Heading fontSize={48} pb={32} lineHeight={64} textAlign="center">
        LOVE AND COMPASSION
      </Heading>
      <Text fontSize={16} maxWidth={950} textAlign="center" pb={56} px={20}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>
      <HStack
        gap={24}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px={20}
        sx={{
          "@lg": { flexDirection: "row" },
        }}
      >
        <Image source={"/images/man.jpg"} alt="man" h={384} w={293} mt={48} />

        <VStack alignItems="center">
          <Button
            bgColor="$primary100"
            borderRadius="$xl"
            py={24}
            px={64}
            mb={48}
            maxWidth={220}
          >
            <ButtonText fontSize={16} fontWeight="400" color="$black" >
              READ MORE
            </ButtonText>
          </Button>
          <Image source={"/images/woman.jpg"} alt="woman" h={512} w={390} display="none" sx={{
            "@md": {display: "flex"},
          }}/>
        </VStack>

        <Image
          source={"/images/people.jpg"}
          alt="people"
          h={384}
          w={293}
          mt={48}
        />
      </HStack>

      <Text fontSize={16} pt={64} pb={16}>
        OUR MISSION & VISION
      </Text>
      <Heading fontSize={32} pb={16}>
        CELEBRATE WITH US
      </Heading>
      <Text fontSize={16} pb={16} maxWidth={600} textAlign="center" px={20}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text fontSize={14}>Read More &#8594;</Text>
    </VStack>
  );
};

export default index;
