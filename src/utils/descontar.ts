const descontar = (total: number, porcentagem: number) => total - (total * porcentagem / 100);

export default descontar;