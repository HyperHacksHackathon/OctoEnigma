import { Component } from 'react';
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
        <FAQ></FAQ>
        <div className='Page'>
          <div id='ABOUTMARK' style={{
              transform: 'translate(0, -40vh)'
          }}></div>
          <h1>About HyperHacks</h1>
          <h3 className='px-5'>
            Start Date: Oct 1st, 2021 <br></br>
            Length: 48hrs <br></br><br></br>
          HyperHacks is an online event where software and hardware developers from around the world form teams to create a project in only 48 hours. Our event is focused on innovation. We want to inspire students to create a unique project that brings value to society. Through our workshops, we want to give participants the knowledge to take their project further after the hackathon ends.
          </h3>
        </div>
        <Sponsors></Sponsors>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
