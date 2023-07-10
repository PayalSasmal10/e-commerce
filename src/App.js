import './App.css';
import Dashboard from './components/dashboard';
import Orders from './components/orders';
import { ModeOfOrder } from './components/orders/modeofOrders';
import SideNav from './components/side-nav';


function App() {
  return (
    <div className="App">
      <SideNav/>
      <Dashboard/>
      <ModeOfOrder/>
    </div>
  );
}

export default App;
