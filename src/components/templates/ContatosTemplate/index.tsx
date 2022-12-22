import { Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Card from "../../Card";

import { useMediaQuery } from "../../../hooks/useMediaQuery";
import Container from "../../Container";
import Title from "../../Title";
import { BsFillTelephoneForwardFill, BsWhatsapp } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

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
      <Title text='Contato' size='lg' />
      <Stack
        spacing={5}
        direction={isMobile ? 'column' : 'row'}
        align='stretch'
        justify='center'
        flexWrap='wrap'
      >
        <Card title={<HStack justify='center'><BsFillTelephoneForwardFill /><Text>Telefone</Text></HStack>} content={telefone} />
        <Card title={<HStack justify='center'><BsWhatsapp /><Text>Whatsapp</Text></HStack>} content={whatsapp} />
        <Card title={<HStack justify='center'><AiFillMail /><Text>E-mail</Text></HStack>} content={email} />
        <Card
          title="Redes sociais"
          content={(
            <HStack spacing={5} justify="center">
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