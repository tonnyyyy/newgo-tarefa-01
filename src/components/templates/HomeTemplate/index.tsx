import { AiFillLinkedin, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import AnimatedLogo from "../../AnimatedLogo";
import Container from "../../Container";
import ContatosTemplate from "../ContatosTemplate";
import QuemSomosTemplate from "../QuemSomosTemplate";

const HomeTemplate: React.FC = () => {
  const isMobile = useMediaQuery('mobile');

  return (
    <Container
      overflowX='hidden'
      display='flex'
      flexDir='column'
      justifyContent='space-between'
      gap='6rem'
      pt='7rem'
    >
     <AnimatedLogo isStatic={isMobile} /> 
      <QuemSomosTemplate
        resumo='Somos uma empresa inovadora, focada em projetar e desenvolver as melhores soluções de software para seus clientes. Trabalhamos com desenvolvimento de sistemas: web, móvel e desktop. Nossos especialistas em Inteligência Artificial, Visão Computacional, Segurança de Sistemas e Teste de Software contribuem para a excelência dos serviços que disponibilizamos neste segmento.'
        missao='Oferecer serviços e soluções customizados, de alta qualidade e excelência, concretizando o retorno do investimento de nossos clientes.'
        visao='Ser uma empresa sólida, lucrativa e inovadora, que proporcione qualidade de vida aos colaboradores e promova a transformação da sociedade a partir das novas tecnologias.'
        valores='Nossos valores são os princípios norteados sobre os quais a NewGo foi fundada e como nos esforçamos para conduzir nossos negócios diariamente. Nossos principais valores são: TRANSPARÊNCIA, RESPEITO, DESAFIOS e RESPONSABILIDADE.'
      />
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
    </Container>
  );
}

export default HomeTemplate;