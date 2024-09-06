# API de Produtos - Wishlist

Esta é uma API para gerenciamento de produtos, utilizada em uma aplicação de Wishlist. A API permite listar produtos e foi desenvolvida utilizando NestJS com PostgreSQL como banco de dados.

## Funcionalidades

- **Listar produtos:** Endpoint que retorna todos os produtos disponíveis.
- **Gerenciamento de produtos:** A API está preparada para futuras expansões como criação, atualização e remoção de produtos.

## Tecnologias Utilizadas

- NestJS: Framework Node.js para a construção da API.
- TypeORM: ORM para gerenciar o banco de dados PostgreSQL.
- Supabase + PostgreSQL: Banco de dados utilizado para armazenar os produtos.
- Render: Hospedagem da API.

## Endpoints

### GET /products

- **Descrição:** Retorna a lista de produtos disponíveis.
- **Exemplo de resposta:**

```json
[
  {
    "id": 1,
    "code": "P001",
    "name": "Produto 1",
    "available": true,
    "fullPriceInCents": "10000",
    "salePriceInCents": "9000",
    "rating": 4,
    "image": "url-da-imagem",
    "stockAvailable": true
  },
  {
    "id": 2,
    "code": "P002",
    "name": "Produto 2",
    "available": true,
    "fullPriceInCents": "15000",
    "salePriceInCents": "13000",
    "rating": 3.5,
    "image": "url-da-imagem",
    "stockAvailable": true
  }
]
```

## Instalação

1. Clone o repositório para a sua máquina local:

   ```bash
    cd wishlist-back
    npm install
    yarn install

   ```
2. Configure as variáveis de ambiente:

```
Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente conforme arquivo de env.example
```
3. Execute o servidor de desenvolvimento:

   ```bash
   npm run start:dev
   ```

## Estrutura do Projeto

```bash
  ├── src
  │   ├── products        # Módulo de produtos, contendo controller, service e entity
  │   ├── app.module.ts   # Módulo principal da aplicação
  │   ├── main.ts         # Ponto de entrada da aplicação
  ├── tests                 # Testes unitários e de integração
  ├── package.json          # Configurações e dependências do projeto
  └── README.md             # Instruções do projeto
```

## Melhorias Futuras

- Autenticação: Adicionar autenticação JWT para proteger endpoints sensíveis.
- Operações CRUD: Implementar criação, atualização e remoção de produtos.
- Paginação: Adicionar paginação nos endpoints que retornam listas de produtos.
