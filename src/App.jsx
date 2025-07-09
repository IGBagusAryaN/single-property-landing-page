import About from "./component/sections/about";
import Benefit from "./component/sections/benefit";
import Contact from "./component/sections/contact";
import ContactInformation from "./component/sections/contact-information";
import Footer from "./component/sections/footer";
import NavigationBar from "./component/sections/navbar";
import Overview from "./component/sections/overview";
import Hero from "./component/sections/hero";
import Subscribe from "./component/sections/subscribe";

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
