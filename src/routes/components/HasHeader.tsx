import { Box } from "@chakra-ui/react";
import { PropsWithChildren, useEffect } from "react";
import Header from "../../components/Header";
import { useHeader } from "../../hooks/useHeader";

const HasHeader: React.FC<PropsWithChildren> = ({ children }) => {
  const { headerHeight, setHeaderHeight, headerRef } = useHeader();

  useEffect(() => setHeaderHeight(headerRef.current?.clientHeight), []);

  return (
    <>
      <Header ref={headerRef} />
      <Box mt={headerHeight} pt={5} minH={`calc(100vh - ${headerHeight}px)`}>
        {children}
      </Box>
    </>
  );
}

export default HasHeader;