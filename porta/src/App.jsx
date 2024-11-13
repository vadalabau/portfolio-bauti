import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import javaImage from 'C:/Users/shpctac100d4/Desktop/bauti/porta/src/img/java.png' // Importing the Java image
import javaScriptImage from 'C:/Users/shpctac100d4/Desktop/bauti/porta/src/img/javaScript.png'
import cssImage from 'C:/Users/shpctac100d4/Desktop/bauti/porta/src/img/css.png'
import htmlImage from 'C:/Users/shpctac100d4/Desktop/bauti/porta/src/img/html.png'
import sqlImage from 'C:/Users/shpctac100d4/Desktop/bauti/porta/src/img/sql.png'
import pythonImage from 'C:/Users/shpctac100d4/Desktop/bauti/porta/src/img/python.png'
import nodeImage from 'C:/Users/shpctac100d4/Desktop/bauti/porta/src/img/node.png'
import axiosImage from 'C:/Users/shpctac100d4/Desktop/bauti/porta/src/img/axios.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Portfolio</h1>
      <h3>Sobre mi</h3>

      <div className='card'>   
        <p>
          Soy un desarrollador que programa de forma cuestionable,
          tengo 18 años, apunto a ser full stack y evolucionar en la industria
          ganando experiencia. 
        </p>
      </div>
  
      <h3>Tecnologias</h3>
    
      <div className="logo">
        <img src={javaImage} alt="Java" className="java-img"/>
        <img src={javaScriptImage} alt="Javascript" className="js-img"/>
        <img src={cssImage} alt="CSS" className='css-img'/>
        <img src={htmlImage} alt="HTML" className='html-img'/>
        <img src={sqlImage} alt="SQL" className='sql-img' />
        <img src={pythonImage} alt="Python" className='python-img'/>
        <img src={nodeImage} alt="Node" className='node-img'/>
        <img src={axiosImage} alt="Axios" className='axios-img'/>
      </div>

      <h3>Proyectos</h3>

    </>
  )
}

export default App