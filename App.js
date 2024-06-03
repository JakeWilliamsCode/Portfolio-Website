import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import {About} from './About';
import { Contact } from './Contact';
import { HashRouter, Routes, Route } from 'react-router-dom';
import original from 'react95/dist/themes/original';
import vistaesqueMidnight from 'react95/dist/themes/vistaesqueMidnight';
import fxDev from 'react95/dist/themes/fxDev';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {styleReset } from 'react95';
import styled from 'styled-components';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import background from "./retro-3d-shapes-vaporwave-style.jpg"

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;
// add <GlobalStyles/> to APP to switch to ms95 font
function App() {
  return (
    <div style={{
    backgroundImage:'linear-gradient(to bottom, rgba(30,70,250,0.4), rgba(55,100,255,.9))',
    
    }}>
    
    <ThemeProvider theme={original}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </HashRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;
