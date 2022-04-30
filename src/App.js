import logo from './logo.svg';
import './App.css';
import TareasList from './components/tareasList';

function App() {
    return (
            <div class="header" className="App">
                <h1>Lista de tareas</h1>
                <TareasList/>
            </div>
    );
}

export default App;
