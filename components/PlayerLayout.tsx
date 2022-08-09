import { Box } from "@chakra-ui/layout";
import Sidebar from "./Sidebar";

const PLAYER_HEIGHT = "100px";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box
        position="absolute"
        top="0"
        left="0"
        width="250px"
        height={`calc(100vh - ${PLAYER_HEIGHT})`}
      >
        <Sidebar />
      </Box>
      <Box
        marginLeft="250px"
        marginBottom="100px"
        height={`calc(100vh - ${PLAYER_HEIGHT})`}
      >
        {children}
      </Box>
      <Box
        position="absolute"
        left="0"
        bottom="0"
        height={PLAYER_HEIGHT}
        width="100vw"
        bgColor="blue"
      >
        Player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
