import {
  Box,
  Heading,
  Text,
  Image,
  HStack,
  VStack,
} from "@gluestack-ui/themed";
import cardList from "./Church.json";
import Container from "../Container";

export function Church() {
  return (
    <Container>
      <Box pt={80} pb={128}>
      <Box alignItems="center"  >
        <Text pb={16}>SUB-HEADLINE</Text>
        <Heading fontSize={48} lineHeight={64} textAlign="center">A CHRUCH THAT'S RELEVANT</Heading>
      </Box>

      <VStack  gap={24} pt={64} 
      sx={{
        "@lg": {
            flexDirection: "row",
        },
      }}
    >
        {cardList.map((card, index) => (
          <Box
            key={index}
            bg={"$orange100"}
            mb={12}
            p={80}
            flex={1}
            borderBottomWidth={16}
            borderBottomColor="$primary100"

          >
            <HStack
              bg="$primary100"
              w={40}
              h={40}
              borderRadius={100}
              alignItems="center"
              justifyContent="center"
            >
              <Box>
                <Image source={card.img1} alt="icon" h={24} w={24} />
              </Box>
            </HStack>

            <Heading fontSize={32} pt={24}>
              {card.title}
            </Heading>
            <Text fontSize={16} maxWidth={300} pt={10}>
              {card.text}
            </Text>
          </Box>
        ))}
      </VStack>
      </Box>
    </Container>
  );
}
export default Church;
