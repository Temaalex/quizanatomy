import Bacteria from '../../pictures/Bacteria.png';
import Doctor from '../../pictures/Doctor2.png';
import data from '../../bd.json';
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom"

const QuizBossBacteria = () => {
  let navigate = useNavigate();
  const location = useLocation()
  
  const [bossFrog, setShake] = useState(false)
  function move(){
    setShake(true)
    setTimeout(()=>setShake(false),200)
  }

  const [heroes, setShakeHeroes] = useState(false)
  function moveHer(){
    setShakeHeroes(true)
    setTimeout(()=>setShakeHeroes(false),200)
  }

  let [key, setKey] = useState(Number(location.pathname.slice(1)));
  const [HPboss, setHPBoss] = useState(500)
  const [HPheroes, setHPHeroes] = useState(500)


 function getMap(){ 
    if(key === 77){
      move()
      key = Number(location.pathname.slice(1))
      navigate('/78')
    }
 }
 const checked = () => {
    let ansver = data.contents[key].answer;
    let check = document.querySelector('.inputAppWords')?.value;
    if(check.toLowerCase() === ansver) {
      move()
      setKey(key + 1)
      document.querySelector('.inputAppWords').value = ''
      setHPBoss(HPboss-100)
      getMap()
     }else {
      moveHer()
      setHPHeroes(HPheroes-100)
      if(HPheroes === 100){
        navigate('/0')
        setKey(72)
      }
    }
  }





  return (
  <main>
   <div className="header">
    <div className="wrapHeroes">
      <div className='contentHeroes'>
          <img className={heroes ? "heroes":"heroes2"} src={Doctor} alt="Doctor"/>
          <p className='HP'>Доктор: {HPheroes}HP</p>
      </div>
      <div>
        <img className={bossFrog ? "bossFrog" : "bossFrog2"} src={Bacteria} alt="bossBacteria"/>
        <p className='HP'>Бактерия: {HPboss}HP</p>
      </div>
    </div>
  </div>
    <div>
      <div className='words'>{data.contents[key].quest}</div>
      <div className='wrap'>
        <input id="masswge"  placeholder="Введите слово" className='inputAppWords'></input>
        <button onClick={checked} className='buttonOK'>ОК</button>
      </div>
    </div>  
  </main>
  )
}

export default QuizBossBacteria