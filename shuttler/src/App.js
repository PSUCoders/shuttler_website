import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Page1 from "./components/Page1HomeMobile/Page1";
import AboutSection from "./components/AboutSection/AboutSection";
import Spacer from "./components/Spacer/Spacer";
import TeamPage from "./components/TeamPage/Team";
import ContactPage from './components/ContactSection/Contact';

class App extends Component {
  state = {
    SideDrawerOpen: false
  };

  navToggleClickHandler = () => {
    this.setState(prevState => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }} className="App">
        <Navbar navClickHandler={this.navToggleClickHandler} />
        <SideDrawer show={this.state.SideDrawerOpen} />
        {backdrop}
        <main>
          <Spacer />
          <Page1 />
          <Spacer />
          <AboutSection />
<<<<<<< HEAD
          <TeamPage />

=======
          {/* <TeamPage /> */}
          <Spacer />
          <ContactPage /> 
          
>>>>>>> dd6357e6060ac8021ca72f98f0ac0980393ecc3c
        </main>
      </div>
    );
  }
}

export default App;
