import React, {Component} from 'react';
import MapView from './components/MapView';
import './App.css';


const API_URL = "http:\//127.0.0.1:5000/groups";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
      points: []
    };
  }

  // componentDidMount() {
  //   fetch(API_URL, {
  //       method: 'GET',
  //       headers: {
  //           Accept: 'application/json',
  //       },
  //   })
  //   .then(res => res.json())
  //   .then((res) => this.setState({ points: res }))
  //   .catch(() => this.setState({ hasErrors: true }));

  // };

  render() {
    return (
        <div className="App">
          <MapView/>
        </div>
    );
  }


}

export default App;
