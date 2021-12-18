import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/button/Button'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>hello world</h2>
      <h3>hello world</h3>
      <Button>Button</Button>
      <Button btnType={ButtonType.Primary} disabled>Button</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>Button</Button>
      <Button btnType={ButtonType.Link} href="https://cloud.tencent.com">Button</Button>
      <Button btnType={ButtonType.Link} href="https://cloud.tencent.com" disabled>Button</Button>
      <hr/>
      <code>
        const a = b + c
      </code>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
