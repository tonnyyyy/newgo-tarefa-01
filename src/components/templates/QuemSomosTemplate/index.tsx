import { Stack, Text } from "@chakra-ui/react";
import Card from "../../Card";
import Container from "../../Container";
import Title from "../../Title";

interface IQuemSomosTemplateProps {
  resumo: string;
  missao: string;
  visao: string;
  valores: string;
}

const QuemSomosTemplate: React.FC<IQuemSomosTemplateProps> = ({ resumo, missao, visao, valores }) => {
  return (
    <Container>
      <Title text='Quem somos?' />
      <Text textAlign='justify' pb={10}>{resumo}</Text>
      <Stack spacing={5}>
        <Card title='Missão' content={missao} />
        <Card title='Visão' content={visao} />
        <Card title='Valores' content={valores} />
      </Stack>
    </Container>
  );
}

export default QuemSomosTemplate;