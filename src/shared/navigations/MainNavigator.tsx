import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import UserPage from "../../user_management/pages/UserPage";
import history from "./history";
import TaskPage from "../../task_management/pages/TaskPage";
import AuthPage from "../../auth/pages/authPage/AuthPage";

export default function MainNavigator() {
  return(
    <Router history={history} >
      <Switch>
        <Route exact path="/">
          <AuthPage />
        </Route>
        <Route path="/user">
          <UserPage />
        </Route>
        <Route path="/task">
          <TaskPage />
        </Route>
      </Switch>
    </Router>
  );
}