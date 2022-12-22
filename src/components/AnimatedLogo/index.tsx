import { Flex, Image } from "@chakra-ui/react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Logo from "../../assets/logo-horizontal-sem-foguete.svg";

interface IAnimatedLogoProps {
  isStatic?: boolean;
}

const AnimatedLogo: React.FC<IAnimatedLogoProps> = ({ isStatic }) => {
  const isMobile = useMediaQuery('mobile');
  return (
    <Flex
      align='center'
      gap={5}
      {...(!isStatic && {
        transition: 'margin 1s, box-shadow .5s',
        pl: 5,
        ml: '-9rem',
        _hover: {
          transition: 'margin .5s, box-shadow 1s',
          boxShadow: 'inset 6px 0 var(--font-dark)',
          marginLeft: '-1rem',
          paddingLeft: 5
        }
      })}
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
);
}

export default AnimatedLogo;
