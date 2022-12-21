import { forwardRef, useCallback, ForwardedRef } from 'react';
import { FormControl, FormLabel, Input as ChakraInput, InputGroup, InputProps, InputRightElement, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputFieldProps, NumberInputProps, NumberInputStepper } from "@chakra-ui/react";

type IInputProps<T extends InputProps | NumberInputFieldProps> = T & {
  label: string;
  mask?: 'cep' | 'cel';
  rightIcon?: React.ReactNode;
}

function Input<T extends InputProps | NumberInputFieldProps>({ label, mask, rightIcon, max, min, ...props }: IInputProps<T>, ref: ForwardedRef<HTMLInputElement>) {
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
        {props.type === 'number' ? (
          <NumberInput max={Number(max)} min={Number(min)}>
            <NumberInputField
              ref={ref}
              onKeyUp={mask && handleKeyUp}
              readOnly={(props as InputProps).isReadOnly}
              w='5rem'
              {...props as NumberInputFieldProps}
            />
            <NumberInputStepper w='2rem'>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          ) : (
            <>
              <ChakraInput
                ref={ref}
                onKeyUp={mask && handleKeyUp}
                {...props as InputProps}
              />
              <InputRightElement children={rightIcon} />
            </>
        )}
      </InputGroup>
    </FormControl>
  );
}

export default forwardRef(Input);