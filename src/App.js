import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation'
import ImageLinkForm from './components/ImageLinkForm'
import Logo from './components/Logo'
import Rank from './components/Rank'
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  onInputChange = event => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('click')
  }

  render() {
    return (
      <div className="App">

        <Particles params={particlesOptions} className="particles" />
          <Navigation />
          <Rank />
          <Logo />
          <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit} 
          />
          {
            /*
            <FaceRecognition />
            */
          }
      </div>
    );
  }
}

export default App;
