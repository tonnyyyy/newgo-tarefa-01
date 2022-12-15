import { Flex, IconButton } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav: React.FC = () => {
  return (
    <Flex h='100%' align='center' justify='center'>
      <IconButton
        variant='unstyled'
        size='sm'
        aria-label='hamburger-menu'
        icon={<GiHamburgerMenu size='100%' color='whitesmoke' />}
      />
    </Flex>
  );
}

export default Nav;