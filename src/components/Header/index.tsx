import { Box } from "@chakra-ui/react";
import Nav from "../Nav";
import MobileNav from "../Nav/mobile";

import { ForwardRefRenderFunction, forwardRef } from 'react';
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Header: ForwardRefRenderFunction<HTMLDivElement> = (_, ref) => {
  const isMobile = useMediaQuery("mobile");

  return (
    <Box
      position="fixed"
      top={0}
      h='75px;'
      w='100%' 
      bgColor='var(--bg-dark)'
      ref={ref}
      zIndex={1}
    >
      {isMobile ? <MobileNav /> : <Nav />}
    </Box>
  );
}

export default forwardRef(Header);
