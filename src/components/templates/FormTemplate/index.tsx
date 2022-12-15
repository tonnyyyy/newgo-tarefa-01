import { Box, VStack } from '@chakra-ui/react';
import { ComponentType, ReactElement } from 'react';
import { useForm, Path, UseFormReturn } from 'react-hook-form';
import Button from '../../Button';
import Input from '../../Input';

interface Nothing {}

type Field<T> = {
  type: 'text' | 'password' | 'cep';
  label: string;
  name: Path<T>;
}

interface IFormTemplateProps<T extends Nothing> {
  onSubmit?: (data: T) => void;
  fields: Field<T>[];
  hasSubmitButton?: boolean;
  customUseForm?: UseFormReturn<T, any>
}

// O '...extends Nothing' é somente para o typescript entender que
// estou passando um tipo genérico em uma sintaxe de Arrow Funcion. 

/**
 * Renderiza uma coluna de campos conforme a propriedade 'fields'.
 * 
 * @example
 * <FormTemplate fields={[{ type: 'text', name: 'nomeDoCampo', label: 'Nome exibido' }]} />
 */
const FormTemplate = <T extends Nothing>({ fields, onSubmit, hasSubmitButton, customUseForm: customForm }: IFormTemplateProps<T>) => {
  const { register, handleSubmit } = customForm ? customForm : useForm<T>();
  const renderInput = {
    text: (field: Field<T>) => <Input label={field.label} {...register(field.name)} />,
    password: (field: Field<T>) => <Input type='password' label={field.label} {...register(field.name)} />,
    cep: (field: Field<T>) => <Input mask='cep' placeholder='99999-999' label={field.label} {...register(field.name)} />
  };

  return (
    <Box
      as='form'
      display='flex'
      flexDir='column'
      gap={10}
      onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}
      flexGrow={1}
    >
      <VStack spacing={5}>
        {fields.map((field) => renderInput[field.type](field))}
      </VStack>
      {hasSubmitButton && <Button text='Pronto' type='submit' w='75%' alignSelf='center' />}
    </Box>
  );
  
}

export default FormTemplate;