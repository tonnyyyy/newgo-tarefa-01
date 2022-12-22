import { Box, Stack, Text } from "@chakra-ui/react";
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
        <Box
          position='relative'
          left={9}
          transition='transform .8s'
          _hover={{
            transition: 'transform .2s',
            cursor: 'pointer',
            transform: 'translateX(-20px)',
          }}
        >
          <Card title='missão' content={missao} />
        </Box>
        <Box
          position='relative'
          left={-9}
          transition='transform .8s'
          _hover={{
            transition: 'transform .2s',
            cursor: 'pointer',
            transform: 'translateX(20px)',
          }}
        >
          <Card title='visão' content={visao} />
        </Box>
        <Box
          position='relative'
          left={9}
          transition='transform .8s'
          _hover={{
            transition: 'transform .2s',
            cursor: 'pointer',
            transform: 'translateX(-20px)',
          }}
        >
          <Card title='valores' content={valores} />
        </Box>
      </Stack>
    </Container>
  );
}

export default QuemSomosTemplate;