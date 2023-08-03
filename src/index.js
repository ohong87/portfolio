import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Main from './components/Main';
import Photo from './components/Photo';
import Projects from './components/Projects';
import Founder from './components/Founder';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}  />
        <Route path="/portfolio" element={<Main/>}  />
        <Route path="/photo" element={<Photo/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/founder" element={<Founder/>} />
        <Route path="*" element={"Page not found"} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
