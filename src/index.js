import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path="photo" element={<Photo/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="founder" element={<Founder/>} />
          <Route path="*" element={<div>Page does not exist</div>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
