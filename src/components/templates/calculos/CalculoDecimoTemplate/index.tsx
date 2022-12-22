import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import getDescontoINSS from "../../../../utils/getDescontoINSS";
import Container from "../../../Container";
import Title from "../../../Title";
import FormTemplate from "../../FormTemplate";

interface IFormData {
  nomeColaborador: string;
  salarioBruto: string;
  mesesTrabalhados: string;
  primeiraParcela: string;
  segundaParcela: string;
}

const CalculoDecimoTemplate: React.FC = () => {
  const thisYear = new Date().getFullYear();

  const isMobile = useMediaQuery('mobile');
  const customUseForm = useForm<IFormData>({
    defaultValues: {
      mesesTrabalhados: '0'
    }
  });

  const { watch, setValue } = customUseForm;

  const salarioBruto = watch('salarioBruto');
  const mesesTrabalhados = watch('mesesTrabalhados');

  const toNumber = (str: string) => Number(str.replace(',', '.'));

  useEffect(() => {
    if (salarioBruto && toNumber(salarioBruto) > 0) {
      const resultFirst = ((toNumber(salarioBruto) / 12) * Number(mesesTrabalhados)/2);
      const resultSecond = resultFirst - getDescontoINSS(resultFirst);

      setValue('primeiraParcela', resultFirst.toFixed(2));
      setValue('segundaParcela', resultSecond.toFixed(2));
    }

  }, [salarioBruto, mesesTrabalhados])

  return (
    <Container>
      <Title text='Décimo terceiro' pb={2} />
      <Title text='Calcule automaticamente ao preencher' size='sm' />
      <Flex direction='column' gap='3rem'>
        <FormTemplate
          customForm={customUseForm}
          direction={isMobile ? 'column' : 'row'}
          fields={[
            { variant: 'input', name: 'nomeColaborador', label: 'Nome do colaborador', placeholder: 'João' },
            { variant: 'input', name: 'salarioBruto', label: 'Salário bruto', placeholder: '1234,56' },
            {
              variant: 'input',
              name: 'mesesTrabalhados',
              label: `Meses trabalhados em ${thisYear}`,
              type: 'number',
              max: 12,
              min: 0,
              defaultValue: 0,
              placeholder: '12'
            }
          ]}
        />
        <FormTemplate
          title='Resultado'
          customForm={customUseForm}
          direction='row'
          fields={[
            { variant: 'input', name: "primeiraParcela", label: '1ª parcela', isReadOnly: true },
            { variant: 'input', name: "segundaParcela", label: '2ª parcela', isReadOnly: true },
          ]}
        />
      </Flex>
    </Container>
  );
}

export default CalculoDecimoTemplate;