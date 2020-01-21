import React from 'react';
import './App.css';
import 'react-dropdown/style.css'
import { Route } from 'react-router-dom'

import NormalList from './components/NormalList'
import ReactWindowList from './components/ReactWindowList'
import ReactWindowColumn from './components/react-window-column'
import ReactWindowGrid from './components/grid/react-window-grid'
import Home from './components/Home'

const App: React.FC = () => {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/normal" component={NormalList} />
      <Route path="/react-window" component={ReactWindowList} />
      <Route path="/react-window-column" component={ReactWindowColumn} />
      <Route path="/react-window-grid" component={ReactWindowGrid} />
</div>
  );
}

export default App;
