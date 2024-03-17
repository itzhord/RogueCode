import MainPage from "./components/pages/mainpage.js";
import About from "./components/pages/about.js";
import Subscribe from "./components/pages/subscibe.js";
import Form from "./components/form.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  
  </>

    //  <div>
    //   <Tailwind />
    //   <Scroll />
    //   <About />
    //  </div>  
  );
}

export default App;
