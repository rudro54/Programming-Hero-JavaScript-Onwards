import logo from './logo.svg';
import './App.css';


const singer = { name: 'Zayed', job: 'Singer' };
function App() {
  return (
    <div className="App">
      <Person name="Rubel" nayika="Kajol"></Person>
      <Person name="Bappa" nayika="Moushumi"></Person>
      <Person name="Kuber" nayika="Kopila"></Person>
      <h5>New Component One</h5>
      <h5>New Component Two</h5>
      <Friend movie="Singam" phone="017777"></Friend>
      <Friend phone="019999"></Friend>
    </div>
  );
}
function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Nayika : {props.nayika}</p>
    </div>

  )
}

function Friend(props) {

  return (
    <div className="container">
      <h1>Name : {props.movie}</h1>
      <p>phone : {props.phone}</p>
    </div>

  )
}

export default App;
