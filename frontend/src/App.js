import './App.css';
import Canvas from './Canvas';
import { useEffect,useState } from 'react';
import axios from "axios";
import Map from "./Map";
import 'leaflet/dist/leaflet.css';
import CandM from './CandM';
import {Routes,Route, Link} from "react-router-dom";
import Contact from './Contact';
import Create from './Create';
import Edit from './Edit';
function App() {
  return (
    <div className="App">
        <div className='maincontainer'>
            <div className='sidebar'>
                <div className='btnscontainer'>
                  <button>
                    <Link className='link' to="/">
                      Contact
                    </Link>
                  </button>
                  <button>
                    <Link className='link' to="/charts">
                      Charts and Maps
                    </Link>
                  </button>
                </div>
                <h2>Side bar</h2>
            </div>
            <div className='mainsection'>
                {/* <CandM/> */}
                <Routes>
                  <Route path='/' element={<Contact/>}/>
                  <Route path='/charts' element={<CandM/>}/>
                  <Route path='/create' element={<Create/>}/>
                  <Route path='/update/:id' element={<Edit/>}/>
                </Routes>
            </div>
        </div>
    </div>
  );
}

export default App;
