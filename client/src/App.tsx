import React from 'react';
import './App.css';
import IndexRouter from './router/router';
import { Provider } from 'react-redux';
import store from './store/store'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount(): void {
    store.subscribe(() => {
      console.log(store.getState());
    })
  }

  clickHandler(data: string) {
    console.log(data);
    console.log(`type:${typeof (this.clickHandler)}`);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <IndexRouter></IndexRouter>
        </div>
      </Provider>
    );
  }

}

export default App;
