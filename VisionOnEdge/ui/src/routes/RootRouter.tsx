import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cameras from '../pages/Cameras';
import CameraDetails from '../pages/CameraDetails';
import { PartDetails } from '../pages/PartDetails';
import LabelingPage from '../pages/LabelingPage';
import Locations from '../pages/Locations';
import LocationRegister from '../pages/LocationRegister';
import { Parts } from '../pages/Parts';

export const RootRouter: FC = () => {
  return (
    <Switch>
      <Route path="/location/register" component={LocationRegister} />
      <Route path="/location" component={Locations} />
      <Route path="/label/:imageIndex" component={LabelingPage} />
      <Route path="/cameras/:name" component={CameraDetails} />
      <Route path="/cameras" component={Cameras} />
      <Route path="/parts/detail" component={PartDetails} />
      <Route path="/parts" component={Parts} />
      <Route path="/" component={Home} />
    </Switch>
  );
};
