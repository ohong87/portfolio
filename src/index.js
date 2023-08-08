import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Main from './components/Main';
import Photo from './components/Photo';
import Projects from './components/Projects';
import Founder from './components/Founder';
import Astro from './components/Astro';
import Events from './components/Events';
import Grad from './components/Grad';
import Headshot from "./components/Headshot";
import Landscapes from "./components/Landscapes";
import Candid from "./components/Candid";
import Film from "./components/Film";

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}  />
        <Route path="/portfolio" element={<Main/>}  />
        <Route path="/photo" element={<Photo/>}/>
        <Route path="/photo/astro" element={<Astro/>} />
        <Route path="/photo/events" element={<Events/>} />
        <Route path="/photo/grad" element={<Grad/>} />
        <Route path="/photo/headshot" element={<Headshot/>} />
        <Route path="/photo/landscape" element={<Landscapes/>} />
        <Route path="/photo/candid" element={<Candid/>} />
        <Route path="/photo/film" element={<Film/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/founder" element={<Founder/>} />
        <Route path="*" element={"Page not found"} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
