import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as route from './constants/route';
import { ScrollToTop } from './components/core/scroll/scrollToTop';

import { HomePresenter } from './pages/home/homePresenter';
import { AlphabetPresenter } from './pages/alphabet/alphabetPresenter';

interface IProps { }

export const App: React.FC<IProps> = (props: IProps) => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact={true} path={route.home} component={HomePresenter} />
          <Route path={route.alphabet} component={AlphabetPresenter} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}