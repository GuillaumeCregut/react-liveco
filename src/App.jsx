import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';

function App() {

  return (
    <div className="App">
      <h1>Le monde des pirates</h1>
      <Header />
      <Home />
    </div>
  );
}

export default App;
