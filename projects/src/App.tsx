import { Route, Routes } from 'react-router-dom';
import Home from './scenes/home';
import DrumKit from './scenes/drumkit';
import JsClock from './scenes/jsClock';
import CssVariables from './scenes/cssVariables';
import FlexPanels from './scenes/flexPanels';
import SearchBar from './scenes/searchBar';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/drumkit" element={<DrumKit/>}/>
        <Route path="/jsClock" element={<JsClock/>}/>
        <Route path="/cssVariables" element={<CssVariables/>}/>
        <Route path="/flexPanels" element={<FlexPanels/>}/>
        <Route path="/searchBar" element={<SearchBar/>}/>
      </Routes>
  );
}

export default App;
