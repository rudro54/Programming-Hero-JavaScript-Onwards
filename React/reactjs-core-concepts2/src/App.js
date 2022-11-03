import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  return (
    <div>
      <h1>Count : </h1>

    </div>

  );
}





export default App;


/*
const products = [
  { name: 'laptop', price: '120,000' },
  { name: 'iPhone', price: '200,000' },
  { name: 'watch', price: '90,000' }

]

     <Product name="Laptop" price="12000"></Product>
      <Product name="iPhone" price="200000"></Product>
      <Product name="Watch" price="90000"></Product>
      
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)

      }
      {}

      function Product(props) {
  return (

    <div className='product'>
      <h3>Name :{props.name}</h3>
      <p>Price :{props.price}</p>
    </div>

  )


}
      
      
      
      */
