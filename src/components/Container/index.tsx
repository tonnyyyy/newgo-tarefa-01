import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react';

interface IContainerProps extends ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({ children, ...rest }) => {
  return (
    <ChakraContainer maxW='container.md' color='var(--font-dark)' {...rest}>
      {children}
    </ChakraContainer>
  );
}

export default Container;