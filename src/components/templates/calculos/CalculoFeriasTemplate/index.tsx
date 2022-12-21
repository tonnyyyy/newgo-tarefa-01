import Container from "../../../Container";
import Title from "../../../Title";
import FormTemplate from "../../FormTemplate";

const CalculoFeriasTemplate: React.FC = () => {
  return (
    <Container>
      <Title text='Férias' />
      <FormTemplate
        direction='row'
        fields={[
          { variant: 'input', name: 'nomeColaborador', label: 'Nome do colaborador', placeholder: 'João' },
          { variant: 'input', name: 'salarioBruto', label: 'Salário bruto', placeholder: 'R$ 1234,56' },
        ]}
      />
    </Container>
  );
}

export default CalculoFeriasTemplate;