import { Box, Flex, Image } from "@chakra-ui/react";
import Container from "../../components/Container";
import Logo from "../../assets/logo-horizontal-sem-foguete.svg";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Home: React.FC = () => {
  const isMobile = useMediaQuery('mobile');

  return (
    <Container overflowX='hidden'>
      <Flex
        align='center'
        gap={5}
        ml='-9rem'
        mt='2rem'
        pl={5}
        transition='margin 1s, box-shadow .5s'
        _hover={{
          transition: 'margin .5s, box-shadow 1s',
          boxShadow: 'inset 6px 0 var(--font-dark)',
          marginLeft: '-1rem',
          paddingLeft: 5
        }}
      >
        <Image
          onDoubleClick={() => console.log('🤖 gif feito pelo incrível Ademar 🤖')}
          h='6rem'
          src='images/logo-animated.gif'
        />
        <Image
          h={isMobile ? '6rem' : 'unset'}
          src={Logo}
        />
      </Flex>  
    </Container>
  );
}

export default Home;