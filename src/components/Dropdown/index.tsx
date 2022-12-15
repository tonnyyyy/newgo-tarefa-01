import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from 'react-icons/bi';

interface IDropdownProps {
  title: string;
  items: React.ReactNode[];
}

const Dropdown: React.FC<IDropdownProps> = ({ items, title }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BiChevronDown />}
        variant='unstyled'
        color='var(--font-dark)'
        >
          {title}
        </MenuButton>
      <MenuList
        bgColor='var(--font)'
        boxShadow='lg'
        borderWidth='0'
      >
        {items.map((item) => (
          <MenuItem bgColor='inherit' py={0} h='2.5rem'>{item}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default Dropdown;