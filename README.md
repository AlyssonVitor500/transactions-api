# Transaction API

API simples para guardar transações de crédito/débito por usuário.

Ao realizar primeira requisição para a API, a mesma setará um COOKIE que identificará as transações de cada usuário, que podem ser acessadas posteriormente.

# Deploy URL
 - https://transactions-api-4ts8.onrender.com/

# Rotas
#### POST /transactions
Rota responsável por criar uma nova transação. Caso seja a primeira requisição do usuário, a aplicação criará um COOKIE de identificação.

 - Body Example
  ```json
    {
    	"title": "Transaction",
    	"amount": 50000,
    	"type": "credit"
    }    
```
```json
    {
    	"title": "Transaction",
    	"amount": 50000,
    	"type": "debit"
    }    
```

#### GET /transactions
Rota responsável por listar todas as trasanções do usuário identificado pelo COOKIE.
