import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  
    <h3>Hello World</h3>
    <div class="card">
    <p>This is a dummy app needed to generate a Trello API key</p>
      
    </div>
 
  </div>
`

setupCounter(document.querySelector('#counter'))
