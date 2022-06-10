import { ThemeProvider } from "styled-components";
import Navigation from "./components/Navigation";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import Home from "./components/Sections/Home";
import About from "./components/Sections/About";
import Roadmap from "./components/Sections/Roadmap";
import Showcase from "./components/Sections/Showcase";
import Team from "./components/Sections/Team";
import Faq from "./components/Sections/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
