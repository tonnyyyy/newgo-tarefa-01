import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Container from "../../Container";
import Title from "../../Title";
import FormTemplate from "../FormTemplate";

interface IFormData {
  username: string;
  password: string;
}

const CadastroUsuarioTemplate: React.FC = () => {
  const toast = useToast({ duration: 10000, isClosable: true });
  const navigate = useNavigate();

  const onSubmit = (data: IFormData) => {
    try {
      toast({
        title: 'Usuário cadastrado.',
        description: `Nome: ${data.username} | Senha: ${data.password}`,
        status: 'success'
      })
      navigate('/');
    } catch (err) {
      toast({
        title: 'Erro ao criar usuário!',
        description: String(err),
        status: 'error'
      })
    } 
  }

  return (
    <Container>
      <Title text='Cadastre-se' />
      <FormTemplate<IFormData>
        hasSubmitButton
        onSubmit={onSubmit}
        fields={[
          { variant: 'input', name: 'username', label: 'Nome de usuário' },
          { variant: 'input', name: 'password', label: 'Senha', type: 'password' }
        ]}
      />
    </Container>
  );
}

export default CadastroUsuarioTemplate;