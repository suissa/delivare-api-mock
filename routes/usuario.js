const express = require('express');
const router = express.Router();
const request = require('request');
/* GET users listing. */
router.post('/', (req, res) => {
  res.json(req.body);
});
router.post('/login', (req, res) => {
//   const user = {
//   "nome": "Leonardo",
//   "login": "leo@teste.com.br",
//   "senha": 12345678
// }
  res.json(req.body);
});

router.get('/estabelecimentos', (req, res) => {
  const estabelecimentos = [
    {
      "id": 1,
      "nome": "Angeloni Ingleses",
      "cnpj": "11111111111111",
      "email": "angeloniingleses@angeloni.com.br",
      "telefone": "1111111111",
      "logoMarca": null,
      "valorEntrega": 5,
      "tempoEntrega": "00:30",
      "aceitaAgendamento": true
    },
    {
      "id": 2,
      "nome": "Angeloni Centro",
      "cnpj": "22222222222222",
      "email": "angelonicentro@angeloni.com.br",
      "telefone": "2222222222",
      "logoMarca": null,
      "valorEntrega": 5,
      "tempoEntrega": "00:30",
      "aceitaAgendamento": true
    },
    {
      "id": 3,
      "nome": "Imperatriz Canasvieiras",
      "cnpj": "33333333333333",
      "email": "imperatrizcanasvieiras@imperatriz.com.br",
      "telefone": "3333333333",
      "logoMarca": null,
      "valorEntrega": 8,
      "tempoEntrega": "00:30",
      "aceitaAgendamento": true
    },
    {
      "id": 4,
      "nome": "Imperatriz Jurerê",
      "cnpj": "44444444444444",
      "email": "imperatrizjurere@imperatriz.com.br",
      "telefone": "4444444444",
      "logoMarca": null,
      "valorEntrega": 8,
      "tempoEntrega": "00:30",
      "aceitaAgendamento": true
    },
    {
      "id": 5,
      "nome": "Big Iguatemi",
      "cnpj": "55555555555555",
      "email": "bigiguatemi@big.com.br",
      "telefone": "5555555555",
      "logoMarca": null,
      "valorEntrega": 4,
      "tempoEntrega": "00:30",
      "aceitaAgendamento": true
    },
    {
      "id": 6,
      "nome": "Big Via Expressa",
      "cnpj": "66666666666666",
      "email": "bigiguatemi@big.com.br",
      "telefone": "6666666666",
      "logoMarca": null,
      "valorEntrega": 4,
      "tempoEntrega": "00:30",
      "aceitaAgendamento": true
    },
    {
      "id": 7,
      "nome": "Bistek Pantanal",
      "cnpj": "77777777777777",
      "email": "bistekpantanal@bistek.com.br",
      "telefone": "7777777777",
      "logoMarca": null,
      "valorEntrega": 5,
      "tempoEntrega": "00:30",
      "aceitaAgendamento": true
    }
  ]
  res.json(estabelecimentos);
})

router.get('/email', (req, res) => {
  // const usuarioJSON = {
  //   nome: 'Teste da Silva',
  //   email: 'teste@api.com',
  //   telefone: {ddd: '11', numero: '666999'},
  //   endereco: {
  //     completo: 'Rua Padre Roma, 409 - 8º Andar',
  //     bairro: 'Centro',
  //     cidade: 'Florianópolis',
  //     estado: 'SC',
  //     cep: '88010090'
  //   },
  //   listas: ['teste1', 'teste2', 'teste3'],
  //   comprasTotal: 666.98,
  //   listaDeCompras: [
  //     {data: "10 Jan. 2016", tempo: '12:05',
  //       compras: [
  //         {mercado: 'Giassi Campinas', produto: 'Espumante', valor: 130, quantidade: 2, valorTotal: 260},
  //         {mercado: 'Giassi Campinas', produto: 'Biscoito', valor: 1.4, quantidade: 4, valorTotal: 5.6},
  //         {mercado: 'Giassi Campinas', produto: 'Leite', valor: 2.3, quantidade: 12, valorTotal: 27.6}
  //       ] 
  //   }
  //   ]
  // }
  const usuarioJSON =   {
    "id": 1,
    "usuario": {
      "id": 2,
      "nome": "Lauro TESTE API",
      "login": "LAURO",
      "senha": "123"
    },
    email: 'teste@api.com',
    telefone: {ddd: '11', numero: '666999'},
    endereco: {
      completo: 'Rua Padre Roma, 409 - 8º Andar',
      bairro: 'Centro',
      cidade: 'Florianópolis',
      estado: 'SC',
      cep: '88010090'
    },
    "dataCadastro": 1464058800000,
    comprasTotal: 666.98,
    "produtos": [
      {
        "id": 1,
        "listaCompra": {
          "id": 1,
          "usuario": {
            "id": 2,
            "nome": "Lauro",
            "login": "LAURO",
            "senha": "123"
          },
          "dataCadastro": 1464058800000,
          "produtos": []
        },
        "produto": {
          "id": 1,
          "descricao": "Farinha Trigo Libardoni 5Kg",
          "urlImagem": "resources/images/Opala-SS.jpg",
          "informacaoNutricional": null,
          "informacoesAdicionais": null,
          "marca": {
            "id": 3,
            "descricao": "Libardoni"
          },
          "genero": {
            "id": 22,
            "descricao": "Farinhas",
            "generoPai": {
              "id": 1,
              "descricao": "Mercearia",
              "generoPai": null,
              "filhos": []
            },
            "filhos": []
          }
        },
        "quantidade": 3,
        "preco": 10.5
      },
      {
        "id": 2,
        "listaCompra": {
          "id": 1,
          "usuario": {
            "id": 2,
            "nome": "Lauro",
            "login": "LAURO",
            "senha": "123"
          },
          "dataCadastro": 1464058800000,
          "produtos": []
        },
        "produto": {
          "id": 2,
          "descricao": "Biscoito Recheado Yupi Morango",
          "urlImagem": "resources/images/MicroSIM_template.jpg",
          "informacaoNutricional": null,
          "informacoesAdicionais": null,
          "marca": {
            "id": 1,
            "descricao": "Yupi"
          },
          "genero": {
            "id": 20,
            "descricao": "Biscoitos",
            "generoPai": {
              "id": 2,
              "descricao": "Lanche",
              "generoPai": null,
              "filhos": []
            },
            "filhos": []
          }
        },
        "quantidade": 2,
        "preco": 1.3
      }
    ]
  }
  res.json(usuarioJSON);
});

module.exports = router;
