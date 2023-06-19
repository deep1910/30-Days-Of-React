import React from 'react'
import './App.css'





const NumberBoxes = () =>{
    let arr = []
    for(let i=0; i< 32; i++){
        arr[i] = i;          
    } 

    let numlist = arr.map((eacharr)=> <NumberBox num={eacharr} key={Math.random(10000)} />)

    return(

       <div className='numlist'>{numlist}</div>
    )
  } 



const NumberBox = ({num }) =>{
  function isPrime(number) {
  if (number <= 1) {
    return false; // 0 and 1 are not prime numbers
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Found a divisor, not a prime number
    }
  }

  return true; // No divisors found, it is a prime number
}

  
  let color = ""

    if (num %2 ==0){
      color = "green"
    }else{
      color = "yelow"
    }

    color  = isPrime(num) ? "red" :  (num %2 == 0) ? "green" : "yellow"
  return(
     <div className= {"numbox  " + color}>{num}</div>
  )
}

///////////////////////////////////////////////////////////////////////////////////////////////

const ColorBoxes = () => {
   let hexvalue  = "0123456789abcdef"
   let colors = []
  for(let  a = 0; a < 32 ;a ++){ 
    colors[a] = "#"
   for(let i =0 ;i< 6; i++){
     let random =  Math.floor(Math.random() * hexvalue.length)
    //  console.log(hexvalue.length)         
    
     colors[a] += hexvalue[random]
    
    }
  }

  let colorslist =  colors.map((color) => <ColorBox color={color} key= {Math.random(100)} />)

   return (
     <div className='colorlist'>{colorslist}</div>
   )
}


const colorcheck = (color) =>{
   return {backgroundColor : color};
}


const ColorBox =({color}) =>{
  colorcheck(color)
  return (
     <div className='color' style={colorcheck(color)} >{color}</div>  
  )
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'USA', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russia', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]


// const PopuGraph = ({numpopu}) =>{
  
//   const population = numpopu.map((countrypopulation) =>{

//     // console.log(countrypopulation.country, countrypopulation.population);
//     <Country key={countrypopulation.population} country={countrypopulation.country} population={countrypopulation.population} />
//   }) 
   
 
//   return (
//      <div>{population}</div>
//   )
//   }



// const Country = ({country, population}) =>{
//   let worldpopulation =  7693165599 ;

//   let percent = Math.floor(population / worldpopulation * 100)
//     //  console.log(percent)

//   return(
//     <div>
//       <h4>{country}</h4>
//       <div>
//          <div>hi</div>
//       </div>
//       <div >{population}</div>
//     </div>
//   )
// }

// const Country = ({country, population}) =>{
//   return (
//    <div>
//      <div>{country}</div>
//    </div> 

//   )
// }
const PopuGraph = ({numpopu}) =>{
  const worldpopulation = numpopu[0].population;
  const countrylist = numpopu.map((eachpopu) => <Country worldnum={worldpopulation} key={Math.random()} country={eachpopu.country}  population={eachpopu.population}/>)


  return(
    <div className='country-list'>{countrylist}</div>
  )
} 


const Country = ({worldnum, country, population}) =>{
  
  const percent  = Math.round(population /worldnum *100 ); 
  
  let rest = 100 -percent;

  return(
    <div className='country-section'>
      <h1>{country}</h1>
      <div className='total'>
        <div  className="bar" style={{width: percent + "%"}}>p</div>
        {/* <div className='car' style={{width: rest + "%" }}></div> */}
      </div>
      <p>{population}</p>
    </div>
  )
}

function App() {

  return (
  <>
    <div>
      <h1>30 Days Of React</h1>
      <h3>Number Generator</h3>
      <NumberBoxes  />
    </div>   

    <div>
      <h1>30 Days Of React</h1>
      <h3>Hexadecimal Colors</h3>
      <ColorBoxes />
    </div>

    <div>
      <h1>30 Days Of React</h1>
      <h3>World population</h3>
      <p>The most populated countries</p>
      <PopuGraph numpopu={tenHighestPopulation} />
    </div>
  </>
  )
}

export default App
