import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import About from './routes/about';
import Recruit from './routes/recruitment';
import Training from './routes/training';
import Consult from './routes/consult';
import Outsource from './routes/outsource';
import Contact from './routes/contact';
import Services from './routes/services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
        <Route path="home" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="training" element={<Training />}/>
        <Route path ="consult" element={<Consult />}/>
        <Route path='recruitment' element={<Recruit />}/>
        <Route path='outsourcing' element={<Outsource />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='services' element={<Services />}/>
        <Route
        index
        element={<App/>}
      />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
          />
  
    </Routes>
    {/* <Routes></Routes> */}

  </BrowserRouter>


);

