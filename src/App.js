import './App.css';
import About from './components/About/About';
import HomeScreen from './components/HomeScreen/HomeScreen';
import PhoneBody from './components/PhoneBody/PhoneBody';
import PhoneDock from './components/PhoneDock/PhoneDock';
import PhoneNotch from './components/PhoneNotch/PhoneNotch';
import {useEffect, useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import Education from './components/Education/Education';

function App() {
  const [app, setApp] = useState(0)
  
 
  const getApp = () => {
    switch(app){
      case 0: return <HomeScreen setApp={setApp} />
      case 1: return <About setApp={setApp} />
      case 2: return <Education setApp={setApp} />
    }
  }
 
  return (
    <div style={{width: '100vw', height: '100vh', backgroundColor: '#2c3e50', overflow: 'scroll'}}>
      <PhoneBody bgColor={app !== 0 ? '#f5f5f7' : 'transparent'}>
        {getApp() }
        {/* <About /> */}
        {/* <PhoneNotch />
        <About />

        <PhoneDock /> */}
      </PhoneBody>
    </div>
  );
}

export default App;
