import MainPage from "./components/pages/mainpage.js";
import About from "./components/pages/about.js";
import Subscribe from "./components/pages/subscibe.js";
import SignUpForm from "./components/signUpForm.js";
import SignInForm from "./components/signInForm.js";
import Signal from "./components/signInForm.js";
import Regsuccess from "./components/Regsuccess.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="success" element={<Regsuccess />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/SignUp" element={<SignUpForm />} />
        <Route path="/SignIn" element={<SignInForm />} />
        <Route path="/Signal" element={<Signal />} />
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
