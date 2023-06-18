import React from 'react'
import { ReactDOM } from 'react'
import dp from './assets/asabeneh.jpg'
import html from './assets/html_logo.png'
import css from './assets/css_logo.png'
import js from './assets/js_logo.png'
import react from './assets/react_logo.png'
import './App.css'
// import HexColor from './HexColor'


function App() {
  // const [count, setCount] = useState(0)
  
   


  const Frontend = () =>{
    return(
      <div>
          <h3>FrontEnd Technologies</h3>
         <div className='images'>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={react} alt="" />
         </div> 
      </div>
    )
    }


    const Subscribe = () =>{
      return(
        <div className='subscribe'>
          <h1>SUBSCRIBE</h1>
          <p>Sign up with yout email address to receive news and updates</p>
          <div className='inputs'>
             <input type="text" placeholder='First Name' />
             <input type="text" placeholder='Last Name' />
             <input type="text" placeholder='Email' />
          </div>
          <button className='btn'>Subscribe</button>
        </div>
      )
    }

  
   const Hexcolor = () =>{
    return (
      <div className='colors'>
        <div style={{backgroundColor: '#518cef'}}>#518cef</div>
        <div style={{backgroundColor: '#3b10c4'}}>#3b10c4</div>
        <div style={{backgroundColor: '#9aede6'}}>#9aede6</div>
        <div style={{backgroundColor: '#8ee763'}}>#8ee763</div>
        <div style={{backgroundColor: '#a30dd0'}}>#a30dd0</div>
      </div>
    )
  }

  const Profile = ()=>{
    return ( 
      <div className='profile'>
        <img src={dp} alt="" />
        <h3>ASABENEH YETAYEH</h3>
        <p>Senior Developer , Finland</p>
         <Skills />
        <p>Joined on Aug 30 , 2020</p>

      </div>
    )
  }


  

  const Skills = () =>{
    return(
      

      <div className='skill-head'>
         <h3>SKILLS</h3>
         <div className='skills'>
           <div className='skill'>HTML</div>
           <div className='skill'>CSS</div>
           <div className='skill'>Sass</div>
           <div className='skill'>JS</div>
           <div className='skill'>React</div>
           <div className='skill'>Redux</div>
           <div className='skill'>Node</div>
           <div className='skill'>MongoDB</div>
           <div className='skill' >Python</div>
           <div className='skill' >Flask</div>
           <div className='skill'>Django</div>
           <div className='skill'>Numpy</div>
           <div className='skill'>Pandas</div>
           <div className='skill'>Data-Analysis</div>
           <div className='skill'>MYSQL</div>
           <div className='skill'>GraphQL</div>
           <div className='skill '>D3.js</div>
           <div className='skill' >Gatsby</div>
           <div className='skill'>Docker</div>
           <div className='skill'>Heroku</div>
           <div className='skill'>Git</div>
         </div>
      </div>
    )
    }

  return (
    <>
      <Frontend/>
      <Subscribe />
      <Hexcolor />
      <Profile />
       
    </>
  )
}

export default App
