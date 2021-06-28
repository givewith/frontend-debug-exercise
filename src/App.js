import React from 'react';
import './App.css';
import Image from './components/Image';
import { IMAGE_URLS } from './config/constants';

class App extends React.Component {
  constructor(props) {
    super(props);
    this = { imagesVisible: false };
  }

  renderImages = () => {
    return IMAGE_URLS.map(url => {
      return <Image src={ url } />
    });
  }

  render() {
    const { imagesVisible } = this.state;

    return (
      <div className="App">
        <button onClick={ () => this.setState({ imagesVisible: true }) }>Render images</button>

        { imagesVisible && this.renderImages }
      </div>
    );
  }
}

export default App;
