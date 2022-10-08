/*

1. var let const
2. const must be initialized with a value while declaring , let and const dont hoist , reside inside block
3. default parameter
4. template string 




*/

// default parameter 
// if no eid no bonus tax might change due to legislation change 

function calculateSalary(salary, tax = 0.25, bonus = 0) {

    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;

}

// template string 

const elementHTML = `
  
<div>
  <h3>Name : </h3>
  <p>Address:  </p>
  <p>Salary: ${calculateSalary(10000, 0, 0)} </p>
  <p>Others: ${numbers[2]} </p>

</div>
`

// arrow function 
// spread 
// destructuring
