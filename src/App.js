import logo from './logo.svg';
import './App.css';
import TridiDemo from './TridiDemo';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="npm-badge">
                <a
                    href="https://badge.fury.io/js/react-tridi"
                    style={{ marginRight: '16px' }}
                >
                    <img
                        src="https://badge.fury.io/js/react-tridi.svg"
                        alt="npm version"
                        height="24"
                    />
                </a>
                React Tridi
            </div>
            <TridiDemo />
        </div>
    );
}

export default App;
