import { FC, ReactNode } from "react";
import { Box, chakra, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import LogoSVG from "../assets/react.svg?react";

const AppContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <chakra.header
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={2}
      >
        <Box>
          <LogoSVG />
        </Box>
        <ColorModeSwitcher />
      </chakra.header>
      <chakra.main textAlign="left" mt={4}>
        {children}
      </chakra.main>
    </>
  );
};

export default AppContainer;
