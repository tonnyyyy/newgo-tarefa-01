import { useEffect } from 'react';
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import { useForm } from "react-hook-form";

import { Flex } from "@chakra-ui/react";
import Container from "../../../Container";
import Title from "../../../Title";
import FormTemplate from "../../FormTemplate";
import descontar from '../../../../utils/descontar';
import getDescontoINSS from '../../../../utils/getDescontoINSS';

interface IFormData {
  nomeColaborador: string;
  salarioBruto: string;
  descontoVT: string;
  descontoINSS: string;
  descontoAdiantamento: string;
  totalDescontos: string;
  salarioLiquido: string;
}

const CalculoFolhaPgtoTemplate: React.FC = () => {
  const isMobile = useMediaQuery('mobile');
  const customUseForm = useForm<IFormData>();
  const { watch, setValue, reset } = customUseForm;

  const toNumber = (str: string) => Number(str.replace(',', '.'));
  const salarioBruto = toNumber(watch('salarioBruto') || '0');
  

  useEffect(() => {
    if (salarioBruto && salarioBruto > 0) {
      const descontoVT = salarioBruto - descontar(salarioBruto, 6);
      const descontoINSS = salarioBruto - getDescontoINSS(salarioBruto);
      const descontoAdiantamento = salarioBruto - descontar(salarioBruto, 30);
      const totalDescontos = descontoVT + descontoINSS + descontoAdiantamento;
      const salarioLiquido = salarioBruto - totalDescontos;
      
      setValue('descontoVT', descontoVT.toFixed(2));
      setValue('descontoINSS', descontoINSS.toFixed(2));
      setValue('descontoAdiantamento', descontoAdiantamento.toFixed(2));
      setValue('totalDescontos', totalDescontos.toFixed(2));
      setValue('salarioLiquido', salarioLiquido.toFixed(2));

    } else {
      reset({ descontoVT: '0', descontoINSS: '0', descontoAdiantamento: '0', totalDescontos: '0', salarioLiquido: '0'});
    }
  }, [salarioBruto])

  return (
    <Container>
      <Title text='Folha de pagamento' pb={2} />
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
          title='Resultado'
          customForm={customUseForm}
          direction={isMobile ? 'column' : 'row'}
          fields={[
            { variant: 'input', name: 'descontoVT', label: 'Desconto de VT', isReadOnly: true },
            { variant: 'input', name: 'descontoINSS', label: 'Desconto INSS', isReadOnly: true},
            { variant: 'input', name: 'descontoAdiantamento', label: 'Desconto Adiant. Sal.', isReadOnly: true},
            { variant: 'input', name: 'totalDescontos', label: 'Total de descontos', isReadOnly: true},
          ]}
        />
        <FormTemplate
          customForm={customUseForm}
          direction={isMobile ? 'column' : 'row'}
          fields={[
            { variant: 'input', name: 'salarioLiquido', label: 'Salário Líquido', isReadOnly: true }
          ]}
        />
      </Flex>
    </Container>
  );
}

export default CalculoFolhaPgtoTemplate;