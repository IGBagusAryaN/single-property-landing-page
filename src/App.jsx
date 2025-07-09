import About from "./component/about";
import Benefit from "./component/benefit";
import Contact from "./component/contact";
import ContactInformation from "./component/contact-information";
import Footer from "./component/footer";
import Hero from "./component/hero";
import NavigationBar from "./component/navbar";
import Overview from "./component/overview";
import Subscribe from "./component/subscribe";

function App() {
  return (
    <main className="w-full">
      <ContactInformation/>
      <NavigationBar/>
      <Hero/>
      <About/>
      <Overview/>
      <Benefit/>
      <Contact/>
      <Subscribe/>
      <Footer/>
    </main>
  );
}

export default App;
