import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './AboutPage'
import ArtworkSection from './ArtworkSection'
import WebdevSection from './WebdevSection'
import ContactMe from './ContactMe'


const Main = () => {
  return (
    <Switch>
        {" "}
        <Route exact path="/" component={AboutPage}></Route>
        <Route exact path="/artwork" component={ArtworkSection}></Route>
        <Route  exact path="/webdev" component={WebdevSection}></Route>
        <Route  exact path="/contact" component={ContactMe}></Route>
    </Switch>
  );
}

export default Main;