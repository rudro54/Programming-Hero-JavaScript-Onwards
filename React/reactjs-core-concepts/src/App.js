import logo from './logo.svg';
import './App.css';

const singers = [

  { name: 'Dr Mahfuz', job: 'Singer' },
  { name: 'Eva Rahman', job: 'Gayika' },
  { name: 'Agun', job: 'Sopno' },
  { name: 'Shuvro Dev', job: 'Pathor' },
  { name: 'Tahsan', job: 'Divo' }

]


function App() {
  const nayoks = ['Razzak', 'Salman Shah', 'Omitav', 'Joshim', 'Tom-Cruiz', 'Anwar'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* <Person name={nayoks[0]} nayika="Kajol"></Person>
      <Person name={nayoks[1]} nayika="Moushumi"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person> */}
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
      <p>{props.nayika}</p>
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
