import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Comp1 from './App.jsx';
import MyClassComponent from './Class.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello how are you</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est suscipit temporibus in, dolore, natus eveniet aliquid id corrupti quia repellendus nostrum placeat ea, architecto atque asperiores doloremque inventore quae voluptatum?</p>
    <Comp1/>
    <MyClassComponent name="drpaul"/>
  </StrictMode>,
)
