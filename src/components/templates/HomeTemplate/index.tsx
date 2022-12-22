import { Box, Divider, Image } from "@chakra-ui/react";
import { AiFillLinkedin, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import AnimatedLogo from "../../AnimatedLogo";
import Container from "../../Container";
import ContatosTemplate from "../ContatosTemplate";
import QuemSomosTemplate from "../QuemSomosTemplate";

const HomeTemplate: React.FC = () => {
  const isMobile = useMediaQuery('mobile');

  return (
    <Box
      display='flex'
      flexDir='column'
      justifyContent='space-between'
      gap='4rem'
      pt='7rem'
    >
      <Container overflowX='hidden'>
        <AnimatedLogo isStatic={isMobile} />
      </Container>
      <Container display='flex' flexDir='column' gap='5rem' overflowX={isMobile ? 'hidden' : 'unset'}>
        <Box as='a'
          href='#quem-somos'
          onClick={() => setTimeout(() => scroll({ top: window.scrollY - 75 }), 500)}
        >
          <Divider />
          <BsChevronCompactDown style={{ margin: '0 auto' }} size={60} />
        </Box>
        <Box id='quem-somos'>
          <QuemSomosTemplate
            resumo='Somos uma empresa inovadora, focada em projetar e desenvolver as melhores soluções de software para seus clientes. Trabalhamos com desenvolvimento de sistemas: web, móvel e desktop. Nossos especialistas contribuem para a excelência dos serviços que disponibilizamos neste segmento.'
            missao='Oferecer serviços e soluções customizados, de alta qualidade e excelência, concretizando o retorno do investimento de nossos clientes.'
            visao='Ser uma empresa sólida, lucrativa e inovadora, que proporcione qualidade de vida aos colaboradores e promova a transformação da sociedade a partir das novas tecnologias.'
            valores='Nossos valores são os princípios norteados sobre os quais a NewGo foi fundada e como nos esforçamos para conduzir nossos negócios diariamente. Nossos principais valores são: TRANSPARÊNCIA, RESPEITO, DESAFIOS e RESPONSABILIDADE.'
          />
        </Box>
        <Divider />
        <ContatosTemplate
          email='contato@gmail.com'
          telefone='+55 11 4752-2376'
          whatsapp='+55 11 96314-4712'
          redesSociais={[
            { link: 'https://facebook.com', icon: <AiOutlineFacebook size={30} />},
            { link: 'https://instagram.com', icon: <AiOutlineInstagram size={30} />},
            { link: 'https://linkedin.com', icon: <AiFillLinkedin size={30} />}
          ]}
        />
          <Image
            src='images/logo-animated-sm.gif'
            alignSelf='center'
            w='50px'
            transition='transform .2s'
            _hover={{
              transition: 'transform .2s',
              transform: 'rotate(45deg)',
              cursor: 'pointer'
            }}
            onClick={() => scroll({ top: 0 })}
          />
      </Container>
    </Box>
  );
}

export default HomeTemplate;