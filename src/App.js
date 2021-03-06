import { Component } from 'react';
import About from './About';
import FAQ from './FAQ';
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';
import Sponsors from './Sponsors';

class App extends Component {
  state = { 
    scrollPosition: 0,
    width: 0,
    height: 0
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('scroll', this.listenToScroll);
    window.addEventListener('resize', this.updateDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
  };
  
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / document.documentElement.clientHeight;
  
    this.setState({
      scrollPosition: scrolled,
    })
  }

  render() {
    return (
      <div className="App">
        <Home scrollPosition={this.state.scrollPosition}></Home>
        <Nav scrollPosition={this.state.scrollPosition}></Nav>
        <About></About>
        <FAQ></FAQ>
        <Sponsors></Sponsors>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
