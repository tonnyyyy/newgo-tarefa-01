import ContatosTemplate from '../../components/templates/ContatosTemplate';

import { AiOutlineFacebook, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';

const Contatos: React.FC = () => {
  return (
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
  );
}

export default Contatos;