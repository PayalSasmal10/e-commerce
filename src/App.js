import { useState } from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import { ModeOfOrder } from './components/orders/modeofOrders';
import SideNav from './components/side-nav';


function App() {
  const [navActive, setNavActive] = useState("");
  return (
    <div className="App">
      <SideNav navActive={navActive} setNavActive={setNavActive}/>
      <Dashboard setNavActive={setNavActive}/>
      <ModeOfOrder/>
    </div>
  );
}

export default App;
