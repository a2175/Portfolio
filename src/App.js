import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from "./components/main/Main"
import Entrance from "./components/entrance/Entrance"

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Entrance}/>
      <Route path="/main" component={Main}/>
    </BrowserRouter>
  );
};

export default App;