import Doctor from '../pictures/Doctor.png';
import data from '../bd.json';
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom"

const QuizEleven = () => {
const location = useLocation()  
let [key, setKey] = useState(Number(location.pathname.slice(1)));
let navigate = useNavigate();

const checked_1 = () => {
  if(data.contents[key].answer.answer_1[1] === true){ 
    setKey(key + 1)
   }else{
     navigate('/0')
   }
}
const checked_2 = () => {
  if(data.contents[key].answer.answer_2[1] === true) {
    setKey(key + 1) 
   }else{
     navigate('/0')
   }
}
const checked_3 = () => {
   if(data.contents[key].answer.answer_3[1] === true) {
     setKey(key + 1)
    }else{
     navigate('/0')
    }
}
const checked_4 = () => {
  if(data.contents[key].answer.answer_4[1] === true) {
     setKey(key + 1)
    }else{
     navigate('/0')
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
      <div className='buttons__content'>
        <button onClick={checked_1} className="button">{data.contents[key].answer.answer_1[0]}</button>
				<button onClick={checked_2} className="button">{data.contents[key].answer.answer_2[0]}</button>
				<button onClick={checked_3} className="button">{data.contents[key].answer.answer_3[0]}</button>
				<button onClick={checked_4} className="button">{data.contents[key].answer.answer_4[0]}</button>
      </div>
  </main>
  </div>
  )
}
export default QuizEleven