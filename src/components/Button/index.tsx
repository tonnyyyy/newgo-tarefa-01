import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

interface IButtonProps extends ButtonProps {
  text: string | React.ReactNode
} 

const Button: React.FC<IButtonProps> = ({ text, ...props }) => {
  return (
    <ChakraButton
      borderRadius='50'
      color='var(--font)'
      {...props}
    >
      {text}
    </ChakraButton>
  );
}

export default Button;