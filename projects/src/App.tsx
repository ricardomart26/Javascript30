import { Route, Routes } from 'react-router-dom';
import Home from './scenes/home';
import DrumKit from './scenes/drumkit';
import JsClock from './scenes/jsClock';
import CssVariables from './scenes/cssVariables';
import FlexPanels from './scenes/flexPanels';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/drumkit" element={<DrumKit/>}/>
        <Route path="/jsClock" element={<JsClock/>}/>
        <Route path="/cssVariables" element={<CssVariables/>}/>
        <Route path="/flexPanels" element={<FlexPanels/>}/>

      </Routes>
    </div>
  );
}

export default App;
