import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      customers : []
    }
  }

  componentDidMount(){
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({ customers }, () => console.log(customers)));
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.customers.map(customer => 
            <li key={customer.id}>{customer.name}</li> 
          )}
        </ul>
      </div>
    );
  }
}

export default App;
