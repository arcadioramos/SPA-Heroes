import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { dcScreen } from "../components/dc/dcScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { marvelScreen } from "../components/marvel/marvelScreen";
import { SearchScreen } from "../components/Search/SearchScreen";
import { Navbar } from "../components/ui/NavBar";
export const DashBoardRoutes = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/marvel" component={ marvelScreen}/>
                <Route exact path="/hero/:heroeId" component={HeroScreen}/>
                <Route exact path="/dc" component={ dcScreen}/>
                <Route exact path="/search" component={ SearchScreen}/>

            </Switch>
        </div>
    )
}
