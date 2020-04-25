import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    selectedFile: null
  }
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }
  fileUploadHandler = () => {
    const fd = new FormData()
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    console.log(...fd)
  }
  render() {
    return(
      <div className="App">
        <input style={{display: 'none'}} type="file" onChange={this.fileSelectedHandler}/>
        <button type="submit" onClick={this.fileUploadHandler}>Submit</button>
      </div>
    );
  }
}

export default App;
