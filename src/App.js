import React from 'react'
import Navbar from './componentes/NavBar.js';
import './assets/css/App.css'
import WeatherPanel from './componentes/WeatherPanel.js';
import Redes from './Redes/index.jsx';

function App() {
    return(
        <div className='App'>
            <Navbar />
            <WeatherPanel />
            <Redes /> 
        </div>
    )
};

export default App;









