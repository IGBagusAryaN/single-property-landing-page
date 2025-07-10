import React from "react";
import ContactInformation from "../sections/contact-information";
import NavigationBar from "../sections/navbar";
import Hero from "../sections/hero";
import About from "../sections/about";
import Overview from "../sections/overview";
import Benefit from "../sections/benefit";
import Contact from "../sections/contact";
import Subscribe from "../sections/subscribe";
import Footer from "../sections/footer";

const LandingPage = () => {
  return (
    <div className="w-full">
      <header>
        <ContactInformation />
        <NavigationBar />
      </header>
      <main>
        <Hero />
        <About />
        <Overview />
        <Benefit />
        <Contact />
        <Subscribe />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;
