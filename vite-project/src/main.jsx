import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';

const anotherElement = (
  <a href = "https://google.com" target='_blank'> Karan Google </a>

)
const reactElement= React.createElement(
  'a',
{href:'https://google.com',target:'_blank'},
 'Click the fuck here to visit google'
)
const username="karan";
ReactDOM.createRoot(document.getElementById('root')).render(
  
    //reactElement {username}
    <App/>
)
