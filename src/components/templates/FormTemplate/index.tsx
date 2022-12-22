import { Box, VStack, InputProps, Stack } from '@chakra-ui/react';
import { useForm, Path, UseFormReturn } from 'react-hook-form';
import Button from '../../Button';
import Input from '../../Input';
import Title from '../../Title';

interface Nothing {}

interface Field<T> extends InputProps {
  variant: 'input';
  label: string;
  name: Path<T>;
  mask?: 'cep' | 'cel';
  rightIcon?: React.ReactNode;
}

interface IFormTemplateProps<T extends Nothing> {
  fields: Field<T>[];
  hasSubmitButton?: boolean;
  customForm?: UseFormReturn<T, any>;
  direction?: 'row' | 'column';
  title?: string;
  onSubmit?: (data: T) => void;
}

// O '...extends Nothing' é somente para o typescript entender que
// estou passando um tipo genérico em uma sintaxe de Arrow Funcion. 

/**
 * Renderiza uma coluna/linha de campos conforme a propriedade 'fields'.
 * 
 * @example
 * <FormTemplate fields={[{ type: 'text', name: 'nomeDoCampo', label: 'Nome exibido' }]} />
 */
const FormTemplate = <T extends Nothing>({ fields, onSubmit, hasSubmitButton, customForm, direction, title }: IFormTemplateProps<T>) => {
  const { register, handleSubmit } = customForm ? customForm : useForm<T>();
  const renderInput = {
    input: ({ variant, ...field }: Field<T>) => (
      <Input
        {...field}
        {...register(field.name)}
        label={field.label}
        mask={field.mask}
        rightIcon={field.rightIcon}
      />
    ),
  };

  return (
    <Box
      as='form'
      display='flex'
      flexDir='column'
      gap={5}
      onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}
      flexGrow={1}
    >
      {title && <Title text={title} size='md' pb={0} />}
      <Stack spacing={5} direction={direction}>
        {fields.map((field) => renderInput[field.variant](field))}
      </Stack>
      {hasSubmitButton && <Button text='Pronto' type='submit' w='75%' alignSelf='center' />}
    </Box>
  );
  
}

export default FormTemplate;