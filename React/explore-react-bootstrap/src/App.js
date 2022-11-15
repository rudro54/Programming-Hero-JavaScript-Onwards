import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import GridCard from './components/GridCard/GridCard';

function App() {
  return (
    <div className="App">
      <Button variant='danger'>My Button</Button>
      <br />
      <br />
      <Spinner variant='danger'></Spinner>
      <br />
      <br />
      <GridCard></GridCard>
    </div>
  );
}

export default App;
