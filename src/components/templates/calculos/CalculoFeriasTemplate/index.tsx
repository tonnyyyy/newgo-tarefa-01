import { useEffect } from 'react';
import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import Container from "../../../Container";
import Title from "../../../Title";
import FormTemplate from "../../FormTemplate";

interface IFormData {
  nomeColaborador: string;
  salarioBruto: string;
  mediaHoraExtra: string;
  quantidadeDias: string;
  valorBase: string;
  valorTerco: string;
  valorTotal: string;
}

const CalculoFeriasTemplate: React.FC = () => {
  const isMobile = useMediaQuery('mobile');
  const customUseForm = useForm<IFormData>({
    defaultValues: {
      quantidadeDias: '15',
      mediaHoraExtra: '0',
    }
  });

  const { watch, setValue } = customUseForm;
  const { salarioBruto, mediaHoraExtra, quantidadeDias } = watch();

  const toNumber = (str: string) => Number(str.replace(',', '.'));


  useEffect(() => {
    if (salarioBruto && toNumber(salarioBruto) > 0) {
      const valorBase = (toNumber(salarioBruto) + Number(mediaHoraExtra)) / 30 * Number(quantidadeDias);
      const valorTerco = valorBase / 3;
      const valorTotal = valorBase + valorTerco;

      setValue('valorBase', valorBase.toFixed(2));
      setValue('valorTerco', valorTerco.toFixed(2));
      setValue('valorTotal', valorTotal.toFixed(2));
    }
  }, [salarioBruto, mediaHoraExtra, quantidadeDias])

  return (
    <Container>
      <Title text='Férias' pb={2} />
      <Title text='Calcule automaticamente ao preencher' size='sm' />
      <Flex direction='column' gap='3rem'>
        <FormTemplate
          customForm={customUseForm}
          direction={isMobile ? 'column' : 'row'}
          fields={[
            { variant: 'input', name: 'nomeColaborador', label: 'Nome do colaborador', placeholder: 'João' },
            { variant: 'input', name: 'salarioBruto', label: 'Salário bruto', placeholder: '1234,56' },
          ]}
        />
        <FormTemplate
          customForm={customUseForm}
          direction={isMobile ? 'column' : 'row'}
          fields={[
            { variant: 'input', name: 'mediaHoraExtra', label: 'Média de horas extras (12 meses)', placeholder: '2.3' },
            { variant: 'input', name: 'quantidadeDias', label: 'Dias de férias a usufruir', placeholder: '15', type: 'number' },
          ]}
        />
        <FormTemplate
          title='Resultado'
          customForm={customUseForm}
          direction={isMobile ? 'column' : 'row'}
          fields={[
            { variant: 'input', name: 'valorBase', label: 'Valor base de férias', isReadOnly: true },
            { variant: 'input', name: 'valorTerco', label: 'Valor do terço de férias', isReadOnly: true },
            { variant: 'input', name: 'valorTotal', label: 'Valor total a receber', isReadOnly: true },
          ]}
        />
      </Flex>
    </Container>
  );
}

export default CalculoFeriasTemplate;