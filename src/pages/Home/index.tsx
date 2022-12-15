import { Image } from "@chakra-ui/react";
import { useEffect } from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import { useHeader } from "../../hooks/useHeader";

const Home: React.FC = () => {
  const { headerHeight } = useHeader();
  useEffect(() => console.log(headerHeight), [headerHeight]);

  return (
    <Container>
      <Image
        src='images/logo-light.png'
        py={10}
        transition='padding 1s, box-shadow .5s'
        _hover={{
          transition: 'padding .5s, box-shadow 1s',
          boxShadow: 'inset 6px 0 var(--font-dark)',
          paddingLeft: 10
        }}  
      />
    </Container>
  );
}

export default Home;