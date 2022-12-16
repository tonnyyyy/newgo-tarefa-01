import { Flex, Spinner, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import viacep from "../../../services/viacep";

import Button from "../../Button";
import Container from "../../Container";
import Title from "../../Title";
import FormTemplate from "../FormTemplate";
import Stepper from "../../Stepper";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { useEffect, useState } from "react";

interface IFormData {
  nomeColab: string;
  cargo: string;
  setor: string;
  dataAdmissao: string;
  telefone: string;
  email: string;
  endereco: {
    cep: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
  };
}

const CadastroColaboradorTemplate: React.FC = () => {
  const [isLoadingCep, setIsLoadingCep] = useState<boolean>(false);
  const toast = useToast({ duration: 3000, isClosable: true });
  const navigate = useNavigate();
  const isMobile = useMediaQuery("mobile");
  const formInstance = useForm<IFormData>({
    defaultValues: {
      endereco: {
        pais: 'Brasil'
      }
    }
  });
  const { handleSubmit, watch, setValue } = formInstance;

  const cep = watch('endereco.cep');

  useEffect(() => {
    const cepQuery = cep?.split('-').join('')
    if (cepQuery?.length === 8) {
      setIsLoadingCep(true);
      viacep.get(cep)
        .then((res) => {
          setValue('endereco.logradouro', res.data.logradouro);
          setValue('endereco.bairro', res.data.bairro);
          setValue('endereco.cidade', res.data.localidade);
          setValue('endereco.estado', res.data.uf);
        })
        .finally(() => setIsLoadingCep(false));
    }
  }, [cep])

  const onSubmit = (data: IFormData) => {
    try {
      console.log("DADOS DO COLABORADOR:", data);
      toast({
        title: "Colaborador cadastrado.",
        description: ``,
        status: "success",
      });
      // navigate('/');
    } catch (err) {
      toast({
        title: "Erro ao criar colaborador!",
        description: String(err),
        status: "error",
      });
    }
  };

  return (
    <Container>
      <Title text="Cadastrando colaborador" />
      <Stepper
        steps={[
          {
            title: "Sobre",
            content: (
              <Flex
                justify="space-between"
                gap={5}
                direction={isMobile ? "column" : "row"}
              >
                <FormTemplate<IFormData>
                  customForm={formInstance}
                  fields={[
                    { variant: "input", name: "nomeColab", label: "Nome", placeholder: "João" },
                    { variant: "input", name: "cargo", label: "Cargo na empresa", placeholder: "CTO"},
                    { variant: "input", name: "setor", label: "Setor de atuação", placeholder: "Tecnologia"},
                  ]}
                />
                <FormTemplate<IFormData>
                  customForm={formInstance}
                  fields={[
                    { variant: "input", name: "dataAdmissao", label: "Data de adimissão", type: 'date' },
                    { variant: "input", name: "telefone", label: "Telefone", type: 'tel', mask: 'cel', placeholder: '(99)99999-9999' },
                    { variant: "input", name: "email", label: "email", type: 'email', placeholder: 'joao@mail.com' },
                  ]}
                />
              </Flex>
            ),
          },
          {
            title: 'Endereço',
            content: (
              <Flex direction="column" gap={5}>
                <Flex
                  justify="space-between"
                  gap={5}
                  direction={isMobile ? "column" : "row"}
                >
                  <FormTemplate<IFormData>
                    customForm={formInstance}
                    fields={[
                      { variant: "input", name: "endereco.cep", label: "CEP", mask: 'cep', rightIcon: isLoadingCep ? <Spinner /> : null },
                      { variant: "input", name: "endereco.logradouro", label: "Logradouro" },
                      { variant: "input", name: "endereco.cidade", label: "Cidade" },
                      { variant: "input", name: "endereco.estado", label: "Estado" },
                    ]}
                  />
                  <div style={{ display: 'flex', alignSelf: isMobile ? 'start' : 'end'}}>
                    <FormTemplate<IFormData>
                      customForm={formInstance}
                      fields={[
                        { variant: "input", name: "endereco.numero", label: "Número", type: 'number' },
                        { variant: "input", name: "endereco.bairro", label: "Bairro" },
                        { variant: "input", name: "endereco.pais", label: "País" },
                      ]}
                    />
                  </div>
                </Flex>
                <Button
                  onClick={handleSubmit(onSubmit)}
                  text="Pronto"
                  alignSelf="center"
                  w="75%"
                />
              </Flex>
            )
          }
        ]}
      />
    </Container>
  );
};

export default CadastroColaboradorTemplate;
