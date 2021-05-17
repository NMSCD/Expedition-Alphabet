import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import * as route from './constants/route';
import { ScrollToTop } from './components/core/scroll/scrollToTop';

import { HomePresenter } from './pages/home/homePresenter';
import { AlphabetContainer } from './pages/alphabet/alphabetContainer';

interface IProps { }

export const App: React.FC<IProps> = (props: IProps) => {
  return (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact={true} path={route.home} component={HomePresenter} />
          <Route path={route.alphabet} component={AlphabetContainer} />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  );
}