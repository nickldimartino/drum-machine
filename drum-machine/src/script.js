import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

// DrumMachine is a stateful component because it tracks and manages the state of the application
class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundName: ""
    }
    this.playSound = this.playSound.bind(this);
  }
  
  // playSound() will generate a sound when called and display the name of that sound
  playSound(event) {
    let audio = event.target.children[0];  // audio variable set to the 1st child element of the event
    let id = event.target.children[0].id;  // id variable set to the id of the 1st child element of the event
 
    // set the same of the sound based on the id received from the event
    switch(id.toUpperCase()) {
      case 'Q':
        name = "Heater 1";
        break;
      case 'W':
        name = "Heater 2";
        break;
      case 'E':
        name = "Heater 3";
        break;
      case 'A':
        name = "Heater 4";
        break;
      case 'S':
        name = "Clap";
        break;
      case 'D':
        name = "Open-HH";
        break;
      case 'Z':
        name = "Kick-n'-Hat";
        break;
      case 'X':
        name = "Kick";
        break;
      case 'C':
        name = "Closed-HH";
        break;
      default:
        break;
    }
    
    // set the soundName state value to the new name of the sound
    this.setState({
      soundName: name
    });
    
    // play the sound associated with the audio element for the received event
    audio.play();
  }
  
  // Render the drum pad.
  // The display element shows the name of the sound as the state of the application changes.
  // Nine drum pads are rendered with associated text, id, classnames, and audio files.
  // the playSound() method is called when clicked as well as when the keyboard entry clicked matches the element's text.
  // For onKeyDown() to work, the tabIndex attribute is used to indicate the element can be focused when sequential 
  // keyboard navigation is used.
  render() {
    return (
      <div id="container">
        <div id="display">{this.state.soundName}</div>
        <div id="drum-pads">
          <div className="drum-pad" id="bQ" onClick={this.playSound} tabIndex={0} onKeyDown={this.playSound}>Q
            <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
          </div>
          <div className="drum-pad" id="bW" onClick={this.playSound} tabIndex={0} onKeyDown={this.playSound}>W
            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"/>
          </div>
          <div className="drum-pad" id="bE" onClick={this.playSound} tabIndex={0} onKeyDown={this.playSound}>E
            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"/>
          </div>
          <div className="drum-pad" id="bA" onClick={this.playSound} tabIndex={0} onKeyDown={this.playSound}>A
            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"/>
          </div>
          <div className="drum-pad" id="bS" onClick={this.playSound} tabIndex={0} onKeyDown={this.playSound}>S
            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"/>
          </div>
          <div className="drum-pad" id="bD" onClick={this.playSound} tabIndex={0} onKeyDown={this.playSound}>D
            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
          </div>
          <div className="drum-pad" id="bZ" onClick={this.playSound} tabIndex={0} onKeyDown={this.playSound}>Z
            <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/>
          </div>
          <div className="drum-pad" id="bX" onClick={this.playSound} tabIndex={0} onKeyDown={this.playSound}>X
            <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
          </div>
          <div className="drum-pad" id="bC" onClick={this.playSound} tabIndex={0} onKeyDown={this.playSound}>C
            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById("drum-machine"));