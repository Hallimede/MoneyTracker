import React from 'react';
import './App.css';
import IndexRouter from './router/router';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(data: string) {
    console.log(data);
    console.log(`type:${typeof (this.clickHandler)}`);
  }

  render() {
    return (
      <div className="App">
        <IndexRouter></IndexRouter>
      </div>
    );
  }

}

export default App;
