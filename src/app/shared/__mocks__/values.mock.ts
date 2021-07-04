export class ApiMock {
  // CLIENTE
  // Com os campos:
  // Com os endpoints
  // ● GET /clientes/
  // ● GET /clientes/1
  // ● POST /clientes/
  // ● PUT /clientes/1
  // ● DELETE /clientes/1
  static getClientes = [{
    código: '',
    cliente: '',
    nome: '',
    cpf: '',
    sexo: '',
    email: ''
  },
  {
    código: '',
    cliente: '',
    nome: '',
    cpf: '',
    sexo: '',
    email: ''
  }];

  static getCliente = {
    código: '',
    cliente: '',
    nome: '',
    cpf: '',
    sexo: '',
    email: ''
  }

  // PRODUTO
  // Com os campos: código produto, nome, fabricação (nacional ou
  // importado), tamanho, valor.
  // Com os endpoints
  // ● GET /produtos/
  // ● GET /produtos/1
  // ● POST /produtos/
  // ● PUT /produtos/1
  // ● DELETE /produtos/1
  static getProdutos = [{
    código: '',
    produto: '',
    nome: '',
    fabricacao: '',
    nacional: '',
    importado: '',
    tamanho: '',
    valor: '',
  },
  {
    código: '',
    produto: '',
    nome: '',
    fabricacao: '',
    nacional: '',
    importado: '',
    tamanho: '',
    valor: '',
  }];

  static getProduto = {
    código: '',
    produto: '',
    nome: '',
    fabricacao: '',
    nacional: '',
    importado: '',
    tamanho: '',
    valor: '',
  }
}
