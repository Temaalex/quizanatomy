import Doctor from '../../pictures/Doctor.png';
import data from '../../bd.json';
import Box from '../../pictures/Box.png';
import { useNavigate } from "react-router-dom"

const ContentBox = () => {
  const key = 1;
  let navigate = useNavigate();

  const arr = ['3', '4', '6', '5', '1', '3', '4', '6', '1', '2', '4', '5']

  const click = () => {
    const arr1 =[
    document.getElementById('1')?.value,
    document.getElementById('2')?.value,
    document.getElementById('3')?.value,
    document.getElementById('4')?.value,
    document.getElementById('5')?.value,
    document.getElementById('6')?.value,
    document.getElementById('7')?.value,
    document.getElementById('8')?.value,
    document.getElementById('9')?.value,
    document.getElementById('10')?.value,
    document.getElementById('11')?.value,
    document.getElementById('12')?.value
    ]
    if(JSON.stringify(arr) === JSON.stringify(arr1)){
      navigate('/0')
      } else {
        console.log(arr1)
      }
  }

   return (
  <main>
  <div className="header">
    <div className="TextOfDoctor">
      <p className="ConnentOfDoctor">{data.contents[key].textDoctor[0]}</p>
      <p className="ConnentOfDoctor">{data.contents[key].textDoctor[1]}</p>
      <p className="ConnentOfDoctor">{data.contents[key].textDoctor[2]}</p>
      <p className="ConnentOfDoctor">{data.contents[key].textDoctor[3]}</p>
    </div>
    <img className="Doctor" src={Doctor} alt="Doctor"/>
  </div>
  <div className="imgBox">
    <p className='textBox'>Нажми на меня!</p>
    <img onClick={click} className="box" src={Box} alt="Box"/>
  </div>
  
  <div className='wrapBox'>
    <div>
      <p className='textForNumber'>1</p>
      <input id='1'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>2</p>
      <input id='2' className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>3</p>
      <input id='3'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>4</p>
      <input id='4'className='boxForNumber'></input>
    </div>   
  </div> 
  <div className='wrapBox'>
    <div>
      <p className='textForNumber'>5</p>
      <input id='5'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>6</p>
      <input id='6'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>7</p>
      <input id='7'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>8</p>
      <input id='8'className='boxForNumber'></input>
    </div>  
  </div> 
  <div className='wrapBox'>
    <div>
      <p className='textForNumber'>9</p>
      <input id='9'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>10</p>
      <input id='10'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>11</p>
      <input id='11'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>12</p>
      <input id='12'className='boxForNumber'></input>
    </div>  
  </div> 
  </main>
  )
  
}

export default ContentBox