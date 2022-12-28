import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Contacts from "./components/Contacts";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Works from "./components/Works";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppStyled className="app">
        <Navbar sidebar={sidebar} handleSidebar={handleSidebar} />
        <Sidebar sidebar={sidebar} />
        <Sections className="sections">
          <Intro />
          <Portfolio />
          <Works />
          <Testimonial />
          <Contacts />
        </Sections>
      </AppStyled>
    </ThemeProvider>
  );
}
const AppStyled = styled.div`
  height: 100vh;

  .sections {
    width: 100%;
    height: calc(100vh - 5rem);

    position: relative;
    top: 5rem;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    scrollbar-width: none;
    background-color: aqua;
    &::-webkit-scrollbar {
      display: none;
    }
    > * {
      color: wheat;
      width: 100vw;
      height: 100vh;
      scroll-snap-align: start;
    }
  }
`;
const Sections = styled.div``;
export default App;
