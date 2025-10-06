import Doctor from '../../pictures/Doctor.png';
import data from '../../bd.json';
import Box from '../../pictures/Box.png';
import { useNavigate, useLocation } from "react-router-dom"


const ContentBox = () => {
  const location = useLocation()
  const key = Number(location.pathname.slice(1));
  let navigate = useNavigate();
  const arr = ['3', '4', '6', '51', '1',
               '3', '54', '6', '12', '2',
               '44', '5','36', '4', '6',
               '5', '1','3', '45', '6',
               '1', '2','41', '5','99']

  
  const click = () => {
    const arr1 = [];
    for (let index = 0; index < arr.length; index++) {
      arr1.push(document.getElementById(index+1)?.value)
    }
    if(JSON.stringify(arr) === JSON.stringify(arr1)){
      navigate('/72')
      } else {
        for (let index = 0; index < arr.length; index++) {
          if (arr [index] !== arr1 [index]){
          const elements = document.querySelectorAll('.boxForNumber')
          elements[index].style.background = 'red'
          }
          if (arr [index] === arr1 [index]){
          const elements = document.querySelectorAll('.boxForNumber')
          elements[index].style.background = '#00fa2e'
          }
        }
        console.log(false)
      }
  }

   return (
  <main>
  <div className="header">
    <div className="TextOfDoctor">
      <p className="ConnentOfDoctor">Вау, ты решил все задачи, настало время и открыть сундук и узнать что там!</p>
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
    <div>
      <p className='textForNumber'>5</p>
      <input id='5'className='boxForNumber'></input>
    </div>
  </div>
<div className='wrapBox'>
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
  
    <div>
      <p className='textForNumber'>9</p>
      <input id='9'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>10</p>
      <input id='10'className='boxForNumber'></input>
    </div>
    </div>
<div className='wrapBox'> 
    <div>
      <p className='textForNumber'>11</p>
      <input id='11'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>12</p>
      <input id='12'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>13</p>
      <input id='13'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>14</p>
      <input id='14' className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>15</p>
      <input id='15'className='boxForNumber'></input>
    </div>
  </div> 
<div className='wrapBox'>
    
    <div>
      <p className='textForNumber'>16</p>
      <input id='16'className='boxForNumber'></input>
    </div> 
    <div>
      <p className='textForNumber'>17</p>
      <input id='17'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>18</p>
      <input id='18'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>19</p>
      <input id='19'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>20</p>
      <input id='20'className='boxForNumber'></input>
    </div>   
  </div> 
<div className='wrapBox'>
    <div>
      <p className='textForNumber'>21</p>
      <input id='21'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>22</p>
      <input id='22'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>23</p>
      <input id='23'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>24</p>
      <input id='24'className='boxForNumber'></input>
    </div> 
    <div>
      <p className='textForNumber'>25</p>
      <input id='25'className='boxForNumber'></input>
    </div> 
  </div> 
  </main>
  )
  
}

export default ContentBox


















