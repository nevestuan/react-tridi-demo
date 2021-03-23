import logo from './logo.svg';
import './App.css';
import TridiDemo from './TridiDemo';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <TridiDemo />
            </header>
        </div>
    );
}

export default App;
