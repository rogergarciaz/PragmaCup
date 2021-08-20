import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Navbar = lazy(() => import("../../components/Navigation/Navbar"));
const Home = lazy(() => import("../Home/Home"));
const Members = lazy(() => import("../Members/Members"));
const Member = lazy(() => import("../Member/Member"));
const Cells = lazy(() => import("../Cells/Cells"));

const memberPath = "member";
const membersPath = "members";
const cellsPath = "cells";
const usernamePath = "username";

export default function Routes() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <div>
          <Navbar className="col-3" />
        </div>
        <div className="container col-8">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path={`/${memberPath}/:${usernamePath}`}>
              <Members />
            </Route>
            <Route exact path={`/${memberPath}`}>
              <Members />
            </Route>
            <Route exact path={`/${membersPath}`}>
              <Member />
            </Route>
            <Route path={`/${cellsPath}`}>
              <Cells />
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}
