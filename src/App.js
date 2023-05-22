import logo from './logo.svg';
import './App.css';
import Home from './sections/Home.jsx';
import { RecoilRoot } from 'recoil';


function App() {
  return (
    <div className="App">
      <RecoilRoot>
          <Home />
      </RecoilRoot>
    </div>
  );
}

export default App;
