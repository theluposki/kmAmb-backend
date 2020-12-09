# kmAmb-backend

### Instalação

```bash
   # Clone este repositório
   $ git clone https://github.com/theluposki/kmAmb-backend.git

   # Acesse a pasta do projeto no terminal/cmd
   $ cd kmAmb-backend/
   
   # Instale as dependências
   $ npm install

```
### Configurações

  é necessario configura o arquivo ```.env```

  ```bash
    # Edite o arquivo na raiz do projeto .env com seu editor. 
    $ nano .env
  ```

  demonstração

  ![.env](readme-files/imgEnv.png)

  altere as variaveis de ambiente.

   variavel de ambiente do mongo > `DB_HOST=mongodb://localhost:27017/nomedobanco`

  agora altere o arquivo de configuração do token

  ```bash
    # Acesse a pasta
    $ cd src/config/auth.json

    # Edite o arquivo
    $ nano auth.json
  ```

  coloque uma chave segura da sua preferência 

  ```json
    {
        "secret":"superSecreto"
    }
  ```

  agora volte para o inicio do projeto `kmAmb-backend/` e é só rodar.

  ```bash
    # Execute a aplicação
    $ npm start
    # app running http://localhost:3000

  ```

  ![.env](readme-files/npmstart.png)


### Documentação

<b>Buscar</b>
    Para buscar todos os usuários basta fazer uma requisição do tipo `GET` nesse endpoint.

  ```bash
      /users
  ```
  se tudo estiver correto recebera um json devolvendo os usuários.

  ```json
      {
        "users": [
            {
            "_id": "5fceb3c222dr0ec7f550c9c4cec4",
            "nome": "João",
            "cnh": "123456789011",
            "vencimentoCnh": "25/05/2021",
            "matricula": "12345",
            "email": "joao@mail.com",
            "createDateAt": "06/12/2020",
            "createTimeAt": "23:10",
            "__v": 0
            },
                        {
            "_id": "5ffwfceb3c222dr0ec7f550c9c4cec4",
            "nome": "Maria",
            "cnh": "123456789011",
            "vencimentoCnh": "25/05/2021",
            "matricula": "12345",
            "email": "mary@mail.com",
            "createDateAt": "05/12/2020",
            "createTimeAt": "23:10",
            "__v": 0
            }
        ]
      }
  ``` 

<b>Buscar um usuário por id</b>
    Para buscar um usuário basta fazer uma requisição do tipo `GET` nesse endpoint passando o id como parametro.

  ```bash
      /user/<id>
  ```
    se tudo estiver correto recebera um json devolvendo o usuário.

  ```json
    {
        "user": {
            "_id": "5fcf1b0690a4a6asjkkaw28367566f65",
            "nome": "Bianca de Alcantra da silva",
            "cnh": "123456789011",
            "vencimentoCnh": "25/05/2022",
            "matricula": "123456",
            "email": "bia@mail.com",
            "createDateAt": "06/12/2020",
            "createTimeAt": "05:35",
            "__v": 0
        }
    }
  ``` 

<b>Registrar um usuário</b>
    Para registrar um usuário basta fazer uma requisição do tipo `POST` nesse endpoint.

  ```bash
      /user/register
  ```
  enviando o seguinte json no body

  ```json
    {
        "nome":"Bianca de Alcantra",
        "cnh":"123456789011",
        "vencimentoCnh":"25/05/2022",
        "matricula":"123456",
        "email":"bia@mail.com",
        "password":"12345678910",
        "createDateAt":"06/12/2020",
        "createTimeAt":"05:35"
    }
  ``` 

  se tudo estiver correto recebera um json devolvendo o usuário criado.

  ```json
    {
        "user": {
            "_id": "5fcf1b0690a4a6asjkkaw28367566f65",
            "nome": "Bianca de Alcantra",
            "cnh": "123456789011",
            "vencimentoCnh": "25/05/2022",
            "matricula": "123456",
            "email": "bia@mail.com",
            "password": "$2a$10$44rGF1g5.a5r28fhMb5pmuYHdq6M.w.1YKlpjEx71rDtbEhDPCci6",
            "createDateAt": "06/12/2020",
            "createTimeAt": "05:35",
            "__v": 0
        }
    }
  ``` 



<b>Autenticar usuário</b>
    Para Autenticar um usuário basta fazer uma requisição do tipo `POST` nesse endpoint.

  ```bash
      /user/auth
  ```
  enviando o seguinte json no body

  ```json
    {
        "email":"bia@mail.com",
        "password":"12345678910"
    }
  ``` 

  se tudo estiver correto recebera um json devolvendo o usuário autenticado.

  ```json
    {
        "user": {
            "user": {
            "_id": "5fcf1b0690a4a6asjkkaw28367566f65",
            "nome": "Bianca de Alcantra",
            "cnh": "123456789011",
            "vencimentoCnh": "25/05/2022",
            "matricula": "123456",
            "email": "bia@mail.com",
            "password": "$2a$10$44rGF1g5.a5r28fhMb5pmuYHdq6M.w.1YKlpjEx71rDtbEhDPCci6",
            "createDateAt": "06/12/2020",
            "createTimeAt": "05:35",
            "__v": 0
            },
            "token": "eyJhbGsdsciOiJIUzI1NiIsInR5cCI6Ikpad34XVCJ9.eyJpZCI6IjVmY2YxYjA2OTBhNGE2OasdDM2NzU2NmY2NSIsasdImlhdCI6MTYwNzQwasdODgwMiwiZXhwadIjoxad346NjA3NDk1MjAyfQ.u6hslp7BuoxZJssxHeOO_SMdOCYWjo8tkXeE8oXp92OEo"
        }
    }
  ``` 

  <b>Atualizar usuário</b>
    Para Atualizar um usuário basta fazer uma requisição do tipo `PUT` nesse endpoint passando o id como parametro.

  ```bash
      /user/update/<id>
  ```
  enviando o seguinte json no body

  ```json
    {
        "nome": "Bianca de Alcantra da silva",
        "cnh": "123456789011",
        "vencimentoCnh": "25/05/2022",
        "matricula": "123456"
    }
  ``` 

  se tudo estiver correto recebera um json devolvendo o usuário atualizado.

  ```json
    {
        "user": {
            "_id": "5fcf1b0690a4a6asjkkaw28367566f65",
            "nome": "Bianca de Alcantra",
            "cnh": "123456789011",
            "vencimentoCnh": "25/05/2022",
            "matricula": "123456",
            "email": "bia@mail.com",
            "createDateAt": "06/12/2020",
            "createTimeAt": "05:35",
            "__v": 0
        }
    }
  ``` 

<b>Deletar usuário</b>
    Para Deletar um usuário basta fazer uma requisição do tipo `DELETE` nesse endpoint passando o id como parametro.

  ```bash
      /user/delete/<id>
  ```
  se tudo estiver correto recebera um json devolvendo uma mensagem.

  ```json
    {
        "message": "Deletado com sucesso."
    }
  ```

#### Rotas do controle de serviço

<b>Buscar todos os serviços</b>
    Para buscar todos os serviços basta fazer uma requisição do tipo `GET` nesse endpoint.

  ```bash
      /controlKM
  ```
  se tudo estiver correto recebera um json devolvendo os serviços.

  ```json
    {
      "services": [
        {
          "_id": "5fcf2f9da90dfasqw94210cd936",
          "motorista": {
            "id": "5fcf1b0690a4a6asjkkaw28367566f65",
            "nome": "Bianca de Alcantra da silva",
            "cnh": "123456789011",
            "vencimentoCnh": "25/05/2022",
            "matricula": "123456"
          },
          "hrEmitido": "04:45",
          "dtEmitido": "06/12/2020",
          "prefixo": "659",
          "kmEntrada": "123400",
          "kmSaida": "123550",
          "hPerSaida": "04:45",
          "hCarregamento": "04:45",
          "hFechamentoNF": "04:45",
          "hPerVolta": "04:45",
          "hDescarregamento": "04:45",
          "hFechamentoTicket": "04:45",
          "__v": 0
        },
        {
          "_id": "5fcf2f9da90dfasqw94210cd936",
          "motorista": {
            "id": "5fcf1b0690a4a6asjkkaw28367566f65",
            "nome": "Bianca de Alcantra da silva",
            "cnh": "123456789011",
            "vencimentoCnh": "25/05/2022",
            "matricula": "123456"
          },
          "hrEmitido": "04:45",
          "dtEmitido": "06/12/2020",
          "prefixo": "651",
          "kmEntrada": "123550",
          "kmSaida": "123650",
          "hPerSaida": "04:45",
          "hCarregamento": "04:45",
          "hFechamentoNF": "04:45",
          "hPerVolta": "04:45",
          "hDescarregamento": "04:45",
          "hFechamentoTicket": "04:45",
          "__v": 0
        }
      ]
    }
  ``` 

<b>Registrar um serviço</b>
    Para registrar um serviço basta fazer uma requisição do tipo `POST` nesse endpoint.

  ```bash
      /controlKM
  ```
  enviando o seguinte json no body

  ```json
    {
        "motorista": {
            "id": "5fcf1b0690a4a6asjkkaw28367566f65",
            "nome": "Bianca de Alcantra da silva",
            "cnh": "123456789011",
            "vencimentoCnh": "25/05/2022",
            "matricula": "123456"
        },
        "hrEmitido": "04:45",
        "dtEmitido": "06/12/2020",

        "prefixo": "651",
        "kmEntrada": "123550",
        "kmSaida": "123650",
        "hPerSaida": "04:45",
        "hCarregamento": "04:45",
        "hFechamentoNF": "04:45",
        "hPerVolta": "04:45",
        "hDescarregamento": "04:45",
        "hFechamentoTicket": "04:45"
    }
  ``` 

  se tudo estiver correto recebera um json devolvendo o usuário criado.

  ```json
    {
      "service": {
        "_id": "5fd0b42458c4bf1f73912475",
        "motorista": {
          "id": "5fcf1b0690a4a6asjkkaw28367566f65",
          "nome": "Bianca de Alcantra da silva",
          "cnh": "123456789011",
          "vencimentoCnh": "25/05/2022",
          "matricula": "123456"
        },
        "hrEmitido": "04:45",
        "dtEmitido": "06/12/2020",
        "prefixo": "651",
        "kmEntrada": "123550",
        "kmSaida": "123650",
        "hPerSaida": "04:45",
        "hCarregamento": "04:45",
        "hFechamentoNF": "04:45",
        "hPerVolta": "04:45",
        "hDescarregamento": "04:45",
        "hFechamentoTicket": "04:45",
        "__v": 0
      }
    }
  ``` 

  <b>Atualizar um serviço</b>
    Para Atualizar um serviço basta fazer uma requisição do tipo `PUT` nesse endpoint passando o id como parametro.

  ```bash
      /controlKM/update/<id>
  ```
  enviando o seguinte json no body
  
  ```json
    {
        "prefixo": "659",
        "kmEntrada": "123400",
        "kmSaida": "123550",
        "hPerSaida": "04:45",
        "hCarregamento": "04:45",
        "hFechamentoNF": "04:45",
        "hPerVolta": "04:45",
        "hDescarregamento": "04:45",
        "hFechamentoTicket": "04:45"
    }

  ``` 

<b>Deletar um serviço</b>
    Para Deletar um serviço basta fazer uma requisição do tipo `DELETE` nesse endpoint passando o id como parametro.

  ```bash
      /controlKM/delete/<id>
  ```
  se tudo estiver correto recebera um json devolvendo uma mensagem.

  ```json
    {
        "message": "Deletado com sucesso."
    }
  ```