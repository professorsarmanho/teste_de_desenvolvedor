# API, REST e RESTFUL

# API
Cliente
Garçon (pedidos, levar seus pedidos, para a cozinha)
Cozinha (Server)

Acronimo de Aplication Programming Interface (Interface de Programação de Aplicações) é basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, pra que outras aplicações possam utilizar as funcionalidades desta aplicação.

- Responsável por estabelecer comunicação entre diferentes serviços.
- Meio de campo entre as tecnologias.
- Intermediador para troca de informações.

# REST

um acrônimo para REpresentational State Transfer (
Transferência de Estado Representativo).

Será feita a transferência de dados de uma maneira simbólica,
figurativa, representativa, de maneira didática.

A transferência de dados, geralmente, usando o protocolo HTTP.

Resources seria então, uma entidade, um objeto.

### 6 NECESSIDADES (constraints) para ser RESTful

## RESTFUL

RESTful, é a aplicação dos padrões REST.

## BOAS PRÁTICAS 
- Utilizar verbos HTTP para as requisições
- Não utilizar barras "/" no final do endpoint
- Nome de Endpoint, utilizar um padrão que precisa ser utilizado em todo o projeto.

### Verbos HTTP

- get --> receber dados de um Resource (clients).
- post --> Enviar dados ou informações para serem rocessados por um resource
- put --> Atualizar dos dados de um Resource (clients).
- delete --> Deletar um Resource (clients).


### 6 NECESSIDADES (constraints) para ser RESTful

- _Client-server_: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma
portabilidade do nosso sistema, usando o React para WEB e Reacte Native para o smartphone, por exemplo.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior, nos nossos cursos, temos por padrão usar tokens para as comunicações.

- _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizes se aquela requisição, pode ou não ser chaceada pelo cliente.

- _Layered System_: O cliente acessa a um endpoint, sem precisar saber de complexidade, de quais estão sendo necessários para o servidor responder a requisição, para que a requisição seja respondida.

- _Code on demand (optional)_: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.


Vamos utilizar na posta do projeto o comando:

comando: yarn init -y
- Cria um package JSON deixando informações do projeto.

Para criar o nosso seridor utiliremos a dependência express no projeto.
comando: yarn add express
Observação: será criada uma pasta node_modules 

Passos:

_1._: Criar o arquivo server.js, que é aonde nós vamos começar a criar a nossa API
a. vamos começar chamando o express 
b. instanciar o express com a variável app.
c. para iniciar o nosso servidor o método listen no objeto app para dar um inicializada no nosso servidor web.
