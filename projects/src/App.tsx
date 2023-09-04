import { Route, Routes } from 'react-router-dom';
import Home from './scenes/home';
import DrumKit from './scenes/drumkit';
import JsClock from './scenes/jsClock';
import CssVariables from './scenes/cssVariables';
import FlexPanels from './scenes/flexPanels';
import SearchBar from './scenes/searchBar';
import Canvas from './scenes/canvas';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/drumkit" element={<DrumKit/>}/>
        <Route path="/jsClock" element={<JsClock/>}/>
        <Route path="/cssVariables" element={<CssVariables/>}/>
        <Route path="/flexPanels" element={<FlexPanels/>}/>
        <Route path="/searchBar" element={<SearchBar/>}/>
        <Route path="/canvas" element={<Canvas/>}/>

      </Routes>
  );
}

export default App;
