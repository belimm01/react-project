import {BrowserRouter, Route, Switch,} from "react-router-dom";
import React from "react";
import ProjectList from "../component/project/ProjectList";
import ProjectItemForm from "../component/project/ProjectItemForm";

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ProjectList}/>
                    {/*<BrowserRouter exact path="/project" component={ProjectItemDetail}/>*/}
                    <Route path="/project/:projectId" component={ProjectItemForm}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}