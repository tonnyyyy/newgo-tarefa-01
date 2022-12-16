import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface INavlinkProps {
  to: string;
  label: string;
}

const Navlink: React.FC<INavlinkProps> = ({ label, to }) => {
  return (
    <Link to={to} style={{ height: '100%'}}>
      <Flex
        h='100%'
        align='center'
        transition='.2s'
        _hover={{
          transition: '.2s',
          boxShadow: 'inset 0 -5px var(--font-dark)'
        }}
      >
          <Text color='var(--font-dark)' fontWeight='semibold' fontSize='1.15rem'>{label}</Text>
      </Flex>
    </Link>
  );
}

export default Navlink;