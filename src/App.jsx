import {useState, createContext} from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import Feature from './component/Feature'
import Limitation from './component/Limitation'

const ThemeContext = createContext()

export default function App() {

  // State value

  //static value

  // derive value

  // functions
 


  return (
    <ThemeContext.Provider value={{}}>
      <main className='relative w-full h-screen'>
        <Header />
        <Hero />
        <Feature />
        <Limitation />
      </main>
    </ThemeContext.Provider>

  )
}

export {ThemeContext}

