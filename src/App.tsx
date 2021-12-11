import React from 'react';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>hello world</h2>
      <h3>hello world</h3>
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
