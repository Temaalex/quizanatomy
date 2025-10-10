import Caries from '../../pictures/Caries.png';
import Doctor from '../../pictures/Doctor2.png';
import data from '../../bd.json';
import { useState, useEffect  } from 'react';
import { useNavigate, useLocation } from "react-router-dom"
import useSound from 'use-sound'; 
import soundOne from '../../sound/111.mp3'
import soundTwo from '../../sound/22222.mp3'
import gameOver from '../../sound/gameOver.mp3'
import win from '../../sound/win.mp3'

const QuizBossCaries = () => {
  let navigate = useNavigate();
  const location = useLocation()

      const [playSoundhitHeroes] = useSound(soundOne);
      const [playSoundhitBoss] = useSound(soundTwo);
      const [playSoundgameOver] = useSound(gameOver);
      const [playSoundwin] = useSound(win);

 const [count, setCount] = useState(60);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount - 1);  
        }, 1000);
        return () => clearInterval(interval); 
        
    }, []); 

    


  const [bossFrog, setShake] = useState(false)
  function move(){
    playSoundhitHeroes()
    setShake(true)
    setTimeout(()=>setShake(false),1000)
  }

  const [heroes, setShakeHeroes] = useState(false)
  function moveHer(){
    playSoundhitBoss()
    setShakeHeroes(true)
    setTimeout(()=>setShakeHeroes(false),200)
  }

  let [key, setKey] = useState(Number(location.pathname.slice(1)));
  const [HPboss, setHPBoss] = useState(1000)
  const [HPheroes, setHPHeroes] = useState(500)
  if(count === 0){
      moveHer()
      setHPHeroes(HPheroes-100)
      setCount(15) 
      if(HPheroes === 100){
        navigate('/0')
        setKey(79)
      }    
    }

 function getMap(){ 
    if(key === 88){
      playSoundwin()
      move()
      key = Number(location.pathname.slice(1))
      navigate('/89')
    }
 }
function update_1(){
      getMap()
    if(data.contents[key].answer.answer_1[1] === true){
      move()
       setKey(key + 1)
       setHPBoss(HPboss-100)
       setCount(15)
    } else {
      moveHer()
      setHPHeroes(HPheroes-100)
      if(HPheroes === 100){
        playSoundgameOver()
        navigate('/0')
        setKey(79)
      }
    }
  }
  function update_2(){
    getMap()
    if(data.contents[key].answer.answer_2[1] === true){
      move()
      setKey(key + 1)
      setHPBoss(HPboss-100)
      setCount(15)
    } else {
      moveHer()
      setHPHeroes(HPheroes-100)
      if(HPheroes === 100){
        playSoundgameOver()
        navigate('/0')
        setKey(79)
      }
    }
  }
  function update_3(){
    getMap()
    if(data.contents[key].answer.answer_3[1] === true){
      move()
      setKey(key + 1)
      setHPBoss(HPboss-100)
      setCount(15)
    } else {
      moveHer()
      setHPHeroes(HPheroes - 100)
      if(HPheroes === 100){
        playSoundgameOver()
        navigate('/0')
        setKey(79)
      }
    }
    
  }
  function update_4(){
    getMap()
    if(data.contents[key].answer.answer_4[1] === true){
      move()
      setKey(key + 1)
      setHPBoss(HPboss-100)
      setCount(15)
    } else {
      moveHer()
      setHPHeroes(HPheroes - 100)
      if(HPheroes === 100){
        playSoundgameOver()
        navigate('/0')
        setKey(79)
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
        <img className={bossFrog ? "bossFrog" : "bossFrog2"} src={Caries} alt="bossCaries"/>
        <p className='HP'>Кариес: {HPboss}HP</p>
      </div>
    </div>
  </div>
    <div>
      <div className='timer' >Время на ответ:{count}</div>
      <div className='words'>{data.contents[key].quest}</div>
       <div className='buttons__content'>
            <button onClick={update_1} className="button">{data.contents[key].answer.answer_1[0]}</button>
            <button onClick={update_2} className="button">{data.contents[key].answer.answer_2[0]}</button>
            <button onClick={update_3} className="button">{data.contents[key].answer.answer_3[0]}</button>
            <button onClick={update_4} className="button">{data.contents[key].answer.answer_4[0]}</button>
        </div>
    </div>  
  </main>
  )
}

export default QuizBossCaries