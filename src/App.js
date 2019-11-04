import React, { Component } from 'react';
import Films from './components/films';
import People from './components/people';

class App extends Component {
  state = {
    mydata: [],
    films: 0,
    people: 0,
  }

  render() {
    let button;

    const handleClick = ( param ) => {
      if (param === "films") {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then((data) => {
          this.setState({ mydata: data,
                          films: 1,
                          people: 0
          })
          
        })
        .catch(console.log)
      } else if (param === "people") {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then((data) => {
          this.setState({ mydata: data,
                          films: 0,
                          people: 1
          })
        })
      }
    }

    if (this.state.films === 1) {
      button = <Films data={this.state.mydata}></Films>
      console.log(this.state.mydata);
    } else if(this.state.people === 1) {
      button = <People data={this.state.mydata}></People>
    } else {
      button = 'Press a button to see the magic.'
    }

    return (
      <div className="col text-center">
        <img src="logo.png" alt="Logo" /> <br />
        <button className="btn btn-secondary" onClick={() => handleClick('films')}>Load the films</button> 
        <button className="btn btn-secondary" onClick={() => handleClick('people')}>Show the People</button> 
        <hr />
        {button}
      </div>
    );
  }
}

export default App;