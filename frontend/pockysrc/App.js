import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import KanBan from './components/KanBan';
import SaveMoney from './components/SaveMoney';
import ChooseID from './components/ChooseID';
import OrderSetting from './components/OrderSetting';
import OrderHasBeenPlaced from './components/OrderHasBeenPlaced';
import MyOrder from './components/MyOrder';
import PartOrder from './components/PartOrder';

function App() {
  return (
    <div className="App">
      {/* <KanBan/> */}
      {/* <SaveMoney/> */}
      {/* <ChooseID/> */}
      {/* <OrderSetting/> */}
      {/* <OrderHasBeenPlaced/> */}
      {/* <MyOrder/> */}
      <PartOrder/>
      
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
