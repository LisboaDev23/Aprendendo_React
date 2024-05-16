import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import './global.css';

import { PI as numeroPi, GTM_BRASIL } from './teste.js' //importando variáveis de outros arquivos sem ser default
import NOMES from './nomes.js' //importando de outro arquivo de forma default

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <App/>
  </React.StrictMode>,
)
