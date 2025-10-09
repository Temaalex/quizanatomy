import Bacteria from '../../pictures/Bacteria.png';
import Doctor from '../../pictures/Doctor2.png';
import data from '../../bd.json';
import { useState, useEffect  } from 'react';
import { useNavigate, useLocation } from "react-router-dom"
import useSound from 'use-sound'; 
import soundOne from '../../sound/111.mp3'
import soundTwo from '../../sound/222.mp3'
import gameOver from '../../sound/gameOver.mp3'
import win from '../../sound/win.mp3'

const QuizBossBacteria = () => {
  let navigate = useNavigate();
  const location = useLocation()

  const [count, setCount] = useState(60);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount - 1);  
        }, 1000);
        return () => clearInterval(interval); 
        
    },[]); 

    const [playSoundhitHeroes] = useSound(soundOne);
    const [playSoundhitBoss] = useSound(soundTwo);
    const [playSoundgameOver] = useSound(gameOver);
    const [playSoundwin] = useSound(win);

  const [bossFrog, setShake] = useState(false)
  function move(){
    setShake(true)
    setTimeout(()=>setShake(false),1000)
  }

  const [heroes, setShakeHeroes] = useState(false)
  function moveHer(){
    setShakeHeroes(true)
    setTimeout(()=>setShakeHeroes(false),200)
  }

  let [key, setKey] = useState(Number(location.pathname.slice(1)));
  const [HPboss, setHPBoss] = useState(500)
  const [HPheroes, setHPHeroes] = useState(500)
  if(count === 0){
      playSoundhitBoss()
      moveHer()
      setHPHeroes(HPheroes-100)
      setCount(15) 
      if(HPheroes === 100){
        navigate('/0')
        setKey(73)
      }    
    }

 function getMap(){ 
    if(key === 77){
      playSoundwin()
      move()
      key = Number(location.pathname.slice(1))
      navigate('/78')
    }
 }
 const checked = () => {
    let ansver = data.contents[key].answer;
    let check = document.querySelector('.inputAppWords')?.value;
    if(check.toLowerCase() === ansver) {
      playSoundhitHeroes()
      move()
      setKey(key + 1)
      document.querySelector('.inputAppWords').value = ''
      setHPBoss(HPboss-100)
      setCount(15)
      getMap()
     }else {
      playSoundhitBoss()
      moveHer()
      setHPHeroes(HPheroes-100)
      if(HPheroes === 100){
        playSoundgameOver()
        navigate('/0')
        setKey(73)
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
      <div className='timer' >Время на ответ:{count}</div>
      <div className='words'>{data.contents[key].quest}</div>
      <div className='wrap'>
        <input id="masswge"  placeholder="Введите число" className='inputAppWords'></input>
        <button onClick={checked} className='buttonOK'>ОК</button>
      </div>
    </div>  
  </main>
  )
}

export default QuizBossBacteria