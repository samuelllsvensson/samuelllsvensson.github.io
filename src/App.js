import React, { Component } from "react";
import LandingPage from "@pages/LandingPage";
import AboutPage from "@pages/AboutPage";
import PortfolioPage from "@pages/PortfolioPage";
import CommitmentPage from "@pages/CommitmentPage";
import CoursesPage from "@pages/CoursesPage";

import ParallaxBackground from "@components/ParallaxBackground";
import ScrollTop from "@components/ScrollTop";
import Theme from "@components/Theme";
import Browser from "@components/Browser";
import Footer from "@components/Footer";

class App extends Component {
  render() {
    return (
      <div className="dev-landing-page">
        <Theme>
          <ParallaxBackground />
          <Browser except firefox></Browser>
          <LandingPage />
          <AboutPage />
          <PortfolioPage />
          <CommitmentPage />
          <CoursesPage />
          <ScrollTop />
          <Footer />
        </Theme>
      </div>
    );
  }
}

export default App;
