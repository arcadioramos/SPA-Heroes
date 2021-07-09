import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PrivateRoute } from "./PrivateRoute";
export const AppRouter = () => {

    const {user} = useContext(AuthContext)

    return (
        <Router>
            <div>
                

              
                <Switch>
                   <Route exact path="/login" component={ LoginScreen}></Route>
                   <PrivateRoute  path="/" component={ DashBoardRoutes } isAuthenticated={user.logged}></PrivateRoute>
                   


                </Switch>
            </div>
        </Router>
    )
}
