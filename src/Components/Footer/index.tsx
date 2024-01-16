import {
  Box,
  Button,
  ButtonText,
  HStack,
  Text,
  VStack,
  Image,
  Link,
  Heading,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import Container from "../Container";

export default function Footer() {
  return (
    <Box bg="$black100">
      <Container>
        <HStack
          py={64}
          flexDirection="column"
          sx={{
            "@lg": {
              flexDirection: "row",
            },
          }}
        >
          <HStack flex={2}>
            <VStack flex={2}>
              <Link href="/">
                <Image source={"/images/Logo2.svg"} alt="logo" w={140} h={28} />
              </Link>
              <Box pb={40}>
                <Text pt={28} pb={32} color="$white" fontSize={12}>
                  &copy; COPYRIGHT FINSWEET 2023
                </Text>
                <Text pb={16} color="$white" fontSize={12}>
                  (480) 555-0103
                </Text>
                <Text pb={16} color="$white" fontSize={12}>
                  4517 WASHINGTON AVE.
                </Text>
                <Text color="$white" fontSize={12}>
                  FINSWEET@EXAMPLE.COM
                </Text>
              </Box>
            </VStack>

            <VStack flex={1} pl={15}>
              <Text fontSize={16} pb={20} color="$white">
                Quicklinks
              </Text>
              <Text pb={24} fontSize={12} color="$white" opacity={0.7}>
                ABOUT US
              </Text>
              <Text pb={24} fontSize={12} color="$white" opacity={0.7}>
                SERMONS
              </Text>
              <Text pb={24} fontSize={12} color="$white" opacity={0.7}>
                EVENTS
              </Text>
              <Text fontSize={12} color="$white" opacity={0.7}>
                BLOG
              </Text>
            </VStack>

            <VStack flex={1} pl={15}>
              <Text fontSize={16} pb={20} color="$white">
                Connect
              </Text>

              <HStack gap={20}>
                <Image source="/images/fb.svg" alt="fb" w={16} h={16} />
                <Image source="/images/lnd.svg" alt="lnd" w={16} h={16} />
                <Image
                  source="/images/twitter.svg"
                  alt="twitter"
                  w={16}
                  h={16}
                />
              </HStack>
            </VStack>
          </HStack>

          <HStack flex={2}>
            <VStack flex={3}>
              <Heading fontSize={32} pb={32} maxWidth={500} color="$white" lineHeight={44}>
                SUBSCRIBE TO GET LATEST UPDATES AND NEWS
              </Heading>
              <HStack
                alignItems="center"
                borderWidth={"$1"}
                borderColor="gray"
                borderRadius={12}
                display="none"
                sx={{
                  "@md": {display:"flex"},
                }}
              >
                <Input
                  size="lg"
                  borderRadius={12}
                  flex={1}
                  borderStyle="none"
                  h={"$full"}
                >
                  <InputField
                    placeholder="Yourmail@gmail.com"
                    fontSize={16}
                    color="$white"
                  />

                  <Button bgColor="$primary100" py={34} px={64} borderRadius={12}>
                    <ButtonText fontSize={16} color="$black">
                      SUBSCRIBE
                    </ButtonText>
                  </Button>
                </Input>
              </HStack>

            {/* for mobile  */}
            <HStack
                alignItems="center"
                borderWidth={"$1"}
                borderColor="gray"
                borderRadius={12}

                sx={{
                  "@md": {display:"none"},
                }}
              >
                <Input
                  size="lg"
                  borderRadius={12}
                  flex={1}
                  borderStyle="none"
                  h={"$full"}
                >
                  <InputField
                    placeholder="Yourmail@gmail.com"
                    fontSize={14}
                    color="$white"
                  />

                  <Button bgColor="$primary100" py={34} px={20} borderRadius={12}>
                    <ButtonText fontSize={14} color="$black">
                      SUBSCRIBE
                    </ButtonText>
                  </Button>
                </Input>
              </HStack>

            </VStack>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
