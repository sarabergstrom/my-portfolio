import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { CV } from './pages/CV';
import { OmSara } from './pages/OmSara';
import { Projekt } from './pages/Projekt';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cv" element={<CV />}/>
            <Route path="/omsara" element={<OmSara />}/>
            <Route path="/projekt" element={<Projekt />}/>
          </Routes>
        </Router>
      
      </header>
    </div>
  );
}

export default App;
