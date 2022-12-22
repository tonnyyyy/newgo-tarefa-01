import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
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
        justify='stretch'
        flexWrap='wrap'
        flexGrow={1}
      >
        <Box
          display={isMobile ? 'unset' : 'flex'}
          transition='transform .2s'
          _hover={{
            transition: 'transform.2s',
            transform: 'translateY(-10px)'
          }}
        >
          <Card title={<HStack justify='center'><BsFillTelephoneForwardFill /><Text>Telefone</Text></HStack>} content={telefone} />
        </Box>
        <Box
          display={isMobile ? 'unset' : 'flex'}
          transition='transform .2s'
          _hover={{
            transition: 'transform.2s',
            transform: 'translateY(-10px)'
          }}
        >
          <Card title={<HStack justify='center'><BsWhatsapp /><Text>Whatsapp</Text></HStack>} content={whatsapp} />
        </Box>
        <Box
          display={isMobile ? 'unset' : 'flex'}
          transition='transform .2s'
          _hover={{
            transition: 'transform.2s',
            transform: 'translateY(-10px)'
          }}
        >
          <Card title={<HStack justify='center'><AiFillMail /><Text>E-mail</Text></HStack>} content={email} />
        </Box>
        <Box
          display={isMobile ? 'unset' : 'flex'}
          transition='transform .2s'
          _hover={{
            transition: 'transform.2s',
            transform: 'translateY(-10px)'
          }}
        >
          <Card
            title="Redes sociais"
            content={(
              <HStack spacing={5} justify="center">
                {redesSociais.map(({ icon, link }) =>(
                  <a key={icon?.toLocaleString() + link} href={link} target="_blank">{icon}</a>
                ))}
              </HStack>
            )}
          />
        </Box>
      </Stack>
    </Container>
  );
}

export default ContatosTemplate;