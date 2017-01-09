import * as React from 'react';

interface IMainProps {};

interface IMainState {};

export class Main extends React.Component<IMainProps, IMainState> {
  render() {
    return (
      <header className="hero-unit" id="banner">
        <div className="container">
          <h1>{'Hello World!'}</h1>
          <p className="lead">{'Kick Start Your Project With BitMate'}</p>
        </div>
      </header>
    );
  }
}
