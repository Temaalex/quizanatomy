import { Routes, Route } from 'react-router-dom';
import Error from "./components/componentsAll/ContentError";
import ContentBox from "./components/componentsAll/ContentBox"

import QuizOne from './components/QuizOne';
import QuizTwo from './components/QuizTwo';
import QuizThree from './components/QuizThree';
import QuizFour from './components/QuizFour';
import QuizFive from './components/QuizFive';
import QuizFive1 from './components/QuizFive1';
import QuizFive2 from './components/QuizFive2';
import QuizSix from './components/QuizSix';
import QuizSeven from './components/QuizSeven';
import QuizEight from './components/QuizEight';
import QuizNine from './components/QuizNine';
import QuizTen from './components/QuizTen';
import QuizEleven from './components/QuizEleven';
import QuizTwelve from './components/QuizTwelve';
import QuizThirteen from './components/QuizThirteen';
import QuizFourteen from './components/QuizFourteen';
import QuizFifteen from './components/QuizFifteen';
import QuizSixteen from './components/QuizSixteen';
import QuizSeventeen from './components/QuizSeventeen';
import QuizEighteen from './components/QuizEighteen';
import QuizNineteen from './components/QuizNineteen';
import QuizTwenty from './components/QuizTwenty';
import QuizTwentyOne from './components/QuizTwentyOne';
import QuizTwentyTwo from './components/QuizTwentyTwo';
import QuizTwentyThree from './components/QuizTwentyThree';
import QuizTwentyFour from './components/QuizTwentyFour';
import QuizTwentyFive from './components/QuizTwentyFive'

function App() {
  return (
    <Routes>
     
      {/* Ошибка в ответе */}
      <Route path="/0" element={<Error/>} />
      {/* Открытие сундука */}
      <Route path="/1000" element={<ContentBox/>} />
      {/* все кроме */}
      <Route path="*" element={<h1>404 Not Found</h1>} />


      {/* Первый вопрос */}
      <Route path="/1" element={<QuizOne/>} />
      {/* Второй вопрос */}
      <Route path="/6" element={<QuizTwo/>} />
      {/* Третий вопрос */}
      <Route path="/11" element={<QuizThree/>} />
      {/* Четвертый вопрос */}
      <Route path="/15" element={<QuizFour/>} />
      {/* Пятый вопрос */}
      <Route path="/19" element={<QuizFive/>} />
      <Route path="/20" element={<QuizFive1/>} />
      <Route path="/21" element={<QuizFive2/>} />
      {/* Шестой вопрос */}
      <Route path="/23" element={<QuizSix/>} />
      {/* Седьмой вопрос */}
      <Route path="/27" element={<QuizSeven/>} />
      {/* Восьмой вопрос */}
      <Route path="/29" element={<QuizEight/>} />
      {/* Девятый вопрос */}
      <Route path="/31" element={<QuizNine/>} />
      {/* Десятый вопрос */}
      <Route path="/33" element={<QuizTen/>} />
      {/* Одиннадцатый вопрос */}
      <Route path="/35" element={<QuizEleven/>} />
      {/* Двенадцатый вопрос */}
      <Route path="/37" element={<QuizTwelve/>} />
      {/* Тринадцатый вопрос */}
      <Route path="/39" element={<QuizThirteen/>} />
      {/* Четырнадцатый вопрос */}
      <Route path="/41" element={<QuizFourteen/>} />
      {/* Пятнадцатый вопрос */}
      <Route path="/43" element={<QuizFifteen/>} />
      {/* Шестнадцатый вопрос */}
      <Route path="/45" element={<QuizSixteen/>} />
      {/* Семнадцатый вопрос */}
      <Route path="/47" element={<QuizSeventeen/>} />
      {/* Восемнадцатый вопрос */}
      <Route path="/49" element={<QuizEighteen/>} />
      {/* Девятнадцатый вопрос */}
      <Route path="/51" element={<QuizNineteen/>} />
      {/* Двадцатый вопрос */}
      <Route path="/53" element={<QuizTwenty/>} />
      {/* Двадцать первый вопрос */}
      <Route path="/55" element={<QuizTwentyOne/>} />
      {/* Двадцать второй вопрос */}
      <Route path="/60" element={<QuizTwentyTwo/>} />
      {/* Двадцать третий вопрос */}
      <Route path="/62" element={<QuizTwentyThree/>} />
      {/* Двадцать четвертый вопрос */}
      <Route path="/64" element={<QuizTwentyFour/>} />
      {/* Двадцать пятый */}
      <Route path="/68" element={<QuizTwentyFive/>} />

    </Routes>
  );
}

export default App;
