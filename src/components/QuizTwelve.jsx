import Doctor from '../pictures/Doctor.png';
import data from '../bd.json';
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom"

const QuizTwelve = () => {
const location = useLocation()  
let [key, setKey] = useState(Number(location.pathname.slice(1)));
let navigate = useNavigate();

const checked = () => {
  let ansver = data.contents[key].answer;
  let check = document.querySelector('.inputAppWords')?.value;
  if(check.toLowerCase() === ansver) {
    setKey(key + 1)
    document.querySelector('.inputAppWords').value = ''
   }else{
     navigate('/0')
   }
}
const contentOne = [
    <div key={1} className='wrap'>
      <input id="masswge"  placeholder="Введите число" className='inputAppWords'></input>
      <button onClick={checked} className='buttonOK'>ОК</button>
    </div>]
const contentTwo = []
function getContent (){
    if(key === 38){
        return contentTwo
    } else {
        return contentOne
    }
   }
  return (
  <div className="App">
  <main>
  <div className="header">
    <div className="TextOfDoctor">
      <p className="ConnentOfDoctor">{data.contents[key].textDoctor}</p>
    </div>
    <img className="Doctor" src={Doctor} alt="Doctor"/>
  </div>
      {getContent()}
  </main>
  </div>
  )
}
export default QuizTwelve