import Doctor from '../pictures/Doctor.png';
import data from '../bd.json';
import { useRef, useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom"

const QuizFive = () => {
  let navigate = useNavigate();
  const location = useLocation()
  const id = Number(location.pathname.slice(1));

function nextContent(){
    if(document.querySelectorAll('.button').length === 0){
      const getNextPage = "/"+String(id+1)
      navigate(getNextPage)
    }
  }

  const myRef = useRef();
  let arr = []
  let arr1 = []
  const Comp_1 = () => {
    myRef.current = data.contents[id].answer[0][0]
    arr.push(myRef.current)
    let comp = document.getElementById('comp_1')
    arr1.push(comp)
    if(arr.length > 2 ){
      arr.splice(0, arr.length)
      arr1.splice(0, arr1.length)
      arr.push(myRef.current)
      arr1.push(comp)
    }
    if(arr.length === 2){
      [arr[0], arr[1]]=[arr[1], arr[0]];
    }
    
    if(JSON.stringify(arr) === JSON.stringify(data.contents[id].answer[0])){
      
      arr1[0].remove()
      arr1[1].remove()
      arr.splice(0, arr.length)
      arr1.splice(0, arr1.length)
    }
    nextContent()
  }
  const Comp_2 = () => {
    myRef.current = data.contents[id].answer[1][0]
    arr.push(myRef.current)
    let comp = document.getElementById('comp_2')
    arr1.push(comp)
    if(arr.length > 2){
      arr.splice(0, arr.length)
      arr1.splice(0, arr1.length)
      arr.push(myRef.current)
      arr1.push(comp)
    }
    if(arr.length === 2){
      [arr[0], arr[1]]=[arr[1], arr[0]];
    }
    
    if(JSON.stringify(arr) === JSON.stringify(data.contents[id].answer[1])){
      
      arr1[0].remove()
      arr1[1].remove()
      arr.splice(0, arr.length)
      arr1.splice(0, arr1.length)
    }
    nextContent()
  }
  const Comp_3 = () => {
    myRef.current = data.contents[id].answer[2][0]
    arr.push(myRef.current)
    let comp = document.getElementById('comp_3')
    arr1.push(comp)
    if(arr.length > 2){
      arr.splice(0, arr.length)
      arr1.splice(0, arr1.length)
      arr.push(myRef.current)
      arr1.push(comp)
    }
    if(arr.length === 2){
      [arr[0], arr[1]]=[arr[1], arr[0]];
    }
    
    if(JSON.stringify(arr) === JSON.stringify(data.contents[id].answer[2])){
      
      arr1[0].remove()
      arr1[1].remove()
      arr.splice(0, arr.length)
      arr1.splice(0, arr1.length)
    }
    nextContent()
  }
  const Comp_4 = () => {
    myRef.current = data.contents[id].answer[3][0]
    arr.push(myRef.current)
    let comp = document.getElementById('comp_4')
    arr1.push(comp)
    if(arr.length > 2){
      arr.splice(0, arr.length)
      arr1.splice(0, arr1.length)
      arr.push(myRef.current)
      arr1.push(comp)
    }
    if(arr.length === 2){
      [arr[0], arr[1]]=[arr[1], arr[0]];
    }
    
    if(JSON.stringify(arr) === JSON.stringify(data.contents[id].answer[3])){
      
      arr1[0].remove()
      arr1[1].remove()
      arr.splice(0, arr.length)
      arr1.splice(0, arr1.length)
    }
    nextContent()
  }
  const Comp_5 = () => {
    myRef.current = data.contents[id].answer[0][1]
    arr.push(myRef.current)
    let comp = document.getElementById('comp_5')
    arr1.push(comp)
    if(arr.length > 2){
      arr.splice(0, arr.length)
      arr1.splice(0, arr1.length)
      arr.push(myRef.current)
      arr1.push(comp)
    }
    if(JSON.stringify(arr) === JSON.stringify(data.contents[id].answer[0])){
      arr1[0].remove()
      arr1[1].remove()
      arr.splice(0, arr.length)
      arr1.splice(0, arr1.length)
    }
    nextContent()
  }
  const Comp_6 = () => {
    myRef.current = data.contents[id].answer[1][1]
    arr.push(myRef.current)
    let comp = document.getElementById('comp_6')
    arr1.push(comp)
    if(arr.length > 2){
      arr.splice(0, arr.length)
      arr1.splice(0, arr1.length)
      arr.push(myRef.current)
      arr1.push(comp)
    }
    if(JSON.stringify(arr) === JSON.stringify(data.contents[id].answer[1])){
      
      arr1[0].remove()
      arr1[1].remove()
      arr.splice(0, arr.length)
      arr1.splice(0, arr1.length)
    }
    nextContent()
  }
  const Comp_7 = () => {
    myRef.current = data.contents[id].answer[2][1]
    arr.push(myRef.current)
    let comp = document.getElementById('comp_7')
    arr1.push(comp)
    if(arr.length > 2){
      arr.splice(0, arr.length)
      arr1.splice(0, arr1.length)
      arr.push(myRef.current)
      arr1.push(comp)
    }
    if(JSON.stringify(arr) === JSON.stringify(data.contents[id].answer[2])){
      
      arr1[0].remove()
      arr1[1].remove()
      arr.splice(0, arr.length)
      arr1.splice(0, arr1.length)
    }
    nextContent()
  } 
  const Comp_8 = () => {
    myRef.current = data.contents[id].answer[3][1]
    arr.push(myRef.current)
    let comp = document.getElementById('comp_8')
    arr1.push(comp)
    if(arr.length > 2){
      arr.splice(0, arr.length)
      arr1.splice(0, arr1.length)
      arr.push(myRef.current)
      arr1.push(comp)
    }

    if(JSON.stringify(arr) === JSON.stringify(data.contents[id].answer[3])){
      
      arr1[0].remove()
      arr1[1].remove()
      arr.splice(0, arr.length)
      arr1.splice(0, arr1.length)
    }
    nextContent()
  }

  const components_ru = [
    <button key={1} onClick={Comp_1} id="comp_1" className="button">{data.contents[id].answer[0][0]}</button>,
    <button key={2} onClick={Comp_2} id="comp_2" className="button">{data.contents[id].answer[1][0]}</button>,
    <button key={3} onClick={Comp_3} id="comp_3" className="button">{data.contents[id].answer[2][0]}</button>,
    <button key={4} onClick={Comp_4} id="comp_4" className="button">{data.contents[id].answer[3][0]}</button>
]
  const components_eng = [
    <button key={5} onClick={Comp_5} id="comp_5" className="button">{data.contents[id].answer[0][1]}</button>,
    <button key={6} onClick={Comp_6} id="comp_6" className="button">{data.contents[id].answer[1][1]}</button>,
    <button key={7} onClick={Comp_7} id="comp_7" className="button">{data.contents[id].answer[2][1]}</button>,
    <button key={8} onClick={Comp_8} id="comp_8" className="button">{data.contents[id].answer[3][1]}</button>
]




function shuffle(components) {  
    let newArr = [...components];  
    for (let i = newArr.length-1; i > 0; i--) {  
        let j = Math.floor(Math.random() * (i + 1));  
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]]  
    }  
    return newArr;  
    
}   

   return (
  <main>
  <div className="header">
    <div className="TextOfDoctor">
      <p className="ConnentOfDoctor">{data.contents[id].textDoctor}</p>
    </div>
    <img className="Doctor" src={Doctor} alt="Doctor"/>
  </div>
      <div className='buttons__column'>
        <div className='buttons__content'>
           {shuffle(components_ru)}
        </div>
        <div className='buttons__content'>
           {shuffle(components_eng)}
        </div>
      </div>
  </main>
  )
  
}

export default QuizFive