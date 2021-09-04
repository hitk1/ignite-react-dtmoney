import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './styles/global';
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance app mobile',
          transactionType: 'deposit',
          category: 'Dev',
          amount: 5500,
          createdAt: new Date('2021-09-01 12:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          transactionType: 'withdraw',
          category: 'Casa',
          amount: 1350,
          createdAt: new Date('2021-09-03 12:00:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', {
        ...data,
        createdAt: new Date()
      })
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
