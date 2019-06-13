import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

const App = () => {
  const [boxCount, setBoxCount] = useState(0);

  const addBox = () => {
    setBoxCount(boxCount + 1);
  };

  const removeLastBox = () => {
    if (boxCount > 0) {
      setBoxCount(boxCount - 1);
    }
  };

  const boxesArray = [...Array(boxCount).fill(true)];

  const boxesList = boxesArray.map((_, i) => (
    <CSSTransition key={i} timeout={400} classNames="t-box">
      <div className="box" />
    </CSSTransition>
  ));

  return (
    <div className="App">
      <button onClick={() => addBox()}>Add Boxes</button>
      <button onClick={() => removeLastBox()}>Remove Last Box</button>
      <div className="columns">
        <div className="box-grid">
          <TransitionGroup component={null}>{boxesList}</TransitionGroup>
        </div>
        <div className="box-grid">
          <TransitionGroup component={null}>{boxesList}</TransitionGroup>
        </div>
        <div className="box-grid">
          <TransitionGroup component={null}>{boxesList}</TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default App;
