import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

interface IDropdownProps {
  title: string;
  items: React.ReactNode[];
}

const Dropdown: React.FC<IDropdownProps> = ({ items, title }) => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            rightIcon={isOpen ? <BiChevronUp /> : <BiChevronDown />}
            variant='unstyled'
            color='var(--font-dark)'
            fontSize='1.15rem'
            >
              {title}
            </MenuButton>
          <MenuList
            bgColor='var(--primary-dark)'
            boxShadow='lg'
            borderWidth='0'
          >
            {items.map((item) => (
              <MenuItem key={Math.random() + Math.random()} bgColor='inherit' py={0} h='2.5rem'>{item}</MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
}

export default Dropdown;