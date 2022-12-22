import { Link } from 'react-router-dom';
import { Box, HStack, Image } from '@chakra-ui/react';
import Navlink from './components/Navlink';
import Dropdown from '../Dropdown';
import Logotipo from '../../assets/logotipo.svg';
import { useMediaQuery } from '../../hooks/useMediaQuery';

// import { GiHamburgerMenu } from 'react-icons/gi';

const Nav: React.FC = () => {
  const isMobile = useMediaQuery('mobile');

  return (
    <HStack h='100%' align='center' justify='center' gap={3}>
      <Box position='relative' h='100%'>
      {!isMobile && (
        <Link to='/home'>
          <Image
            src={Logotipo}
            position='absolute'
            left={-20}
            bottom={3}
          />
        </Link>
      )}
        <Navlink to='/home' label='home' />
      </Box>
      <Dropdown
        title='cadastros'
        items={[
          <Navlink to='/cadastro/usuario' label='usuário' />,
          <Navlink to='/cadastro/colaborador' label='colaborador' />
        ]}
      />
      <Dropdown
        title='cálculos'
        items={[
          <Navlink to='/calculo/folha-pagamento' label='folha de pagamento' />,
          <Navlink to='/calculo/ferias' label='férias' />,
          <Navlink to='/calculo/decimo' label='13º salário' />,
        ]}
      />
    </HStack>
  );
}

export default Nav;