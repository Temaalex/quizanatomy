import { Routes, Route } from 'react-router-dom';
import Error from "./components/componentsAll/ContentError";
import ContentBox from "./components/componentsAll/ContentBox"

function App() {
  return (
    <Routes>
     
      {/* Ошибка в ответе */}
      <Route path="/0" element={<Error/>} />
      {/* Открытие сундука */}
      <Route path="/1" element={<ContentBox/>} />


      {/* все кроме "*" */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
