import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name='Noakhali' special='vibag'></District>
      <District name='B,Baria' special='vibag Chai'></District>
      <District name='Chandpur' special='Elish'></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'brown',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px'
}


function District(props) {
  return (
    <div style={districtStyle}>
      <h2>Name :{props.name}</h2>
      <p>Specialty :{props.special}</p>
      <h4>Power : </h4>
      <button>Boost The Power</button>
    </div>

  )

}

export default App;
