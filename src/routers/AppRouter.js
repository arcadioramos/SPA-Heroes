import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
export const AppRouter = () => {
    return (
        <Router>
            <div>
                

              
                <Switch>
                   <Route exact path="/login" component={ LoginScreen}></Route>
                   <Route  path="/" component={ DashBoardRoutes }></Route>
                   


                </Switch>
            </div>
        </Router>
    )
}
