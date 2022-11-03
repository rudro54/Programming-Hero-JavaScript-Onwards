import logo from './logo.svg';
import './App.css';
const number = 999;
const singerStyle = {
  color: 'red',
  backgroundColor: 'white'

}

const singer = { name: 'Zayed', job: 'Singer' };
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Learning React!!</h3>
        </div>
        <div className="music">
          <p style={{ color: 'blue', backgroundColor: 'yellow' }}>Name : {number - 111}</p>
          <p style={singerStyle} >Name : {singer.name} {singer.job}</p>
        </div>
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
      </header>
    </div>
  );
}

export default App;
