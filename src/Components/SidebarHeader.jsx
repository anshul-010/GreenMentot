import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Select,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import "../Styles/SideNav.css";
import logo from "../Images/logo.png";
import { TbSettingsAutomation } from "react-icons/tb";
import { FaSortDown } from "react-icons/fa";
import { LuDroplet } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      //   width="100px"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      backgroundColor="#181818"
      w={{ base: "full", md: "17.5%" }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        borderTop="1px solid #000"
        borderBottom="1px solid #000"
        gap="10px"
        p="13px 10px 13px 20px"
        justifyContent="space-between"
      >
        <Image src={"https://s3-alpha-sig.figma.com/img/7017/0b71/3d08985c3dc4a95e3950693faa9eed19?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ic-~0BNRO2zRSZllD1QqbD~tbPRrZj3gPKGtNLZ0Aa5OBbrZ3Y~6eusCcX5-9mwI7LqUrdx2BbIH6JT427RKRZw8G59blcAXx9GPlDbmjNG63EBRM~v-o6CBi4gmoN-EmGSd~MUoQgIEpAZ1wpuSRwNM-zygpRe7FbZTSMcz0MGI~yufsy~SdGuD1vYrZxweO5~y9xuwaysTwN8bekP85vgonpdosGlv-4SpSu2RN5Q~BlDbPz-ufP3KAtwSsB8~UdHj~aNmkdX~rBeFQTF-be55TfZl02MyqRUhbOaT53HkIm2-CMwqMeNuYVcbBJreVg8iIF3yGkoTBiImoN0hiA__"} color="#D2D2D2" w="128px" height="47px" />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box  className="frame">
        <Box
          p="13px 10px 13px 20px"
          alignItems="center"
          w="219px"
          display="flex"
          gap="5px"
        >
          <Text
            color="#5C5C5C"
            fontFamily="Inter"
            fontStyle="normal"
            fontSize="14px"
            fontWeight="500"
            lineHight="18px"
          >
            DATA-IN
          </Text>
        </Box>
        <Box className="energy">
        <TbSettingsAutomation size="17px" color="white" /> 
        <select className="energy-select">
            <option>Energy</option>
            <option>Energy2</option>
            <option>Energy3</option>
            <option>Energy4</option>
        </select>
        </Box>
        <Box className="drop" ml={{base:"10%",lg:"15%"}}>
        <LuDroplet size="20px" />  <p>Water and Effluents</p> <FaSortDown size="24px" />
        </Box>
        <Box className="energy2">
            <Box className="ene1">ANALYZE</Box>
            <Box className="ene2"><TbSettingsAutomation size="17px" color="white" /> <p>Energy</p></Box>
            <Box className="ene3"><RiDeleteBin5Line /><p>Waste</p></Box>
        </Box>
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      //   as="a"
      //   href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}

    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Box
        display={{ base: "flex", md: "none" }}
        color="green"
      >
       <Image src={"https://s3-alpha-sig.figma.com/img/7017/0b71/3d08985c3dc4a95e3950693faa9eed19?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ic-~0BNRO2zRSZllD1QqbD~tbPRrZj3gPKGtNLZ0Aa5OBbrZ3Y~6eusCcX5-9mwI7LqUrdx2BbIH6JT427RKRZw8G59blcAXx9GPlDbmjNG63EBRM~v-o6CBi4gmoN-EmGSd~MUoQgIEpAZ1wpuSRwNM-zygpRe7FbZTSMcz0MGI~yufsy~SdGuD1vYrZxweO5~y9xuwaysTwN8bekP85vgonpdosGlv-4SpSu2RN5Q~BlDbPz-ufP3KAtwSsB8~UdHj~aNmkdX~rBeFQTF-be55TfZl02MyqRUhbOaT53HkIm2-CMwqMeNuYVcbBJreVg8iIF3yGkoTBiImoN0hiA__"} color="#212020"  w="128px" height="47px" />
      </Box>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} color="white" />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
