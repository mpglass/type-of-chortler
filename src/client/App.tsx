import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Details from "./views/Details";
import Admin from "./views/Admin";
import Compose from "./views/Compose";
import Navbar from "./components/Navbar";

class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <BrowserRouter>
        <main className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/compose" component={Compose} />
            <Route exact path="/details/:chortleid" component={Details} />
            <Route exact path="/admin/:chortleid" component={Admin} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export interface IAppProps {}

export interface IAppState {}

export default App;