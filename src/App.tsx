import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import * as React from 'react';
import './App.css';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <DefaultButton>
          I am a button.
        </DefaultButton>
      </div>
    );
  }
}

export default App;
