import { Link } from 'react-router-dom';
import { Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import Navlink from './components/Navlink';
import Dropdown from '../Dropdown';
// import { GiHamburgerMenu } from 'react-icons/gi';

const Nav: React.FC = () => {
  return (
    <HStack h='100%' align='center' justify='center' gap={3}>
      <Navlink to='/home' label='home' />
      <Navlink to='/contatos' label='contatos' />
      <Dropdown
        title='cadastros'
        items={[
          <Navlink to='/cadastro/usuario' label='usuário' />,
          <Navlink to='/cadastro/colaborador' label='colaborador' />
        ]}
      />
    </HStack>
  );
}

export default Nav;