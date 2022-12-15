import { Flex, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import viacep from "../../../services/viacep";

import Button from "../../Button";
import Container from "../../Container";
import Title from "../../Title";
import FormTemplate from "../FormTemplate";
import Stepper from "../../Stepper";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { useEffect } from "react";

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
  const toast = useToast({ duration: 3000, isClosable: true });
  const navigate = useNavigate();
  const isMobile = useMediaQuery("mobile");
  const formInstance = useForm<IFormData>();
  const { handleSubmit, watch, setValue } = formInstance;

  const cep = watch('endereco.cep');
  console.log(cep);

  useEffect(() => {
    const cepQuery = cep?.split('-').join('')
    if (cepQuery?.length === 8) {
      viacep.get(cep).then((res) => {
        setValue('endereco.logradouro', res.data.logradouro);
        setValue('endereco.bairro', res.data.bairro);
        setValue('endereco.cidade', res.data.localidade);
        setValue('endereco.estado', res.data.uf);
      });
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
                  customUseForm={formInstance}
                  fields={[
                    { type: "text", name: "nomeColab", label: "Nome" },
                    { type: "text", name: "cargo", label: "Cargo na empresa" },
                    { type: "text", name: "setor", label: "Setor de atuação" },
                  ]}
                />
                <FormTemplate<IFormData>
                  customUseForm={formInstance}
                  fields={[
                    { type: "text", name: "dataAdmissao", label: "Data de adimissão" },
                    { type: "text", name: "telefone", label: "Telefone" },
                    { type: "text", name: "email", label: "email" },
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
                    customUseForm={formInstance}
                    fields={[
                      { type: "cep", name: "endereco.cep", label: "CEP" },
                      { type: "text", name: "endereco.logradouro", label: "Logradouro" },
                      { type: "text", name: "endereco.cidade", label: "Cidade" },
                      { type: "text", name: "endereco.estado", label: "Estado" },
                    ]}
                  />
                  <div style={{ display: 'flex', alignSelf: isMobile ? 'start' : 'end'}}>
                    <FormTemplate<IFormData>
                      customUseForm={formInstance}
                      fields={[
                        { type: "text", name: "endereco.numero", label: "Número" },
                        { type: "text", name: "endereco.bairro", label: "Bairro" },
                        { type: "text", name: "endereco.pais", label: "País" },
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
