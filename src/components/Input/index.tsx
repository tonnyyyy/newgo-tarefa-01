import { ForwardRefRenderFunction, forwardRef, useCallback } from 'react';
import { FormControl, FormLabel, Input as ChakraInput, InputProps } from "@chakra-ui/react";

interface IInputProps extends InputProps {
  label: string;
  mask?: 'cep';
}

const Input: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = ({ label, mask, ...props }, ref) => {
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
    switch (mask) {
      case 'cep':
        e.currentTarget.maxLength = 9;
        const value = e.currentTarget.value;
        const newValue = value
          .replace(/\D/g, '')
          .replace(/^(\d{5})(\d)/, '$1-$2');
    
        e.currentTarget.value = newValue;
      default:
        null;
    }
  }, []);

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <ChakraInput
        ref={ref}
        onKeyUp={mask && handleKeyUp}
        {...props}
      />
    </FormControl>
  );
}

export default forwardRef(Input);