import React, { Component } from 'react';

const intro = [
  'Wij weten dat jullie graag skiën',
  'Oostenrijk is hier prima voor',
  'Maar ook in Japan kan je skiën',
  'In Japan hebben ze ook eten',
  'In Frankrijk ook',
  'toch?',
  'Maar in Frankrijk kan je ook skiën',
  'Of je kan er een huwelijksaanzoek krijgen',
  'in Parijs',
  'Maar al die dingen hebben jullie al gedaan',
  'dus dan krijg je maar niets van ons',
  'helemaal niets',
  'nada',
  'noppes',
  'allez',
  'behalve één iets natuurlijk',
  'de allerbeste wensen voor jullie huwelijk',
  'en nog iets om van te genieten samen',
].map((text, i, arr) => ({ setStep, step }) => (
  <div>
    <p className="fade-in">{text}</p>
    <button className="btn fade-in" onClick={() => setStep(step + 1)}>
      {i === arr.length - 1 ? 'dit dus:' : 'ok?'}
    </button>
  </div>
));

class Final extends Component {
  state = { show: false };
  render() {
    return (
      <div className="fade-in">
        <p>een etentje bij</p>
        <h2 style={{ fontSize: '3em' }}>Restaurant AT</h2>
        <p>voor jullie</p>
        <small>
          meer informatie <a href="http://www.atsushitanaka.com/#3">hier</a>
        </small>
      </div>
    );
  }
}

const steps = [...intro, Final];

class App extends Component {
  state = { step: 0 };
  render() {
    const { step } = this.state;
    const Step = steps[step] ? steps[step] : steps[step - 1];
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          height: '100%',
        }}
      >
        <Step setStep={step => this.setState({ step })} step={step} />
      </div>
    );
  }
}

export default App;
