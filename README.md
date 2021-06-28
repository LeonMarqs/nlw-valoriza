# NLW 6 - Valoriza - NodeJS

## Sobre
Aplicação back-end feita com NodeJs e TypeORM que faz o cadastro e listagem de usuários, elogios e tags, a fim das pessoas mandarem elogios umas para as outras.

# Tecnologias utilizadas
* [NodeJS](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Typescript](https://www.typescriptlang.org/)
* [TypeORM](https://typeorm.io/#/)

# Rodar a aplicação
* Clone o repositório
* Instale as dependências através do `yarn install` ou `npm install`
* Rode `yarn dev` ou `npm run dev` 
* Utilize o [Insomnia](https://insomnia.rest/) ou outra aplicação de sua preferência para testar as rotas e os métodos HTTP.

# Regras para cadastros

- Cadastro de Usuário
  - Não é permitido cadastrar mais de um usuário com o mesmo e-mail.
  - Não é permitido cadastrar usuário sem e-mail.

- Cadastro de Tag
  - Não é permitido cadastrar tag sem nome.
  - Não é permitido cadastrar mais de uma tag com o mesmo nome.
  - Não é permitido o cadastro por usuários que não sejam administradores.

- Cadastro de Elogios
  - Não é permitido um usuário cadastrar um elogio para si.
  - Não é permitido cadastrar elogios para usuários inválidos.
  - O usuário precisa estar autenticado na aplicação.

# Ideias para melhoria
- Envio de e-mail ao enviar um elogio para alguém.
- Colocar em produção.
- Criar um front-end.
- Trocar o banco de dados.

# Contato
[LinkedIn](https://www.linkedin.com/in/leonardo-marques-ti/) 
