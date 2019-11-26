import React from 'react';
import moment from 'moment';

import Controller from './components/Controller';
import Header from './components/Header';
import './App.css';

class App extends React.Component {
  state = {
    time: moment().format('HH:mm:ss'),
    date: moment().format('ddd Do MMMM YYYY'),
    visibility: true
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(() => ({
        time: moment().format('HH:mm:ss')
      }));
      //console.log(this.state.time);
    }, 1000);
  }

  dateOn = () => {
    console.log('date on');
  };

  toggleVisibility = e => {
    this.setState(prevState => ({
      visibility: !prevState.visibility
    }));
  };

  render() {
    return (
      <div className='app'>
        <Header />
        <Controller toggleVisibility={this.toggleVisibility} />
        <div id='clockOuterDiv'>
          <div id='clockDiv'>
            <div id='time'>{this.state.time}</div>
            {this.state.visibility && <div id='date'>{this.state.date}</div>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
