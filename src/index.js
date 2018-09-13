import React from "react"
import ReactDOM from "react-dom"

import "./styles.css";

import { Abstract } from './components/abstract'
import { Image } from './components/image'
import images from './assets'
import abstracts from './abstracts'

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Image className='banner' url={ images.banner } />
        <Abstract { ...abstracts[0] }/>
        <Abstract { ...abstracts[1] }/>
        <Abstract { ...abstracts[2] }/>
        <Abstract { ...abstracts[3] }/>
        <Abstract { ...abstracts[4] }/>
        <Abstract { ...abstracts[5] }/>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
