import './App.css'
import React, {useState} from 'react'
import first from './ui-templates/first.png'
import second from './ui-templates/second.png'
import third from './ui-templates/third.png'
import logo from './images/logo.jpg'
import Ffirst from './inputs/first.js'
import Sec from './inputs/sec.js'
import Tthird from './inputs/third.js'


function App() {
  const [selectedValue, setSelectedValue] = useState('')


  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }


  return (
   <div className='container'>
      <h3 className='slide'>This website is still under construction but feel free to use our services</h3>
      <img className='logo' src={logo} alt='logo'/>
      <h1 className='heading'>Welcome to <i>card</i></h1>
    <fieldset className='fielset'>
      <legend><h4>Choose a business card template</h4></legend>
      <label>
          <input type="radio" value="option1" name="options" checked={selectedValue === 'option1'} onChange={handleChange}
          />
          <img className='cardd' src={first} alt='first template'/>
        </label>

        <label>
          <input type="radio" value="option2" name="options" checked={selectedValue === 'option2'} onChange={handleChange}/>
          <img className='cardd' src={second} alt='second template'/>
        </label>

        <label>
          <input type="radio" value="option3" name="options" checked={selectedValue === 'option3'} onChange={handleChange}/>
          <img className='cardd' src={third} alt='third template'/>
        </label>
    </fieldset>
    <h3 className='details'>Choose template and enter details :</h3>
    {selectedValue === "option1" && <Ffirst/>}
    {selectedValue === "option2" && <Sec/>}
    {selectedValue === "option3" && <Tthird/>}
    
    
      
   </div>
  );
}

export default App;
