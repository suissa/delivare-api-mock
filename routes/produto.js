const express = require('express');
const router = express.Router();
const request = require('request');


const produstosIniciais = {
  "produtos": [
      {
          "id": 1,
          "imagem": "veuveclicquot.jpg",
          "descricao": "Champagne Francês VEUVE CLICQUOT PONSARD Brut Garrafa 375ml",
          "mercados": [
              {
                  "id": 1,
                  "nome": "Angeloni",
                  "localizacao": "Centro",
                  "preco": 31.89,
                  "quantidade": 0,
                  "localizacao": "Não sei",
                  "avaliacao": 3,
                  "melhorPreco": true,
                  "avaliacao": 0
             },                {
                  "id": 3,
                  "nome": "Bistek",
                  "localizacao": "Barreiros",
                  "preco": 34.99,
                  "quantidade": 0,
                  "localizacao": "Não sei",
                  "avaliacao": 3,
                  "melhorPreco": false,
                  "avaliacao": 2
             },
              {
                  "id": 4,
                  "nome": "Giassi",
                  "localizacao": "Barreiros",
                  "preco": 38.99,
                  "quantidade": 0,
                  "localizacao": "Não sei",
                  "avaliacao": 3,
                  "melhorPreco": false,
                  "avaliacao": 5
             },
              {
                  "id": 2,
                  "nome": "Imperatriz",
                  "localizacao": "Centro",
                  "preco": 3450.00,
                  "quantidade": 0,
                  "localizacao": "Não sei",
                  "avaliacao": 3,
                  "melhorPreco": false,
                  "avaliacao": 4
             },

              {
                  "id": 4,
                  "nome": "TESTE",
                  "localizacao": "TESTE",
                  "preco": 33.99,
                  "quantidade": 0,
                  "localizacao": "Não sei",
                  "avaliacao": 3,
                  "melhorPreco": false,
                  "avaliacao": 5
             }
         ]
     },
      {
          "id": 1,
          "imagem": "aurora.jpg",
          "descricao": "Vinho Espumante Brasileiro AURORA Moscatel Garrafa 750ml",
          "mercados": [
              {
                  "id": 1,
                  "nome": "Angeloni",
                  "localizacao": "Centro",
                  "preco": 34.99,
                  "quantidade": 0,
                  "localizacao": "Não sei",
                  "avaliacao": 3,
                  "melhorPreco": true,
                  "avaliacao": 3.5
             },
              {
                  "id": 2,
                  "nome": "Imperatriz",
                  "localizacao": "Centro",
                  "preco": 3450.00,
                  "quantidade": 0,
                  "localizacao": "Não sei",
                  "avaliacao": 3,
                  "melhorPreco": false,
                  "avaliacao": 4
             },
              {
                  "id": 3,
                  "nome": "Bistek",
                  "localizacao": "Barreiros",
                  "preco": 34.99,
                  "quantidade": 0,
                  "localizacao": "Não sei",
                  "avaliacao": 3,
                  "melhorPreco": false,
                  "avaliacao": 2
             },
              {
                  "id": 4,
                  "nome": "Giassi",
                  "localizacao": "Barreiros",
                  "preco": 34.99,
                  "quantidade": 0,
                  "localizacao": "Não sei",
                  "avaliacao": 3,
                  "melhorPreco": false,
                  "avaliacao": 5
              }
          ]
     },
      {
          "id": 1,
          "imagem": "heineken.jpg",
          "descricao": "Cerveja HEINEKEN Premium Long Neck 355ml",
          "mercados": [
              {
                  "id": 1,
                  "nome": "Angeloni",
                  "localizacao": "Centro",
                  "preco": 34.99,
                  "quantidade": 0,
                  "localizacao": "Não sei",
                  "avaliacao": 3,
                  "melhorPreco": true,
                  "avaliacao": 3.5
             },
              {
                  "id": 2,
                  "nome": "Imperatriz",
                  "localizacao": "Centro",
                  "preco": 3450.00,
                  "quantidade": 0,
                  "localizacao": "Não sei",
                  "avaliacao": 3,
                  "melhorPreco": false,
                  "avaliacao": 4
             },
              {
                  "id": 3,
                  "nome": "Bistek",
                  "localizacao": "Barreiros",
                  "preco": 34.99,
                  "quantidade": 0,
                  "localizacao": "Não sei",
                  "avaliacao": 3,
                  "melhorPreco": false,
                  "avaliacao": 2
             },
              {
                  "id": 4,
                  "nome": "Giassi",
                  "localizacao": "Barreiros",
                  "preco": 34.99,
                  "quantidade": 0,
                  "localizacao": "Não sei",
                  "avaliacao": 3,
                  "melhorPreco": false,
                  "avaliacao": 5
             }
         ]
      }
  ]
}


const produtosGenero = 
[
   {
      "produto":{
         "id":5,
         "descricao":"Biscoito Recheado Yupi Chocolate",
         "urlImagem":"yupi_chocate_thumb.jpg",
         "informacaoNutricional":"",
         "informacoesAdicionais":"",
         "marca":{
            "id":1,
            "descricao":"Yupi"
         },
         "genero":{
            "id":20,
            "descricao":"Biscoitos",
            "generoPai":{
               "id":2,
               "descricao":"Lanche",
               "generoPai":null,
               "filhos":[

               ]
            },
            "filhos":[

            ]
         }
      },
      "precos":[
         {
            "estabelecimento":{
               "id":8,
               "nome":"Angeloni - Site",
               "cnpj":"11111111111112",
               "email":"angelonisite@angeloni.com.br",
               "telefone":"1111111112",
               "logoMarca":null,
               "valorEntrega":5.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":1.5,
            "precoFormatado":"R$ 1,50"
         }
      ]
   },
   {
      "produto":{
         "id":2,
         "descricao":"Biscoito Recheado Yupi Morango",
         "urlImagem":"yupi_morango_thumb.jpg",
         "informacaoNutricional":null,
         "informacoesAdicionais":null,
         "marca":{
            "id":1,
            "descricao":"Yupi"
         },
         "genero":{
            "id":20,
            "descricao":"Biscoitos",
            "generoPai":{
               "id":2,
               "descricao":"Lanche",
               "generoPai":null,
               "filhos":[

               ]
            },
            "filhos":[

            ]
         }
      },
      "precos":[
         {
            "estabelecimento":{
               "id":2,
               "nome":"Angeloni Centro",
               "cnpj":"22222222222222",
               "email":"angelonicentro@angeloni.com.br",
               "telefone":"2222222222",
               "logoMarca":null,
               "valorEntrega":5.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":1.3,
            "precoFormatado":"R$ 1,30"
         },
         {
            "estabelecimento":{
               "id":1,
               "nome":"Angeloni Ingleses",
               "cnpj":"11111111111111",
               "email":"angeloniingleses@angeloni.com.br",
               "telefone":"1111111111",
               "logoMarca":null,
               "valorEntrega":5.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":1.2,
            "precoFormatado":"R$ 1,20"
         },
         {
            "estabelecimento":{
               "id":8,
               "nome":"Angeloni - Site",
               "cnpj":"11111111111112",
               "email":"angelonisite@angeloni.com.br",
               "telefone":"1111111112",
               "logoMarca":null,
               "valorEntrega":5.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":1.8,
            "precoFormatado":"R$ 1,80"
         },
         {
            "estabelecimento":{
               "id":5,
               "nome":"Big Iguatemi",
               "cnpj":"55555555555555",
               "email":"bigiguatemi@big.com.br",
               "telefone":"5555555555",
               "logoMarca":null,
               "valorEntrega":4.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":1.1,
            "precoFormatado":"R$ 1,10"
         },
         {
            "estabelecimento":{
               "id":6,
               "nome":"Big Via Expressa",
               "cnpj":"66666666666666",
               "email":"bigiguatemi@big.com.br",
               "telefone":"6666666666",
               "logoMarca":null,
               "valorEntrega":4.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":1.0,
            "precoFormatado":"R$ 1,00"
         },
         {
            "estabelecimento":{
               "id":7,
               "nome":"Bistek Pantanal",
               "cnpj":"77777777777777",
               "email":"bistekpantanal@bistek.com.br",
               "telefone":"7777777777",
               "logoMarca":null,
               "valorEntrega":5.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":1.25,
            "precoFormatado":"R$ 1,25"
         },
         {
            "estabelecimento":{
               "id":3,
               "nome":"Imperatriz Canasvieiras",
               "cnpj":"33333333333333",
               "email":"imperatrizcanasvieiras@imperatriz.com.br",
               "telefone":"3333333333",
               "logoMarca":null,
               "valorEntrega":8.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":1.4,
            "precoFormatado":"R$ 1,40"
         },
         {
            "estabelecimento":{
               "id":4,
               "nome":"Imperatriz Jurerê",
               "cnpj":"44444444444444",
               "email":"imperatrizjurere@imperatriz.com.br",
               "telefone":"4444444444",
               "logoMarca":null,
               "valorEntrega":8.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":1.75,
            "precoFormatado":"R$ 1,75"
         }
      ]
   },
   {
      "produto":{
         "id":4,
         "descricao":"Biscoito Sortidos Casaredo",
         "urlImagem":"casaredo_sortido_thumb.jpg",
         "informacaoNutricional":null,
         "informacoesAdicionais":null,
         "marca":{
            "id":2,
            "descricao":"Casaredo"
         },
         "genero":{
            "id":20,
            "descricao":"Biscoitos",
            "generoPai":{
               "id":2,
               "descricao":"Lanche",
               "generoPai":null,
               "filhos":[

               ]
            },
            "filhos":[

            ]
         }
      },
      "precos":[
         {
            "estabelecimento":{
               "id":2,
               "nome":"Angeloni Centro",
               "cnpj":"22222222222222",
               "email":"angelonicentro@angeloni.com.br",
               "telefone":"2222222222",
               "logoMarca":null,
               "valorEntrega":5.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":3.1,
            "precoFormatado":"R$ 3,10"
         },
         {
            "estabelecimento":{
               "id":1,
               "nome":"Angeloni Ingleses",
               "cnpj":"11111111111111",
               "email":"angeloniingleses@angeloni.com.br",
               "telefone":"1111111111",
               "logoMarca":null,
               "valorEntrega":5.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":3.0,
            "precoFormatado":"R$ 3,00"
         },
         {
            "estabelecimento":{
               "id":5,
               "nome":"Big Iguatemi",
               "cnpj":"55555555555555",
               "email":"bigiguatemi@big.com.br",
               "telefone":"5555555555",
               "logoMarca":null,
               "valorEntrega":4.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":2.8,
            "precoFormatado":"R$ 2,80"
         },
         {
            "estabelecimento":{
               "id":6,
               "nome":"Big Via Expressa",
               "cnpj":"66666666666666",
               "email":"bigiguatemi@big.com.br",
               "telefone":"6666666666",
               "logoMarca":null,
               "valorEntrega":4.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":2.5,
            "precoFormatado":"R$ 2,50"
         },
         {
            "estabelecimento":{
               "id":7,
               "nome":"Bistek Pantanal",
               "cnpj":"77777777777777",
               "email":"bistekpantanal@bistek.com.br",
               "telefone":"7777777777",
               "logoMarca":null,
               "valorEntrega":5.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":2.9,
            "precoFormatado":"R$ 2,90"
         },
         {
            "estabelecimento":{
               "id":3,
               "nome":"Imperatriz Canasvieiras",
               "cnpj":"33333333333333",
               "email":"imperatrizcanasvieiras@imperatriz.com.br",
               "telefone":"3333333333",
               "logoMarca":null,
               "valorEntrega":8.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":3.5,
            "precoFormatado":"R$ 3,50"
         },
         {
            "estabelecimento":{
               "id":4,
               "nome":"Imperatriz Jurerê",
               "cnpj":"44444444444444",
               "email":"imperatrizjurere@imperatriz.com.br",
               "telefone":"4444444444",
               "logoMarca":null,
               "valorEntrega":8.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":3.8,
            "precoFormatado":"R$ 3,80"
         }
      ]
   },
   {
      "produto":{
         "id":9,
         "descricao":"Biscoito Wafer Marillan Chocolate",
         "urlImagem":"marilan_wafer_chocolate.jpg",
         "informacaoNutricional":"",
         "informacoesAdicionais":"",
         "marca":{
            "id":12,
            "descricao":"Marillan"
         },
         "genero":{
            "id":20,
            "descricao":"Biscoitos",
            "generoPai":{
               "id":2,
               "descricao":"Lanche",
               "generoPai":null,
               "filhos":[

               ]
            },
            "filhos":[

            ]
         }
      },
      "precos":[
         {
            "estabelecimento":{
               "id":8,
               "nome":"Angeloni - Site",
               "cnpj":"11111111111112",
               "email":"angelonisite@angeloni.com.br",
               "telefone":"1111111112",
               "logoMarca":null,
               "valorEntrega":5.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":1.85,
            "precoFormatado":"R$ 1,85"
         }
      ]
   },
   {
      "produto":{
         "id":11,
         "descricao":"Biscoito Wafer Marillan Limão",
         "urlImagem":"marilan_wafer_limao.jpg",
         "informacaoNutricional":"",
         "informacoesAdicionais":"",
         "marca":{
            "id":12,
            "descricao":"Marillan"
         },
         "genero":{
            "id":20,
            "descricao":"Biscoitos",
            "generoPai":{
               "id":2,
               "descricao":"Lanche",
               "generoPai":null,
               "filhos":[

               ]
            },
            "filhos":[

            ]
         }
      },
      "precos":[
         {
            "estabelecimento":{
               "id":8,
               "nome":"Angeloni - Site",
               "cnpj":"11111111111112",
               "email":"angelonisite@angeloni.com.br",
               "telefone":"1111111112",
               "logoMarca":null,
               "valorEntrega":5.0,
               "tempoEntrega":"00:30",
               "aceitaAgendamento":true,
               "avaliacao": 0
            },
            "preco":1.85,
            "precoFormatado":"R$ 1,85"
         }
      ]
   }
]


router.get('/', (req, res) => {
  res.json(produstosIniciais)
})

router.get('/consultarPrecos/padrao', (req, res) => {
  res.json(produtosGenero)
})



router.get('/consultarPrecos/:generoId', (req, res) => {
  let produtos = {}
  const produto_5 = {
    "produto":{
       "id":5,
       "descricao":"Biscoito Recheado Yupi Chocolate",
       "urlImagem":"yupi_chocate_thumb.jpg",
       "informacaoNutricional":"",
       "informacoesAdicionais":"",
       "marca":{
          "id":1,
          "descricao":"Yupi"
       },
       "genero":{
          "id":20,
          "descricao":"Biscoitos",
          "generoPai":{
             "id":2,
             "descricao":"Lanche",
             "generoPai":null,
             "filhos":[

             ]
          },
          "filhos":[

          ]
       }
    },
    "precos":[
       {
          "estabelecimento":{
            "quantidade": 0,
            "localizacao": "Não sei",
            "avaliacao": 3,
             "id":8,
             "nome":"Angeloni - Site",
             "cnpj":"11111111111112",
             "email":"angelonisite@angeloni.com.br",
             "telefone":"1111111112",
             "logoMarca":null,
             "valorEntrega":5.0,
             "tempoEntrega":"00:30",
             "aceitaAgendamento":true
          },
          "preco":1.5,
          "precoFormatado":"R$ 1,50",
          "melhorPreco": true
       }
    ]
  };
  produtos['produto-5'] = produto_5

const produto_2 = {
  "produto":{
     "id":2,
     "descricao":"Biscoito Recheado Yupi Morango",
     "urlImagem":"yupi_morango_thumb.jpg",
     "informacaoNutricional":null,
     "informacoesAdicionais":null,
     "marca":{
        "id":1,
        "descricao":"Yupi"
     },
     "genero":{
        "id":20,
        "descricao":"Biscoitos",
        "generoPai":{
           "id":2,
           "descricao":"Lanche",
           "generoPai":null,
           "filhos":[

           ]
        },
        "filhos":[

        ]
     }
  },
  "precos":[
     {
        "estabelecimento":{
          "quantidade": 0,
          "localizacao": "Não sei",
          "avaliacao": 3,
           "id":2,
           "nome":"Angeloni Centro",
           "cnpj":"22222222222222",
           "email":"angelonicentro@angeloni.com.br",
           "telefone":"2222222222",
           "logoMarca":null,
           "valorEntrega":5.0,
           "tempoEntrega":"00:30",
           "aceitaAgendamento":true
        },
        "preco":1.3,
        "precoFormatado":"R$ 1,30"
     },
     {
        "estabelecimento":{
          "quantidade": 0,
          "localizacao": "Não sei",
          "avaliacao": 3,
           "id":1,
           "nome":"Angeloni Ingleses",
           "cnpj":"11111111111111",
           "email":"angeloniingleses@angeloni.com.br",
           "telefone":"1111111111",
           "logoMarca":null,
           "valorEntrega":5.0,
           "tempoEntrega":"00:30",
           "aceitaAgendamento":true
        },
        "preco":1.2,
        "precoFormatado":"R$ 1,20"
     },
     {
        "estabelecimento":{
          "quantidade": 0,
          "localizacao": "Não sei",
          "avaliacao": 3,
           "id":8,
           "nome":"Angeloni - Site",
           "cnpj":"11111111111112",
           "email":"angelonisite@angeloni.com.br",
           "telefone":"1111111112",
           "logoMarca":null,
           "valorEntrega":5.0,
           "tempoEntrega":"00:30",
           "aceitaAgendamento":true
        },
        "preco":1.8,
        "precoFormatado":"R$ 1,80"
     },
     {
        "estabelecimento":{
          "quantidade": 0,
          "localizacao": "Não sei",
          "avaliacao": 3,
           "id":5,
           "nome":"Big Iguatemi",
           "cnpj":"55555555555555",
           "email":"bigiguatemi@big.com.br",
           "telefone":"5555555555",
           "logoMarca":null,
           "valorEntrega":4.0,
           "tempoEntrega":"00:30",
           "aceitaAgendamento":true
        },
        "preco":1.1,
        "precoFormatado":"R$ 1,10"
     },
     {
        "estabelecimento":{
          "quantidade": 0,
          "localizacao": "Não sei",
          "avaliacao": 3,
           "id":6,
           "nome":"Big Via Expressa",
           "cnpj":"66666666666666",
           "email":"bigiguatemi@big.com.br",
           "telefone":"6666666666",
           "logoMarca":null,
           "valorEntrega":4.0,
           "tempoEntrega":"00:30",
           "aceitaAgendamento":true
        },
        "preco":1.0,
        "precoFormatado":"R$ 1,00",
        "melhorPreco": true
     },
     {
        "estabelecimento":{
          "quantidade": 0,
          "localizacao": "Não sei",
          "avaliacao": 3,
           "id":7,
           "nome":"Bistek Pantanal",
           "cnpj":"77777777777777",
           "email":"bistekpantanal@bistek.com.br",
           "telefone":"7777777777",
           "logoMarca":null,
           "valorEntrega":5.0,
           "tempoEntrega":"00:30",
           "aceitaAgendamento":true
        },
        "preco":1.25,
        "precoFormatado":"R$ 1,25"
     },
     {
        "estabelecimento":{
          "quantidade": 0,
          "localizacao": "Não sei",
          "avaliacao": 3,
           "id":3,
           "nome":"Imperatriz Canasvieiras",
           "cnpj":"33333333333333",
           "email":"imperatrizcanasvieiras@imperatriz.com.br",
           "telefone":"3333333333",
           "logoMarca":null,
           "valorEntrega":8.0,
           "tempoEntrega":"00:30",
           "aceitaAgendamento":true
        },
        "preco":1.4,
        "precoFormatado":"R$ 1,40"
     },
     {
        "estabelecimento":{
          "quantidade": 0,
          "localizacao": "Não sei",
          "avaliacao": 3,
           "id":4,
           "nome":"Imperatriz Jurerê",
           "cnpj":"44444444444444",
           "email":"imperatrizjurere@imperatriz.com.br",
           "telefone":"4444444444",
           "logoMarca":null,
           "valorEntrega":8.0,
           "tempoEntrega":"00:30",
           "aceitaAgendamento":true
        },
        "preco":1.75,
        "precoFormatado":"R$ 1,75"
     }
  ]
}
  produtos['produto-2'] = produto_2
const produto_4 = {
    "produto":{
       "id":4,
       "descricao":"Biscoito Sortidos Casaredo",
       "urlImagem":"casaredo_sortido_thumb.jpg",
       "informacaoNutricional":null,
       "informacoesAdicionais":null,
       "marca":{
          "id":2,
          "descricao":"Casaredo"
       },
       "genero":{
          "id":20,
          "descricao":"Biscoitos",
          "generoPai":{
             "id":2,
             "descricao":"Lanche",
             "generoPai":null,
             "filhos":[

             ]
          },
          "filhos":[

          ]
       }
    },
    "precos":[
       {
          "estabelecimento":{
            "quantidade": 0,
            "localizacao": "Não sei",
            "avaliacao": 3,
             "id":2,
             "nome":"Angeloni Centro",
             "cnpj":"22222222222222",
             "email":"angelonicentro@angeloni.com.br",
             "telefone":"2222222222",
             "logoMarca":null,
             "valorEntrega":5.0,
             "tempoEntrega":"00:30",
             "aceitaAgendamento":true
          },
          "preco":3.1,
          "precoFormatado":"R$ 3,10"
       },
       {
          "estabelecimento":{
            "quantidade": 0,
            "localizacao": "Não sei",
            "avaliacao": 3,
             "id":1,
             "nome":"Angeloni Ingleses",
             "cnpj":"11111111111111",
             "email":"angeloniingleses@angeloni.com.br",
             "telefone":"1111111111",
             "logoMarca":null,
             "valorEntrega":5.0,
             "tempoEntrega":"00:30",
             "aceitaAgendamento":true
          },
          "preco":3.0,
          "precoFormatado":"R$ 3,00"
       },
       {
          "estabelecimento":{
            "quantidade": 0,
            "localizacao": "Não sei",
            "avaliacao": 3,
             "id":5,
             "nome":"Big Iguatemi",
             "cnpj":"55555555555555",
             "email":"bigiguatemi@big.com.br",
             "telefone":"5555555555",
             "logoMarca":null,
             "valorEntrega":4.0,
             "tempoEntrega":"00:30",
             "aceitaAgendamento":true
          },
          "preco":2.8,
          "precoFormatado":"R$ 2,80"
       },
       {
          "estabelecimento":{
            "quantidade": 0,
            "localizacao": "Não sei",
            "avaliacao": 3,
             "id":6,
             "nome":"Big Via Expressa",
             "cnpj":"66666666666666",
             "email":"bigiguatemi@big.com.br",
             "telefone":"6666666666",
             "logoMarca":null,
             "valorEntrega":4.0,
             "tempoEntrega":"00:30",
             "aceitaAgendamento":true
          },
          "preco":2.5,
          "precoFormatado":"R$ 2,50",
          "melhorPreco": true
       },
       {
          "estabelecimento":{
            "quantidade": 0,
            "localizacao": "Não sei",
            "avaliacao": 3,
             "id":7,
             "nome":"Bistek Pantanal",
             "cnpj":"77777777777777",
             "email":"bistekpantanal@bistek.com.br",
             "telefone":"7777777777",
             "logoMarca":null,
             "valorEntrega":5.0,
             "tempoEntrega":"00:30",
             "aceitaAgendamento":true
          },
          "preco":2.9,
          "precoFormatado":"R$ 2,90"
       },
       {
          "estabelecimento":{
            "quantidade": 0,
            "localizacao": "Não sei",
            "avaliacao": 3,
             "id":3,
             "nome":"Imperatriz Canasvieiras",
             "cnpj":"33333333333333",
             "email":"imperatrizcanasvieiras@imperatriz.com.br",
             "telefone":"3333333333",
             "logoMarca":null,
             "valorEntrega":8.0,
             "tempoEntrega":"00:30",
             "aceitaAgendamento":true
          },
          "preco":3.5,
          "precoFormatado":"R$ 3,50"
       },
       {
          "estabelecimento":{
            "quantidade": 0,
            "localizacao": "Não sei",
            "avaliacao": 3,
             "id":4,
             "nome":"Imperatriz Jurerê",
             "cnpj":"44444444444444",
             "email":"imperatrizjurere@imperatriz.com.br",
             "telefone":"4444444444",
             "logoMarca":null,
             "valorEntrega":8.0,
             "tempoEntrega":"00:30",
             "aceitaAgendamento":true
          },
          "preco":3.8,
          "precoFormatado":"R$ 3,80"
       }
    ]
  };
  produtos['produto-4'] = produto_4
const produto_9 = {
    "produto":{
       "id":9,
       "descricao":"Biscoito Wafer Marillan Chocolate",
       "urlImagem":"marilan_wafer_chocolate.jpg",
       "informacaoNutricional":"",
       "informacoesAdicionais":"",
       "marca":{
          "id":12,
          "descricao":"Marillan"
       },
       "genero":{
          "id":20,
          "descricao":"Biscoitos",
          "generoPai":{
             "id":2,
             "descricao":"Lanche",
             "generoPai":null,
             "filhos":[

             ]
          },
          "filhos":[

          ]
       }
    },
    "precos":[
       {
          "estabelecimento":{
            "quantidade": 0,
            "localizacao": "Não sei",
            "avaliacao": 3,
             "id":8,
             "nome":"Angeloni - Site",
             "cnpj":"11111111111112",
             "email":"angelonisite@angeloni.com.br",
             "telefone":"1111111112",
             "logoMarca":null,
             "valorEntrega":5.0,
             "tempoEntrega":"00:30",
             "aceitaAgendamento":true
          },
          "preco":1.85,
          "precoFormatado":"R$ 1,85",
          "melhorPreco": true
       }
    ]
  }
  produtos['produto-9'] = produto_9
const produto_11 = {
    "produto":{
       "id":11,
       "descricao":"Biscoito Wafer Marillan Limão",
       "urlImagem":"marilan_wafer_limao.jpg",
       "informacaoNutricional":"",
       "informacoesAdicionais":"",
       "marca":{
          "id":12,
          "descricao":"Marillan"
       },
       "genero":{
          "id":20,
          "descricao":"Biscoitos",
          "generoPai":{
             "id":2,
             "descricao":"Lanche",
             "generoPai":null,
             "filhos":[

             ]
          },
          "filhos":[

          ]
       }
    },
    "precos":[
       {
          "estabelecimento":{
            "quantidade": 0,
            "localizacao": "Não sei",
            "avaliacao": 3,
             "id":8,
             "nome":"Angeloni - Site",
             "cnpj":"11111111111112",
             "email":"angelonisite@angeloni.com.br",
             "telefone":"1111111112",
             "logoMarca":null,
             "valorEntrega":5.0,
             "tempoEntrega":"00:30",
             "aceitaAgendamento":true
          },
          "preco":1.85,
          "precoFormatado":"R$ 1,85",
          "melhorPreco": true
       }
    ]
  }
  produtos['produto-11'] = produto_11


  res.json(produtos);
});


router.get('/cep/:cep', (req, res) => {
  const end = {"resultado":"1","resultado_txt":"sucesso - cep completo","uf":"SP","cidade":"Jandira","bairro":"Jardim Rosa Em\u00edlia","logradouro":"Rua Maria Aparecida Pedrosa"}
  res.json(end)
})

router.post('/cep', (req, res) => {
  res.json(produstosIniciais)
})

module.exports = router;
