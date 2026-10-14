import React from 'react';
import Card from './component/card';
// import Person from './component/Person';
import Product from './component/Product';
import Chart from './component/Chart';
import Conditional from './component/Conditional';

const App = () => {
  return (
      <div className="parent">
        {/* <Card username="Sanidhya Naik" img="https://images.unsplash.com/photo-1791166841487-f2d05c7905a2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" /> */}
        {/* <Card username="Siddhant Oza" img="https://images.unsplash.com/photo-1628343920868-03222517c2d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" /> */}
        {/* <Card username="Swaroop Jadhav" img="https://plus.unsplash.com/premium_photo-1723914115088-8433d5e613a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" /> */}

        {/* <Person name="John Doe" age={30} /> */}
        {/* <Product name="Laptop" price={1000} /> */}

        {/* // Props children example  */}
        {/* <Chart>
          <h1>Sanidhya Naik</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, beatae.</p>
        </Chart>

        <Chart>
          <h1>Prem Patil</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, beatae.</p>
        </Chart> */}

        <Conditional isValid={false} />

      </div>
  );
}

export default App;