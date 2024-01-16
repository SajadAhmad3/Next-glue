"use client";
import {
  Box,
  Button,
  ButtonText,
  Link,
  HStack,
  LinkText,
  Image,
  Menu,
  MenuItem,
  Icon,
  MenuIcon,
  MenuItemLabel,
} from "@gluestack-ui/themed";
import Container from "../Container";
import navData from "./Header.json";

export default function Header() {
  return (
    <Box bg="$black200">
      <Container>
        <HStack alignItems="center" justifyContent="space-between" py={20}>
          <HStack alignItems="center" gap={130}>
            <Link href={"/"}>
              <Image source={"/images/Logo.svg"} alt="logo" w={132} h={27} />
            </Link>

            <HStack
              gap={48}
              display="none"
              sx={{
                "@lg": { display: "flex" },
              }}
            >
              {navData.map((item, index) => (
                <Link key={index} href={item.path}>
                  <LinkText textDecorationLine="none" color="$white">
                    {item.label}
                  </LinkText>
                </Link>
              ))}
            </HStack>
          </HStack>

          <HStack
            display="none"
            sx={{
              "@lg": { display: "flex" },
            }}
          >
            <Button bg="$primary100" borderRadius="$xl" py={20} px={48}>
              <ButtonText size="sm" color="$black">
                CONTACT US
              </ButtonText>
            </Button>
          </HStack>

          <Box
            sx={{
              "@base": { display: "flex" },
              "@md": { diaplay: "flex" },
              "@lg": { display: "none" },
            }}
          >
            <Menu
              placement="top"
              trigger={({ ...triggerProps }) => {
                return (
                  <Button {...triggerProps} bgColor="$primary100" size="xs" px={10} pt={5}>
                    <ButtonText><Icon as={MenuIcon}  size="md" /></ButtonText>
                  </Button>
                );
              }}
              alignItems="center"
              pt={20}
            > 

              <MenuItem as="a" href="/">
              <MenuItemLabel size="sm">HOME</MenuItemLabel> 
              </MenuItem>
              <MenuItem as="a" href="/About">
              <MenuItemLabel size="sm">ABOUT</MenuItemLabel> 
              </MenuItem>
              <MenuItem as="a" href="/Sermon">
                <MenuItemLabel size="sm">SERMON</MenuItemLabel>
              </MenuItem>
              <MenuItem as="a" href="/Blog">
                <MenuItemLabel size="sm">BLOG</MenuItemLabel>
              </MenuItem>
              <MenuItem as="a">
                <Button
                py={10}
                px={24}
                borderRadius={12}
                bgColor="$primary100">
                  <ButtonText
                  fontSize={12} color="$black">CONTACT US</ButtonText>
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}
