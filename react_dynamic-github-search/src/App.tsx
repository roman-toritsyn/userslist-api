import React, { useState } from 'react';
import './App.css';
import { ReposList } from './components/ReposList';

const App: React.FC = () => {


  return (
    <div className="App">
      <ReposList />
      {/* <ReposList /> */}
      {/* <RepoInfo /> */}
    </div>
  );
}

export default App;
