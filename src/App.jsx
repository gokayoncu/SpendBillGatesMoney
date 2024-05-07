import Header from './component/header'
import Section from './component/section'
import './App.css'
import {products} from './component/data.jsx'

function App() {
  
  

  return (
    <>
      <Header/>     
      <Section products={products}  />
    </>
  )
}

export default App
