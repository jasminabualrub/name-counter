
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useState} from 'react'
import  style from './style.module.css'
function App() {
  let [count,setCount]=useState(0);
  const changeCounter=()=>{
    setCount(count+1);
console.log('knfjkekk')
  }
 return(
  
  <>
  <button className={style.bg} onClick={changeCounter}>JasminAbuAl-rub({count})</button></>

 );
}

export default App
