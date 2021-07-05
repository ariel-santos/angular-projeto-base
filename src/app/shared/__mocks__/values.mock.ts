export class ApiMock {
  // CLIENTE
  // Com os campos:
  // Com os endpoints
  // ● GET /clientes/
  // ● GET /clientes/1
  // ● POST /clientes/
  // ● PUT /clientes/1
  // ● DELETE /clientes/1
  static getClientes = [
    {
      id_cliente: '1',
      codigo: '001',
      cliente: 'aaaa',
      nome: 'aaaa',
      cpf: '11111111111',
      sexo: 'M',
      email: 'aaaa@aaaa.com'
    },
    {
      id_cliente: '2',
      codigo: '002',
      cliente: 'bbbb',
      nome: 'bbbb',
      cpf: '22222222222',
      sexo: 'H',
      email: 'bbbb@bbbb.com'
    },
    {
      id_cliente: '3',
      codigo: '003',
      cliente: 'cccc',
      nome: 'cccc',
      cpf: '33333333333',
      sexo: 'H',
      email: 'cccc@cccc.com'
    }
  ];

  static getCliente = {
    codigo: '',
    cliente: '',
    nome: '',
    cpf: '',
    sexo: '',
    email: ''
  }

  // PRODUTO
  // Com os campos: codigo produto, nome, fabricação (nacional ou
  // importado), tamanho, valor.
  // Com os endpoints
  // ● GET /produtos/
  // ● GET /produtos/1
  // ● POST /produtos/
  // ● PUT /produtos/1
  // ● DELETE /produtos/1
  static getProdutos = [{
    codigo: '',
    produto: '',
    nome: '',
    fabricacao: '',
    nacional: '',
    importado: '',
    tamanho: '',
    valor: '',
  },
  {
    codigo: '',
    produto: '',
    nome: '',
    fabricacao: '',
    nacional: '',
    importado: '',
    tamanho: '',
    valor: '',
  }];

  static getProduto = {
    codigo: '',
    produto: '',
    nome: '',
    fabricacao: '',
    nacional: '',
    importado: '',
    tamanho: '',
    valor: '',
  }
}
