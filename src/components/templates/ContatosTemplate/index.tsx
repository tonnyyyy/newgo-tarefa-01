import { Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import Card from "../../Card";

import { useMediaQuery } from "../../../hooks/useMediaQuery";
import Container from "../../Container";
import Title from "../../Title";

interface IContatoTemplateProps {
  telefone: string;
  whatsapp: string;
  email: string;
  redesSociais: { link: string, icon: React.ReactNode }[];
}

const ContatosTemplate: React.FC<IContatoTemplateProps> = ({ email, telefone, whatsapp, redesSociais }) => {
  const isMobile = useMediaQuery('mobile');

  return (
    <Container>
      <Title text='Contatos' />
      <Stack
        spacing={5}
        direction={isMobile ? 'column' : 'row'}
        align={isMobile ? 'stretch' : 'center'}
        justify='center'
        flexWrap='wrap'
      >
        <Card title="☎️ Telefone" content={telefone} />
        <Card title="📞 Whatsapp" content={whatsapp} />
        <Card title="✉️ Email" content={email} />
        <Card
          title="🙋‍♂️ Redes sociais"
          content={(
            <HStack spacing={5}>
              {redesSociais.map(({ icon, link }) =>(
                <a href={link} target="_blank">{icon}</a>
              ))}
            </HStack>
          )}
        />
      </Stack>
    </Container>
  );
}

export default ContatosTemplate;