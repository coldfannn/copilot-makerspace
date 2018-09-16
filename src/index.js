import React from "react"
import ReactDOM from "react-dom"

import "./styles.css";

import { Abstract } from './components/abstract'
import { Blank } from './components/blank'
import { Divider } from './components/divider'
import { Image } from './components/image'
import images from './assets'
import abstracts from './abstracts'

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Image className='banner' url={ images.banner } />
        <div className="App">  
          <Blank height={ 171 } />
          <Abstract { ...abstracts[0] }/>
          <Blank height={ 56 } />
          <Image className='achieve' url={ images.achieve } />
          <Blank height={ 152 } />
          <Abstract { ...abstracts[1] }/>
          <Blank height={ 56 } />
          <div className='mentor-container-1'>
            <Image className='mentor-row-1' url={ images.mentor1 } />
            <Image className='mentor-row-1' url={ images.mentor2 } />
          </div>
          <Blank height={ 26 } />
          <div className='mentor-container-1'>
            <Image className='mentor-row-1' url={ images.mentor3 } />
            <Image className='mentor-row-1' url={ images.mentor4 } />
          </div>
          <Blank height={ 162 } />
          <Abstract { ...abstracts[2] }/>
          <Blank height={ 56 } />
          <div className='mentor-container-2'>
            <Image className='mentor-row-2' url={ images.mentor5 } />
            <Image className='mentor-row-2' url={ images.mentor6 } />
            <Image className='mentor-row-2' url={ images.mentor7 } />
          </div>
          <Blank height={ 162 } />
          <Abstract { ...abstracts[3] }/>
          <Blank height={ 61 } />
          <Image className='calendar' url={ images.calendar } />
          <Blank height={ 162 } />
          <Abstract { ...abstracts[4] }/>
          <Blank height={ 56 } />
          <Image className='procedure' url={ images.procedure } />
          <Blank height={ 76 } />
          <Abstract { ...abstracts[5] }/>
          <Blank height={ 56 } />
          <Image className='cr-code' url={ images.crCode } />
          <Blank height={ 140 } />
          <div className='footer'>
            <p className='footer-company'>主办单位：</p>
            <img src={ images.makerLogo } />
            <p className='footer-company'>承办单位：</p>
            <img src={ images.makerShLogo } />
            <p className='copilot-logo'>
              <img src={ images.copilotLogo } />
            </p>
          </div>
          <Blank height={ 27 } />
          <div className='footer'>
            <p className='footer-gov'>指导单位：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上海市就业促进中心&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;杨浦区人力资源和社会保障局&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共青团杨浦区委员会</p>
          </div>
          <Blank height={ 24 } />
          <Divider width={ 1024 } />
          <Blank height={ 18 } />
          <p className='record'>© 2018 Copilot版权所有&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ICP证：沪ICP备18035215号</p>
          <Blank height={ 36 } />
        </div>
      </React.Fragment>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
