import descontar from "./descontar";

const getDescontoINSS = (salario: number) => {

  if (salario <= 1212) {
    return descontar(salario, 7.5);
  }
  else if (salario > 1212 && salario <= 2427.35) {
    return descontar(salario, 9);
  }
  else if (salario > 2427.35 && salario <= 3641.03) {
    return descontar(salario, 12);
  }
  else if (salario > 3641.03) {
    return descontar(salario, 14);
  }

  return descontar(salario, 14);
}

export default getDescontoINSS;