import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import * as route from "./constants/route";
import { ScrollToTop } from "./components/core/scroll/scrollToTop";

import { HomePage } from "./pages/homePage";
import { AlphabetPage } from "./pages/alphabetPage";
import { DisplayPage } from "./pages/displayPage";

interface IProps {
  darkMode: string;
}

export const App: React.FC<IProps> = (props: IProps) => {
  return (
    <div id="app-wrapper" className={props.darkMode}>
      <HashRouter>
        <ScrollToTop>
          <Routes>
            <Route index path={route.home} Component={HomePage} />
            <Route path={route.alphabet} Component={AlphabetPage} />
            <Route path={route.display} Component={DisplayPage} />
          </Routes>
        </ScrollToTop>
      </HashRouter>
    </div>
  );
};
