import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Humans from "./components/Humans";
import Circles from "./components/Circles";
import Timeline from "./components/Timeline";
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path={'/'} element={<Humans/>}/>
                <Route path={'/c'} element={<Circles/>}/>
                <Route path={'/t'} element={<Timeline/>}/>
            </Routes>
        </>
    );
}

export default App;
