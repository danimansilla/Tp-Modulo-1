import React from 'react';
import './App.css';
import Footer from './componentes/Footer';
import Nav from './componentes/Nav';
import Home from './componentes/Home';
import Registro from './componentes/Registro';



function App() {
  return (

    <div className="App">
<Nav/>

<Registro/>
    <p className="footer">
    <Footer/>
    </p>
    </div>
  );
}

export default App;
