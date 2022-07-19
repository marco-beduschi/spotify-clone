import {
  Box,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/layout";
import Link from "next/link";
import { MdHome, MdSearch, MdLibraryMusic } from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];
const Sidebar = () => {
  return (
    <Box bgColor="black" width="100%" height="100%" padding="2">
      <Box
        bgColor="green.100"
        w="120px"
        h="60px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="green.300"
      >
        Spotify Logo
      </Box>
      <Box>
        <List>
          {navMenu.map((menuItem) => (
            <ListItem key={menuItem.name} color="gray">
              <LinkBox>
                <Link href={menuItem.route} passHref>
                  <LinkOverlay>
                    <ListIcon as={menuItem.icon} color="white" />
                    {menuItem.name}
                  </LinkOverlay>
                </Link>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
