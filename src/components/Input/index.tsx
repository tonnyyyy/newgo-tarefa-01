import { ForwardRefRenderFunction, forwardRef, useCallback } from 'react';
import { FormControl, FormLabel, Input as ChakraInput, InputGroup, InputProps, InputRightElement } from "@chakra-ui/react";

interface IInputProps extends InputProps {
  label: string;
  mask?: 'cep' | 'cel';
  rightIcon?: React.ReactNode;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = ({ label, mask, rightIcon, ...props }, ref) => {
  const masks = {
    cep(e: React.FormEvent<HTMLInputElement>) {
      e.currentTarget.maxLength = 9;
      const value = e.currentTarget.value;
      const newValue = value
        .replace(/\D/g, '')
        .replace(/^(\d{5})(\d)/, '$1-$2');

      e.currentTarget.value = newValue;
    },
  }
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    let newValue: string = '';
    switch (mask) {
      case 'cep':
        e.currentTarget.maxLength = 9;
        newValue = value
          .replace(/\D/g, '')
          .replace(/^(\d{5})(\d)/, '$1-$2');    
        break;
      case 'cel':
        e.currentTarget.maxLength = 14;
        newValue = value
          .replace(/\D/g, '')
          .replace(/^(\d{2})(\d{5})(\d)/, '($1)$2-$3');
        newValue = newValue.slice(0, 14);
        break;
      default:
        break;
    }
    e.currentTarget.value = newValue;
  }, []);

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <ChakraInput
          ref={ref}
          onKeyUp={mask && handleKeyUp}
          {...props}
        />
        <InputRightElement children={rightIcon} />
      </InputGroup>
    </FormControl>
  );
}

export default forwardRef(Input);